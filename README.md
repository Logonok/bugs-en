# Bug Tracking System

A web application for tracking errors in projects and fixes, 
built without writing any code using the
[Evado Declarative Framework](https://github.com/mkhorin/evado).

#### App workflow

- Administrator creates employees and assigns them roles (manager, executor).
- Administrator creates projects to track bugs.
- Managers create tasks and describes defects found in projects.
Additional files (screenshots, etc.) can be attached if required.
- Managers assign task executors to fix bugs.
- Executors fix bugs and return tasks for review. 
- Managers test solutions. If the defects are resolved, the task is closed; otherwise, it returns to work.

Employees can comment on tasks to quickly resolve issues that arise.
In addition, employees can keep a track of time spent.

[![Web app without writing any code](doc/poster.jpg)](https://youtu.be/9ENIua84hmo)

## Typical installation

#### Install environment
- [Node.js](https://nodejs.org) (version 16)
- [MongoDB](https://www.mongodb.com/download-center/community) (version 4)

#### Linux
Clone application to /app
```sh
cd /app
npm install
NODE_ENV=development node console/install
NODE_ENV=development node console/start
```

#### Windows
Clone application to c:/app
```sh
cd c:/app
npm install
set NODE_ENV=development
node console/install
node console/start
```

## Docker installation

Clone application to /app
```sh
cd /app
docker-compose up -d mongo
docker-compose up --build installer
docker-compose up -d server
```

## Usage

Web interface: **http://localhost:3000**

Login as executor:
```sh
Email: b@b.b
Password: 123456
```
Login as manager:
```sh
Email: s@s.s
Password: 123456
```
Login as administrator:
```sh
Email: a@a.a
Password: 123456
```