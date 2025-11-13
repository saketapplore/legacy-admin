# Legacy Admin Panel

Admin panel for the Legacy mobile app - a property management application for real estate projects.

## Features

- 📊 **Dashboard** - Overview of properties, users, payments, and activities
- 🏢 **Properties Management** - Manage construction projects and track progress
- 👥 **Users Management** - View and manage app users
- 💰 **Payments Management** - Track payments and transactions
- 📄 **Documents Management** - Upload and manage property documents
- 🎧 **Support & Queries** - Handle user queries and support tickets

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Custom styling with CSS variables

## Color Theme

The admin panel uses a color scheme inspired by the mobile app:

- Primary Background: `#1A2B3C` (Dark Blue)
- Secondary Background: `#2A3F54`
- Card Background: `#FFFFFF`
- Teal Primary: `#3BAFB0`
- Blue Primary: `#2A669B`
- Light Blue: `#D6E9F7`

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
legacy-admin/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   ├── Sidebar/
│   │   └── Header/
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── Properties/
│   │   ├── Users/
│   │   ├── Payments/
│   │   ├── Documents/
│   │   └── Support/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Typography

- **Headings**: Poppins (Font Weight 600)
- **Body Text**: Montserrat

## License

© 2024 Legacy Admin. All rights reserved.

