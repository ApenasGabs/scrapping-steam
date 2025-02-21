# Steam Market Scraper

![GitHub](https://img.shields.io/badge/license-MIT-blue)
![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)
![Puppeteer](https://img.shields.io/badge/puppeteer-%5E19.0.0-orange)

O **Steam Market Scraper** é uma ferramenta de web scraping que extrai dados de histórico de preços de itens do Steam Community Market. Ele utiliza o Puppeteer para automatizar a coleta de dados diretamente da página de listagem de itens, como caixas, skins e outros itens negociáveis.

---

## Funcionalidades

- Extrai dados de histórico de preços de itens do Steam Community Market.
- Captura informações como **data**, **preço médio** e **quantidade vendida**.
- Converte os dados brutos em um formato estruturado (JSON).
- Fácil de configurar e usar.

---

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/steam-market-scraper.git
   cd steam-market-scraper
   ```

   Instale as dependências:

    ```bash
    npm install
    ```

2. Configure o script:

    Edite o arquivo `index.js` para alterar o URL do item que deseja monitorar.

3. Execute o script:

    ```bash
    node index.js
    ```

## Como Funciona

  O script utiliza o Puppeteer para acessar a página do item no Steam Community Market. Ele localiza e extrai os dados do gráfico de histórico de preços, que são armazenados em um script JavaScript na página. Esses dados são então processados e convertidos em um formato JSON estruturado.

## Exemplo de Saída

```json
[
  [1690123456789, 10.50, 150],
  [1690213456789, 11.00, 200],
  [1690303456789, 10.75, 175]
]
```

Cada entrada contém:

- **Timestamp**: Data e hora da transação.
- **Preço**: Preço médio do item no momento.
- **Quantidade**: Número de itens vendidos.

## Dependências

- Puppeteer: Para automação do navegador.
- Node.js (v14 ou superior).

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor

Gabriel Rodrigues
