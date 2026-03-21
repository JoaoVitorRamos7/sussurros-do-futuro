---
name: Solicitação de Correção
about: > 
 Commits que resolvem bugs, erros ou comportamento indesejado. Ex: Corrigir falha em formulário, erro em paginação.
title: '[fix]:'
labels: ['fix']
assignees: []
---
## Descrição do Bug

O upload de imagens maiores que 5MB causa a falha do aplicativo devido a estouro de memória.

## Etapas para reproduzir

1. Vá em "Carregar imagem"
2. Selecione uma imagem> 5 MB
3. Clique em Carregar

## Comportamento esperado

A imagem deverá ser carregada com êxito ou mostrar um erro se o limite de tamanho for excedido.

## Comportamento real

O aplicativo congela e trava após enviar arquivos grandes.

## Plano de correção

- [] Adicionar validação de tamanho de arquivo no lado do cliente
- [] Limitar o tamanho do buffer de upload no back-end

## Ambiente

- SO: Windows 11
- Navegador: Chrome v114
