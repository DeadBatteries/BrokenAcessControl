# BrokenAcessControl

# 🔐 Vulnerable Auth Lab (Express)

Este projeto é um laboratório prático de Cybersecurity focado em vulnerabilidades de autenticação e controle de acesso em aplicações web.

O objetivo é entender **como sistemas quebram**, não apenas como funcionam.

---

## 🧠 Contexto

A aplicação foi construída utilizando Node.js com Express, com o propósito de simular uma implementação **intencionalmente vulnerável** de autenticação baseada em parâmetros de query.

Esse tipo de falha é comum em sistemas mal projetados e pode levar a **escalonamento de privilégio**.

---

## ⚙️ Tecnologias utilizadas

- Node.js
- Express

---

## 🚨 Vulnerabilidade implementada

### 🔹 Query-based Authentication (VULNERÁVEL)

A aplicação utiliza um middleware que define o usuário com base em um parâmetro da URL:

```http
GET /admin/users?user=joao