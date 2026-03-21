---
name: Solicitação de Performance
about: > 
 Commits de refatoração para melhorar a performance. Ex: Lazy loading de imagens, compressão.
title: '[perf]:'
labels: 'performance'
assignees: ''
---
## Resumo

Usar carregamento lento (lazy loading) e compressão para as imagens do banner da página inicial para melhorar o tempo de carregamento.

## Comportamento Atual

As imagens são carregadas imediatamente, causando uma renderização inicial lenta.

## Plano de Melhoria

- [ ] Habilitar carregamento lento para imagens não críticas
- [ ] Comprimir imagens usando WebP
- [ ] Testar a velocidade de carregamento antes e depois

## Métricas a serem observadas

- Lighthouse performance score
- Page load time
