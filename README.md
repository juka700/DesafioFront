# 🛒 Teste Prático Front-End Jr - Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Front-End Jr** na **Econverse**. 

O objetivo do projeto é construir uma vitrine de produtos responsiva e um modal interativo de detalhes do produto, consumindo uma API REST externa em JSON e seguindo rigorosamente o design proposto no Figma.

---

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — Construção da interface com tipagem estática e componentes reutilizáveis.
- **[Vite](https://vitejs.dev/)** — Build tool rápido e otimizado para o desenvolvimento front-end.
- **[Sass (SCSS)](https://sass-lang.com/)** — Pré-processador CSS para estilização modular, uso de variáveis, mixins e nesting.
- **[Lucide React](https://lucide.dev/)** — Biblioteca leve de ícones SVG.

*(Nota: Conforme solicitado nos requisitos, **não** foram utilizadas bibliotecas de componentes de UI como Bootstrap, Tailwind ou Material UI).*

---

## 📌 Funcionalidades Implementadas

- **Vitrine Dinâmica de Produtos:** Consumo do endpoint JSON para renderizar a lista de produtos com foto, nome e preço.
- **Modal de Detalhes do Produto:**
  - Abre ao clicar em qualquer card de produto ou no botão "Comprar".
  - Exibe foto, nome, preço, descrição e opção de parcelamento.
  - Fechamento facilitado: via botão de fechar (`×`), clique no backdrop (overlay) ou tecla `Esc`.
- **Estados de Carregamento e Erro:** Feedback visual para o usuário enquanto os dados são carregados ou em caso de falha na requisição.
- **Boas Práticas de SEO & Acessibilidade:**
  - Uso de HTML5 semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Meta tags para SEO e compatibilidade.
  - Atributos `alt` adequados em todas as imagens.
- **Design Responsivo Pixel-to-Pixel:** Layout adaptado para diferentes resoluções de tela respeitando as diretrizes de cores, fontes e espaçamentos do Figma.

---

## 🌐 Consumo da API

- **Endpoint dos Produtos:** `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

---

## 📦 Como Compilar e Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o `npm` instalados em sua máquina.

### Passo a Passo (No Windows)

1. **Abra o terminal na pasta do projeto:**
   Se você já estiver na pasta `C:\Users\julio\Desktop\DesafioFront`, entre na pasta do projeto com o comando:
   ```cmd
   cd econverse-teste