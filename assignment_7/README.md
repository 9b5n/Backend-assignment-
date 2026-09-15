# Assignment 7: Route Parameters and Query Parameters

## Description

This assignment demonstrates how Express.js handles route parameters with `req.params` and query parameters with `req.query`. It includes three separate exercises and a combined server with clickable test links.

## Folder Structure

```text
assignment_7
├── assignment1.js
├── assignment2.js
├── assignment3.js
├── index.js
├── package.json
└── README.md
```

## Assignments Implemented

### Assignment 1: Route Parameters

The `GET /student/:id` route reads the student ID from `req.params.id`.

```text
GET /student/101
Student ID: 101
```

Other example:

```text
GET /student/205
Student ID: 205
```

### Assignment 2: Query Parameters

The `GET /search` route reads optional `name` and `course` values from `req.query`.

With both query parameters:

```text
GET /search?name=Shubh&course=Node.js
Name: Shubh
Course: Node.js
```

With no query parameters:

```text
GET /search
No search data provided.
```

The route also handles requests containing only `name` or only `course`.

### Assignment 3: Student Profile

The `GET /student/:id` route combines a route parameter with query parameters.

```text
GET /student/101?name=Shubh&course=Backend
Student ID: 101
Name: Shubh
Course: Backend
```

The response uses HTML line breaks between the student details.

## Combined Server

The `index.js` file includes:

- The student ID route from Assignment 1.
- The search route from Assignment 2.
- The student profile route from Assignment 3.
- A home page containing clickable links for testing each route.

Open the home page at:

```text
http://localhost:3000
```

## How to Run

From the `assignment_7` directory, install dependencies and start the combined server:

```bash
cd assignment_7
npm install
npm start
```

You can also use:

```bash
npm run serve
```

The server runs at `http://localhost:3000`.

## Run Individual Assignments

Run only one exercise at a time:

```bash
node assignment1.js
node assignment2.js
node assignment3.js
```

Each individual file starts a server on port `3000`, so stop one server before starting another.

## Concepts Covered

- Express.js route definitions
- Route parameters with `req.params`
- Query parameters with `req.query`
- Combining route and query parameters
- Conditional responses
- Express HTML responses
- Nodemon development workflow
