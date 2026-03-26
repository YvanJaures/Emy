# 🏌️ EMY — Plateforme de gestion de tournois de golf

> Application web full-stack permettant la gestion de communautés, tournois, équipes et prix pour des événements de golf.

**Auteurs :** Yvan, Emma, Mathieu  
**Version :** 1.0.0  
**Licence :** Non licenciée (projet intégrateur — Collège La Cité)

---

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Base de données](#base-de-données)
- [Lancer l'application](#lancer-lapplication)
- [API — Routes disponibles](#api--routes-disponibles)
- [Contribution](#contribution)

---

## Aperçu

EMY est une application web combinant un backend **Express.js** et un frontend **Next.js** dans un serveur unique. Elle permet de :

- Créer et gérer des **communautés** de golf
- Organiser des **tournois** avec gestion des équipes et des joueurs
- Attribuer des **prix** sponsorisés
- Gérer les rôles : **Membre**, **Administrateur**, **Manager**, **Sponsor**
- Authentification sécurisée avec sessions et Passport.js

---

## Technologies utilisées

| Couche | Technologies |
|---|---|
| Backend | Node.js, Express.js 5, Passport.js |
| Frontend | Next.js 16, React, Vite |
| Base de données | SQL Server (MSSQL) |
| ORM | Prisma 7 |
| Auth | express-session, bcrypt, passport-local |
| Autres | helmet, cors, compression, nodemailer, dotenv |

---

## Prérequis

- **Node.js** v18+
- **npm** v9+
- **SQL Server** (instance locale ou distante)
- **Git**

---

## Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/YvanJaures/Emy.git
cd Emy

# 2. Installer les dépendances
npm install

# 3. Générer le client Prisma
npx prisma generate
```

---

## Configuration

Créer un fichier `.env` à la racine du projet en se basant sur l'exemple ci-dessous :

```env
# Environnement
NODE_ENV=development
PORT=3000

# Base de données SQL Server
DATABASE_URL="sqlserver://localhost:1433;database=EMY;user=sa;password=VotreMotDePasse;trustServerCertificate=true"

# Session
SESSION_SECRET=votre_secret_de_session_tres_long_et_aleatoire

# Email (nodemailer)
MAIL_HOST=smtp.exemple.com
MAIL_PORT=587
MAIL_USER=votre@email.com
MAIL_PASS=votre_mot_de_passe
```

---

## Base de données

### Initialiser le schéma

```bash
# Pousser le schéma Prisma vers la base de données
npx prisma db push

# (Optionnel) Régénérer le client après modification du schéma
npx prisma generate && npx prisma db push
```

### Peupler la base de données avec des données de test

```bash
# Seed principal (données fictives avec Faker)
node ./src/models/seed.js

# Seed alternatif
node ./src/models/seedDatas.js
```

> **Note :** Après le seed, utiliser `GET /api/membres` pour récupérer un nom d'utilisateur de test valide.

### Visualiser la base de données (optionnel)

```bash
npx prisma studio
```

---

## Lancer l'application

```bash
# Mode développement (avec rechargement automatique)
npm run dev

# Mode production
npm start
```

L'application sera accessible à l'adresse : **http://localhost:3000**

Vérifier que le backend fonctionne : **http://localhost:3000/api/health**

---

## API — Routes disponibles

> Toutes les routes sont préfixées par `/api`. Les routes protégées nécessitent un header `role: admin`.

### Membres (`/api`)

| Méthode | Route | Description |
|---|---|---|
| POST | `/member/add` | Créer un membre |
| PATCH | `/member/update` | Mettre à jour les infos d'un membre |
| PATCH | `/member/password` | Changer le mot de passe |
| POST | `/member/email` | Envoyer un email de vérification |
| POST | `/member/community/join` | Rejoindre une communauté |
| POST | `/member/tour/join` | S'inscrire à un tournoi |
| POST | `/member/team` | Créer une équipe |
| POST | `/member/team/add` | Rejoindre une équipe |
| GET | `/users` | Lister tous les membres |
| GET | `/user` | Récupérer un membre |

### Tournois (`/api`)

| Méthode | Route | Description |
|---|---|---|
| GET | `/tournaments` | Lister tous les tournois |
| GET | `/tournaments/admin/:id` | Tournois d'un admin |

### Communautés (`/api`)

| Méthode | Route | Description |
|---|---|---|
| GET | `/communities` | Lister toutes les communautés |
| GET | `/community` | Récupérer une communauté |
| GET | `/community/members` | Membres d'une communauté |

### Administration (`/api/admin`) 🔒

| Méthode | Route | Description |
|---|---|---|
| POST | `/tour` | Créer un tournoi |
| PATCH | `/tour/status` | Modifier le statut d'un tournoi |
| POST | `/member` | Ajouter un membre à une équipe |
| DELETE | `/member` | Retirer un membre d'une équipe |
| DELETE | `/member/tour` | Retirer un membre d'un tournoi |
| DELETE | `/member/community` | Retirer un membre d'une communauté |
| POST | `/prize` | Créer un prix |
| PATCH | `/prize` | Modifier un prix |
| DELETE | `/prize` | Supprimer un prix |
| POST | `/admin` | Ajouter un administrateur |
| DELETE | `/admin` | Supprimer un administrateur |
| GET | `/admins` | Lister les administrateurs |
| PATCH | `/community/update` | Mettre à jour une communauté |

---

## Contribution

1. Créer une branche à partir de `main` : `git checkout -b feature/ma-fonctionnalite`
2. Committer les changements : `git commit -m "feat: description"`
3. Pousser la branche : `git push origin feature/ma-fonctionnalite`
4. Ouvrir une **Pull Request** sur GitHub

### Signaler un bug

Ouvrir une issue sur [GitHub Issues](https://github.com/YvanJaures/Emy/issues).

---

*Projet intégrateur — Collège La Cité, Session 4*