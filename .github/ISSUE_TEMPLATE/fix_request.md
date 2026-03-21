---
name: Solicitação de Correção
about: > 
 Commits que resolvem bugs, erros ou comportamento indesejado. Ex: Corrigir falha em formulário, erro em paginação.
title: '[fix]:'
labels: ['fix']
assignees: []
---
## Bug Description

O upload de imagens maiores que 5MB causa a falha do aplicativo devido a estouro de memória.

## Steps to Reproduce

1. Go to "Upload Image"
2. Select an image >5MB
3. Click Upload

## Expected Behavior

Image should upload successfully or show an error if size limit exceeded.

## Actual Behavior

App freezes and crashes after uploading large files.

## Fix Plan

- [ ] Add file size validation on client side
- [ ] Limit upload buffer size on backend

## Environment

- OS: Windows 11
- Browser: Chrome v114
