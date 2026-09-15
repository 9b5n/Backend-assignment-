# Assignment 6: Express Router-Level Middleware

## Description

This assignment demonstrates router-level middleware in Express.js. A separate router is created, a logger is attached to it, and the router is mounted under the `/api` path.

## Folder Structure

```text
assignment_6
├── assignment_six.js
├── package.json
└── README.md
```

## Features

- Creates a router with `express.Router()`.
- Defines a custom `routerLogger` middleware.
- Logs the HTTP method, request URL, and timestamp.
- Applies the logger only to routes registered on the router.
- Mounts the router at `/api`.
- Exports the app, router, and logger for reuse or testing.

## Routes

| Method | URL | Response |
| --- | --- | --- |
| `GET` | `/api/students` | `Students List` |
| `GET` | `/api/courses` | `Courses List` |
| `GET` | `/api/faculty` | `Faculty List` |

## How It Works

The middleware is registered with `router.use(routerLogger)`, so it runs before each route in the router. It logs entries in this format:

```text
GET /api/students 2026-09-15 12:30:00
```

The timestamp is generated in ISO format and displayed as `YYYY-MM-DD HH:mm:ss`.

## How to Run

From the project root, run:

```bash
cd assignment_6
npm install
npm start
```

The server starts at:

```text
http://localhost:3000
```

## URLs to Test

```text
http://localhost:3000/api/students
http://localhost:3000/api/courses
http://localhost:3000/api/faculty
```

## Expected Browser Output

```text
/api/students -> Students List
/api/courses  -> Courses List
/api/faculty  -> Faculty List
```

## Expected Terminal Output

```text
Server is running on http://localhost:3000
GET /api/students 2026-09-15 12:30:00
GET /api/courses 2026-09-15 12:30:05
GET /api/faculty 2026-09-15 12:30:10
```

The timestamps will differ each time the routes are requested.

## Concepts Covered

- `express.Router()`
- `router.use()`
- Router-level middleware
- `req.method`
- `req.originalUrl`
- `next()`
- Express route mounting
