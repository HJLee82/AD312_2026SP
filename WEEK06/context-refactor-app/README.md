# Context Refactor App - Refactoring Prop Drilling to Context

A React app demonstrating the refactoring of prop drilling to React Context API.

## Features
- UserContext with createContext and UserProvider
- useContext hook to consume data in deeply nested components
- Handles edge cases: null user, empty fields, invalid theme

## How to Run
```bash
npm install
npm run dev
```

## Component Tree
App → Dashboard → Sidebar → UserProfile

## Tech Stack
- React + Vite
- React Context API