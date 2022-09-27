# @tecsinapse/eslint-config
Projeto para padronizar a configuração do ESLint e do Prettier utilizada na TecSinapse para projetos TypeScript

# Como usar?

Adicionar no seu package.json como devDependencies:
```
pnpm add -D @tecsinapse/eslint-config
```
ou yarn
```
yarn add -D @tecsinapse/eslint-config
```

Incluir no seu projeto o arquivo **.prettierrc.cjs** com o conteúdo:
```javascript
module.exports = require('@tecsinapse/eslint-config/prettier.config');
```

Incluir no seu projeto o arquivo **.eslintrc.cjs** com o conteúdo:
```javascript
module.exports = require('@tecsinapse/eslint-config');
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

# Versionamento
Para versionar você pode utilizar:
```
npx --yes standard-version --release-as $VERSION
```

Onde `$VERSION` é `patch` (0.0.x), `minor` (0.x.0) ou `major` (x.0.0). Se preferir, é possível especificar a versão diretamente (x.x.x).

Ao fim do processo, você deverá efetuar o `git push` das alterações:
```
git push --follow-tags origin $BRANCH
```
Onde `$BRANCH` é o branch em que os comandos foram executados.