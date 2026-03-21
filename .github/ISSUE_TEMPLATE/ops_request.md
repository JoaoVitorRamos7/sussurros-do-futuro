---
name: Solicitação Operacional
about: > 
 Commits relacionados a infra, deploy, monitoramento, backups ou tarefas operacionais. Ex: Scripts de provisionamento, backups de DB, ambientes de deploy.
title: '[ops]:'
labels: ['operational']
assignees: []
---
## Resumo

Automatizar backups de banco de dados para o S3 todas as noites à meia-noite.

## Tarefas

- [ ] Criar script de backup
- [ ] Agendar cron job
- [ ] Configurar credenciais AWS no CI/CD
- [ ] Testar restauração a partir do backup

## Motivação

Melhorar a preparação para recuperação de desastres.
