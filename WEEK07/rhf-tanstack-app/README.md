# Integrating React Hook Form with TanStack Query and Mock REST APIs

A profile settings form built with React Hook Form and TanStack Query against a local JSON Server mock API.

## Features
- Fetch profile data with useQuery and populate form with reset()
- Save changes with useMutation (PUT request)
- Cache invalidation on successful save
- Save button disabled when form is unchanged (isDirty)
- Loading banner during mutation
- Server-side conflict error handling with setError

## How to Run

Start JSON Server:
```bash
npx json-server --watch db.json --port 3001
```

Start the app:
```bash
npm install
npm run dev
```

## Endpoints
- GET/PUT http://localhost:3001/profile

## Tech Stack
- React + Vite
- React Hook Form
- TanStack Query
- JSON Server