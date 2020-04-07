Projeto para padronizar a configuração do ESLint e do Prettier utilizada na TecSinapse para projetos JavaScript

# Como usar?

Adicionar no seu package.json como dev dependencies:
```
yarn add --dev @tecsinapse/eslint-config
```

Incluir no seu projeto o arquivo **prettier.config.js** com o conteúdo:
```javascript
module.exports = require('@tecsinapse/eslint-config/prettier.config');
```

Adicionar no package.json uma seção:
```json
  "eslintConfig": {
    "extends": [
      "@tecsinapse/tecsinapse-js"
    ]
  }
```


# Exceções

Usar para console.log de pontos realmente importantes de ficarem no servidor
```javascript
// eslint-disable-next-line no-console
``` 
Usar em casos que realmente não faz sentido ter um caso padrão para o switch/case
```javascript
// eslint-disable-next-line default-case
```
Usar em pontos onde realmente não temos framework visual para suportar uma implementação simples
```javascript
// eslint-disable-next-line no-alert
```
Usar em pontos onde realmente os dados ficam apenas no cliente e são informações simples que possuem ciclo de vida maior do que o template
```javascript
// eslint-disable-next-line meteor/no-session
``` 
