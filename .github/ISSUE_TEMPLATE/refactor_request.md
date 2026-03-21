---
name: Solicitação de Refatoração
about: > 
 Refatorar ou limpar código sem alterar comportamento externo. Ex: Extrair métodos, reorganizar arquivos, melhorar legibilidade.
title: '[refactor]:'
labels: ['refactor']
assignees: []
---
## Resumo

Refatorar a lógica de validação de formulário para usar uma abordagem baseada em esquema em vez de verificações manuais.

## Motivação

A lógica atual é difícil de ler e manter. A mudança para `zod` a tornará mais consistente e testável.

## Tarefas

- [ ] Instalar `zod`
- [ ] Substituir validação manual por esquema
- [ ] Atualizar mensagens de erro
- [ ] Garantir que todos os testes existentes passem

## Nenhuma alteração de comportamento é esperada
