const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'database.json');

// Garante que o diretório de dados existe
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

// Função auxiliar para ler dados
function readDatabase() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Erro ao ler banco de dados:', error);
  }
  return null;
}

// Função auxiliar para gravar dados
function writeDatabase(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Erro ao salvar banco de dados:', error);
    return false;
  }
}

// Rota de Healthcheck
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Obter dados sincronizados (compartilhados pelo casal)
app.get('/api/data', (req, res) => {
  const data = readDatabase();
  if (data) {
    return res.json(data);
  }
  return res.status(404).json({ message: 'Nenhum dado salvo ainda no servidor' });
});

// Salvar / Sincronizar dados entre marido e esposa
app.post('/api/data', (req, res) => {
  const incomingData = req.body;
  if (!incomingData || typeof incomingData !== 'object') {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const success = writeDatabase(incomingData);
  if (success) {
    return res.json({ success: true, updated: new Date().toISOString() });
  } else {
    return res.status(500).json({ error: 'Falha ao gravar os dados' });
  }
});

// Fallback: Redireciona qualquer outra rota para o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`💑 Servidor de Finanças do Casal iniciado!`);
  console.log(`🚀 Acesse em: http://localhost:${PORT}`);
  console.log(`=========================================`);
});
