# TaskFlow Dashboard

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-RTK_Query-purple?logo=redux)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss)

Modern, responsive user dashboard with pagination, routing, and live todo toggling.

## Tech Stack

- React 18 + TypeScript (strict mode)
- Redux Toolkit + RTK Query (caching, optimistic updates)
- React Router v6 (clean /user/:id pages)
- Pagination ("Load More")
- Dedicated user profile pages with Posts & Todos
- Fully responsive Tailwind design
- Zero external dependencies beyond the stack

## Features

- List of users with avatar & details
- Click any user → see their latest 5 posts + todo list
- Toggle todo completion (PATCH request + instant UI update via RTK Query cache)
- Fully responsive & accessible
- Loading & error states
- Clean folder structure

Built & maintained by Mitesh Barot – Senior Frontend Engineer

## How to run

```bash
git clone https://github.com/mitesh-barot/taskflow-dashboard.git
cd taskflow-dashboard
npm install
npm run dev
```
