# Viagem pelo Sistema Solar 🪐

Página única sobre os planetas do Sistema Solar, desenvolvida para a avaliação prática da Unidade Curricular **Programação de Aplicativos** (Curso Técnico em Desenvolvimento de Sistemas – SENAI/SC).

A página apresenta os planetas, uma lista com a ordem deles a partir do Sol, curiosidades e uma **calculadora** que mostra quanto o usuário pesaria em outro planeta.

## Funcionalidades

- Menu de navegação entre as seções (Início, Planetas, Curiosidades e Calculadora)
- Cards com imagens e informações dos planetas
- Lista numerada com a ordem dos planetas e lista de curiosidades
- Layout adaptado para computador e celular
- Formulário com validação dos dados e tratamento de erros (`try/catch`)

## Estrutura do projeto

```
sistema-solar/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
└── README.md
```

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code).

## Formulário: cálculo e regras de validação

O formulário pede o **nome** e o **peso na Terra (kg)**. Ao enviar, a página mostra quanto a balança marcaria em cada planeta.

**Cálculo:** peso no planeta = peso na Terra × gravidade do planeta ÷ 9,8

**Regras de validação:**

| Campo | Regra |
|---|---|
| Nome | Obrigatório, com pelo menos 2 letras |
| Peso | Obrigatório, precisa ser número e estar entre 1 e 300 kg |

Quando algum dado está errado, o JavaScript lança um erro (`throw new Error`), que é capturado pelo `catch` e mostrado na página em vermelho. Quando está tudo certo, os resultados aparecem na lista e a mensagem fica verde. Depois de um erro, o formulário continua funcionando normalmente.

## Testes realizados

| Nº | Nome | Peso | Resultado esperado | Resultado obtido |
|---|---|---|---|---|
| 1 | *(vazio)* | 60 | Erro: "Informe o seu nome." | ✅ OK |
| 2 | A | 60 | Erro: nome precisa ter pelo menos 2 letras | ✅ OK |
| 3 | Gustavo | *(vazio)* | Erro: "Informe o seu peso na Terra usando apenas números." | ✅ OK |
| 4 | Gustavo | 0 | Erro: peso precisa estar entre 1 e 300 kg | ✅ OK |
| 5 | Gustavo | -5 | Erro: peso precisa estar entre 1 e 300 kg | ✅ OK |
| 6 | Gustavo | 301 | Erro: peso precisa estar entre 1 e 300 kg | ✅ OK |
| 7 | Gustavo | 60 | Marte: 22.7 kg, Júpiter: 141.4 kg, Netuno: 67.3 kg | ✅ OK |
| 8 | Gustavo | 60.5 | Marte: 22.8 kg | ✅ OK |
| 9 | Envio válido logo depois de um envio com erro | | Os resultados aparecem normalmente | ✅ OK |

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Origem dos recursos

- **Imagens** (`img/`): ilustrações em SVG criadas para este projeto com auxílio de inteligência artificial (Claude, da Anthropic).
- **Valores de gravidade dos planetas:** NASA – Planetary Fact Sheet (https://nssdc.gsfc.nasa.gov/planetary/factsheet/).

## Uso de inteligência artificial

Este projeto foi desenvolvido com auxílio da ferramenta de inteligência artificial **Claude**.

## Autor

Gustavo Batistella
