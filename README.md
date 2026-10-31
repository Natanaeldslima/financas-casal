# 💑 Nosso Dinheiro - Finanças do Casal

Um aplicativo web moderno, simples e inteligente feito especialmente para recém-casados acompanharem os gastos do mês, controlarem múltiplos cartões de crédito, dívidas/empréstimos, contas fixas e saberem exatamente **o que ainda têm e quanto podem gastar** até o próximo salário!

---

## ✨ Principais Funcionalidades

1. **🎯 Painel "O Que Ainda Podemos Gastar"**:
   - Calcula automaticamente:  
     $$\text{Saldo Livre Real} = \text{Entradas (Salário)} - \text{Contas Fixas} - \text{Faturas dos Cartões} - \text{Gastos à Vista (Pix/Dinheiro)}$$
   - **Termômetro Diário**: Mostra em tempo real quanto vocês podem gastar em média por dia até o fim do mês sem entrar no vermelho!

2. **⚡ Lançamento Rápido no Celular**:
   - Registre um gasto em menos de 5 segundos.
   - Escolha se foi no **Pix**, no **Cartão de Crédito X** ou no **Dinheiro/Débito**.
   - Identifique quem realizou o gasto (**Marido** ou **Esposa**), com nomes personalizáveis.
   - Cada aparelho pode lembrar quem é o usuário principal para agilizar o preenchimento.

3. **💳 Gestão de Múltiplos Cartões de Crédito**:
   - Cadastre quantos cartões tiverem (Nubank, Inter, Bradesco, C6, etc.).
   - Defina limites, dia de fechamento e dia de vencimento.
   - A fatura do mês é somada automaticamente conforme vocês lançam compras no cartão correspondente.

4. **📑 Contas Fixas & Dinheiro Emprestado**:
   - Controle boletos mensais (Aluguel, Luz, Água, Internet) com botão de "Marcar como Pago".
   - Controle de empréstimos e parcelamentos: veja quantas parcelas faltam e o saldo devedor total restante.

5. **📊 Gráficos Interativos**:
   - Gráfico de divisão de gastos entre o casal (quem gastou quanto).
   - Gráfico de pizza com categorias (Mercado, Lazer, Saúde, Casa, etc.).

6. **☁️ Sincronização entre os 2 Celulares**:
   - Com o servidor Node.js incluso (`server.js`), quando hospedado no **Render**, os lançamentos feitos no celular de um aparecem no celular do outro automaticamente em tempo real!
   - Funciona também 100% offline via `LocalStorage` do navegador, com opção de exportar/importar backup JSON a qualquer momento.

---

## 🚀 Como Testar Imediatamente no Computador

Você não precisa instalar nada para começar a ver o projeto!

1. Vá até a pasta onde estão os arquivos:  
   `c:\Users\Natanael\Documents\antigravity\intelligent-shannon`
2. Dê **dois cliques** no arquivo `index.html`.
3. Ele abrirá no seu navegador favorito (Chrome, Edge, etc.) totalmente funcional e interativo!

---

## 🌐 Como Subir no GitHub e Colocar no Render

Para que você e sua esposa possam abrir o site no celular de qualquer lugar (no supermercado, na rua, em casa), siga este passo a passo simples:

### 1️⃣ Subir para o GitHub

1. Acesse [github.com](https://github.com) e crie um novo repositório (ex: `financas-casal`).
2. No seu computador, abra o terminal nesta pasta e execute os comandos:
   ```bash
   git add .
   git commit -m "Meu sistema de finanças do casal"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/financas-casal.git
   git push -u origin main
   ```
   *(Substitua `SEU_USUARIO` pelo seu usuário do GitHub).*

---

### 2️⃣ Publicar Grátis no Render (com Sincronização entre os dois celulares)

O **Render** permite hospedar gratuitamente o servidor para que o que você lançar apareça no celular da sua esposa na hora:

1. Acesse [render.com](https://render.com) e faça login (pode entrar com sua conta do GitHub).
2. Clique no botão azul **"New +"** no canto superior direito e selecione **"Web Service"**.
3. Conecte ao seu repositório `financas-casal`.
4. Preencha as configurações básicas:
   - **Name**: `financas-casal` (ou o nome que preferir)
   - **Language**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. Clique em **"Create Web Service"**.
6. Aguarde cerca de 1 a 2 minutos. O Render vai gerar um link público para vocês, por exemplo:  
   👉 `https://financas-casal.onrender.com`

---

## 📱 Dica de Ouro: Como Usar Como um Aplicativo no Celular

Tanto você quanto sua esposa podem adicionar o site à tela de início do celular para abrir como se fosse um app instalado na Play Store ou App Store:

- **No iPhone (Safari)**:
  1. Abra o link gerado pelo Render.
  2. Toque no botão de **Compartilhar** (ícone do quadrado com a seta para cima).
  3. Role e toque em **"Adicionar à Tela de Início"**.
- **No Android (Chrome)**:
  1. Abra o link gerado pelo Render.
  2. Toque nos **3 pontinhos** no canto superior direito.
  3. Toque em **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**.

Pronto! Um ícone com o emoji 💑 ficará na tela inicial dos dois!

---

## 💡 Dicas de Sucesso Financeiro para Recém-Casados

1. **Alinhem as expectativas todo domingo à noite**: Abram o site juntos, olhem o painel *"O que ainda podemos gastar"* e planejem a semana.
2. **Defina quem é quem no celular**: Vá em Configurações (⚙️) no seu celular e marque seu perfil; no celular dela, marque o perfil dela. Assim, quando qualquer um clicar em "Novo Gasto", já estará pré-selecionado o nome correto!
3. **Reserva de Emergência**: Sempre que sobrar um valor positivo no fim do mês no indicador "Saldo Livre", combinem de guardar uma parte para criar a reserva de vocês.
