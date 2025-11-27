# TaskFlow Dashboard

Modern user dashboard built with React 18 + TypeScript + Redux Toolkit (RTK Query) + React Router + Tailwind CSS

## Tech Stack

• React 18 + TypeScript (strict)
• Redux Toolkit + RTK Query (data fetching & caching)
• React Router v6 (client-side routing)
• Tailwind CSS + Responsive Design
• JSONPlaceholder API
• Pagination + Dedicated User Detail Pages
• Toggle Todos with optimistic updates

## Features

- List of users with avatar & details
- Click any user → see their latest 5 posts + todo list
- Toggle todo completion (PATCH request + instant UI update via RTK Query cache)
- Fully responsive & accessible
- Loading & error states
- Clean folder structure

## How to run

```bash
git clone https://github.com/mitesh-barot/taskflow-dashboard.git
cd taskflow-dashboard
npm install
npm run dev
```
