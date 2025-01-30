# @tecsinapse/eslint-config

Projeto para padronizar a configuração do ESLint e do Prettier utilizada na TecSinapse para projetos TypeScript

# Como usar?

Adicionar no seu package.json como devDependencies:

```
pnpm add -D @tecsinapse/eslint-config
```

Incluir no seu projeto o arquivo **prettier.config.mjs** com o conteúdo:

```javascript
import tecsinapsePrettier from "@tecsinapse/eslint-config/prettier.mjs";

export default tecsinapsePrettier;
```

Incluir no seu projeto o arquivo **eslint.config.mjs** com o conteúdo:

```javascript
import tecsinapseEslintConfig from "@tecsinapse/eslint-config";

export default [...tecsinapseEslintConfig];
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

# Publicação

Para publicar basta rodar o seguinte comando:

```
npm publish
```
