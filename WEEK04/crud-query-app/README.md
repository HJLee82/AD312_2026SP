# Blog Post Manager

A React application that performs full CRUD operations using TanStack Query and JSONPlaceholder API.

## Features
- Fetch and display all blog posts (GET)
- Create a new post (POST)
- Update a post fully (PUT)
- Update only the title of a post (PATCH)
- Delete a post (DELETE)
- Filter posts by User ID

## Tech Stack
- React (Vite)
- TanStack Query

## How to Run
```bash
npm install
npm run dev
```

## API
[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Note
JSONPlaceholder is a fake REST API for testing. Posts with ID 1~100 exist by default. Created posts return ID 101 but are not actually saved to the database.