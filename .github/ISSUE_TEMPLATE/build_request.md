---
name: Solicitação de Build
about: > 
 Commits que modificam o build, gerenciador de pacotes, versionamento ou CI/CD. Ex: Atualizar dependências, configurar Webpack, ajustar GitHub Actions.
title: '[build]:'
labels: ['build']
assignees: []
---
## Resumo

Atualizar a versão do Node para 20.0 e fazer upgrade de todas as dependências desatualizadas para manter a segurança e compatibilidade.

## Tarefas

- [ ] Atualizar `.nvmrc`
- [ ] Atualizar dependências principais (ex: React, Express)
- [ ] Corrigir breaking changes
- [ ] Atualizar a configuração do pipeline de CI

## Testes

Garantir que a build passe localmente e no CI.
