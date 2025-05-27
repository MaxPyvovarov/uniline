# Unilime Project

## Project Description

This is a React-based web application built with Vite. The project includes a dashboard with multiple pages (Overview, Users, Settings) and a set of reusable UI components.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
  git clone <repository-url>
  cd unilime
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open the app in your browser at http://localhost:5173

## Project Structure

```
unilime
├─ components.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  ├─ components
│  │  ├─ theme-provider.tsx
│  │  └─ ui
│  │     ├─ app-sidebar.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ metric-card.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ table.tsx
│  │     ├─ theme-toggle.tsx
│  │     └─ tooltip.tsx
│  ├─ hooks
│  │  └─ use-mobile.ts
│  ├─ index.css
│  ├─ layout
│  │  └─ layout.tsx
│  ├─ lib
│  │  └─ utils.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ OverviewPage
│  │  │  └─ OverviewPage.tsx
│  │  ├─ SettingsPage
│  │  │  └─ SettingsPage.tsx
│  │  └─ UsersPage
│  │     └─ UsersPage.tsx
│  ├─ routes
│  │  └─ Routes.tsx
│  └─ vite-env.d.ts
├─ talwind.config.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

## Implementation Details

### Routing

The project uses react-router-dom with createBrowserRouter.
The file src/routes/Routes.tsx contains the routes:

- / — main layout (App component)
- /users — users table page
- /settings — settings form page
- /overview — metrics page

Page titles are passed via handle.title and displayed in Layout.tsx.

### State Management

The project uses React local state (`useState`) to manage sorting in the users table.
For dark/light theme, a custom `ThemeProvider` based on `next-themes` and a custom `ThemeToggle` component are used.

### Components

UI components are built on top of the shadcn/ui library with Tailwind CSS.

Metric cards, tables, and the settings form are implemented with reusability in mind.

Appear animations are implemented using the Framer Motion library.
