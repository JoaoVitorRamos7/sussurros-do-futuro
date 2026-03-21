---
name: Solicitação de Teste
about: > 
 Adicionar novos testes, melhorar testes existentes ou corrigir casos de teste. Ex: Adicionar unit tests para componente, atualizar mocks.
title: '[test]:'
labels: ['test']
assignees: []
---
## Resumo

Adicionar missing unit tests para login, logout, e token refresh logic em `AuthService`.

## Tarefas

- [ ] Testar login com credenciais válidas
- [ ] Testar login com credenciais inválidas
- [ ] Testar logout limpa o token
- [ ] Testar o comportamento de atualização de token

## Meta de Cobertura

Atingir pelo menos 90% de cobertura para `auth/AuthService.ts`
