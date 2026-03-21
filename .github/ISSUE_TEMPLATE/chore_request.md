---
name: Solicitação de Tarefa Geral
about: > 
 Commits diversos de manutenção do projeto sem afetar o código-fonte ou runtime. Ex: .gitignore, renomear arquivos, limpar ativos temporários.
title: '[chore]:'
labels: ['chore']
assignees: []
---
## Resumo

Atualizar `.gitignore` para evitar que arquivos de sistema do macOS sejam commitados.

## Motivação

Limpar o repositório e evitar que arquivos desnecessários poluam os diffs.

## Tarefas

- [ ] Adicionar `.DS_Store` ao `.gitignore`
- [ ] Remover arquivos .DS_Store rastreados existentes.
