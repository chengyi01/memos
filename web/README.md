# Memos Frontend

<div align="center">

Modern frontend application built with **React 18** + **TypeScript** + **Vite**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Guide](#development-guide)
- [Build & Deployment](#build--deployment)
- [Code Standards](#code-standards)
- [FAQ](#faq)

---

## Overview

This is the frontend module of the Memos application, providing a modern and responsive user interface for personal knowledge management and note-taking. It features a component-based architecture with support for multi-language internationalization, theme switching, real-time collaboration, and more.

### Key Features

- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS and shadcn/ui
- 📱 **Responsive Design** - Perfect adaptation for desktop, tablet, and mobile devices
- 🌍 **Internationalization** - Built-in support for 32+ languages
- 🎭 **Theme System** - Support for light/dark mode and custom themes
- ⚡ **High Performance** - Using MobX state management and React optimization techniques
- 🔐 **Type Safety** - Complete TypeScript type definitions
- 📝 **Markdown Support** - Rich text editing with KaTeX and Mermaid chart support
- 🗺️ **Visualization** - Support for knowledge graphs, activity heatmaps, and map annotations

---

## Tech Stack

### Core Framework

| Technology | Version | Description |
|------------|---------|-------------|
| [React](https://reactjs.org/) | 18.3.1 | Frontend framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.2 | Type system |
| [Vite](https://vitejs.dev/) | 7.1.5 | Build tool |

### State Management & Routing

| Technology | Version | Description |
|------------|---------|-------------|
| [MobX](https://mobx.js.org/) | 6.13.7 | Reactive state management |
| [React Router](https://reactrouter.com/) | 7.9.1 | Routing management |

### UI Framework & Styling

| Technology | Version | Description |
|------------|---------|-------------|
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.13 | Atomic CSS framework |
| [Radix UI](https://www.radix-ui.com/) | - | Accessible component library |
| [Lucide Icons](https://lucide.dev/) | 0.486.0 | Icon library |

### Feature Enhancements

| Technology | Description |
|------------|-------------|
| [i18next](https://www.i18next.com/) | Internationalization |
| [KaTeX](https://katex.org/) | Math formula rendering |
| [Mermaid](https://mermaid.js.org/) | Diagram rendering |
| [Leaflet](https://leafletjs.com/) | Map component |
| [highlight.js](https://highlightjs.org/) | Code highlighting |
| [gRPC-Web](https://github.com/grpc/grpc-web) | API communication |

---

## Getting Started

### Requirements

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommended package manager)

### Install Dependencies

```bash
cd web
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

The development server will start at `http://localhost:3001`.

**Note**: The frontend proxies to the backend service at `http://localhost:8081` by default. To customize the backend address, set the environment variable:

```bash
export DEV_PROXY_SERVER=http://your-backend-url:port
pnpm dev
```

### Code Linting

Run TypeScript type checking and ESLint code linting:

```bash
pnpm lint
```

---

## Project Structure

```
web/
├── public/                 # Static assets
│   ├── logo.webp          # Application logo
│   ├── full-logo.webp     # Full logo
│   └── *.png              # PWA icons
│
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Base UI components (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── ...
│   │   ├── MemoView.tsx       # Memo view component
│   │   ├── MemoEditor/        # Memo editor
│   │   ├── Settings/          # Settings module
│   │   └── ...
│   │
│   ├── pages/            # Page components (route-level)
│   │   ├── Home.tsx              # Home page
│   │   ├── MemoDetail.tsx        # Memo detail
│   │   ├── Setting.tsx           # Settings page
│   │   ├── Explore.tsx           # Explore page
│   │   └── ...
│   │
│   ├── layouts/          # Layout components
│   │   ├── RootLayout.tsx        # Root layout
│   │   └── HomeLayout.tsx        # Home layout
│   │
│   ├── store/            # MobX state management
│   │   ├── memo.ts              # Memo state
│   │   ├── user.ts              # User state
│   │   ├── workspace.ts         # Workspace state
│   │   ├── attachment.ts        # Attachment state
│   │   └── ...
│   │
│   ├── hooks/            # Custom hooks
│   │   ├── useCurrentUser.ts    # Get current user
│   │   ├── useAsyncEffect.ts    # Async side effects
│   │   ├── useNavigateTo.ts     # Route navigation
│   │   └── ...
│   │
│   ├── router/           # Route configuration
│   │   └── index.tsx            # Route definitions
│   │
│   ├── types/            # TypeScript type definitions
│   │   ├── proto/               # gRPC generated types
│   │   └── ...
│   │
│   ├── utils/            # Utility functions
│   │   ├── i18n.ts              # Internationalization utilities
│   │   ├── memo.ts              # Memo utilities
│   │   ├── user.ts              # User utilities
│   │   └── ...
│   │
│   ├── locales/          # Internationalization files
│   │   ├── en.json              # English
│   │   ├── zh-Hans.json         # Simplified Chinese
│   │   ├── zh-Hant.json         # Traditional Chinese
│   │   └── ...                  # 32+ languages
│   │
│   ├── themes/           # Theme styles
│   │   ├── default.css          # Default theme
│   │   ├── default-dark.css     # Dark theme
│   │   ├── paper.css            # Paper theme
│   │   └── whitewall.css        # Whitewall theme
│   │
│   ├── App.tsx           # Application root component
│   ├── main.tsx          # Application entry
│   ├── grpcweb.ts        # gRPC client configuration
│   ├── i18n.ts           # i18n initialization
│   └── index.css         # Global styles
│
├── index.html            # HTML template
├── vite.config.mts       # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── components.json       # shadcn/ui configuration
├── package.json          # Project dependencies
└── pnpm-lock.yaml        # Dependency lock file
```

### Directory Responsibilities

| Directory | Responsibility |
|-----------|---------------|
| `components/` | Reusable business components and base UI components |
| `pages/` | Page-level components corresponding to routes |
| `layouts/` | Layout components wrapping pages with common layouts |
| `store/` | MobX state management, global state and business logic |
| `hooks/` | Custom React hooks |
| `types/` | TypeScript type definitions and interfaces |
| `utils/` | Utility functions and helper methods |
| `router/` | Route configuration and route guards |
| `locales/` | Internationalization translation files |
| `themes/` | Theme style files |

---

## Development Guide

### Component Development

#### 1. Creating New Components

Components should follow this structure:

```tsx
// src/components/ExampleComponent.tsx
import { useState, useCallback } from "react";
import { observer } from "mobx-react-lite";

import { memoStore } from "@/store";
import { useTranslate } from "@/utils/i18n";

interface Props {
  /** Component property description */
  title: string;
  /** Optional property */
  className?: string;
}

const ExampleComponent: React.FC<Props> = observer((props: Props) => {
  const { title, className } = props;
  const t = useTranslate();
  
  const [state, setState] = useState<string>("");
  
  const handleClick = useCallback(() => {
    // Event handling logic
  }, []);
  
  return (
    <div className={className}>
      <h1>{title}</h1>
      {/* Component content */}
    </div>
  );
});

export default ExampleComponent;
```

#### 2. Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Component files | PascalCase.tsx | `MemoView.tsx`, `UserAvatar.tsx` |
| Hook files | use prefix | `useCurrentUser.ts`, `useNavigateTo.ts` |
| Utility files | lowercase | `utils.ts`, `i18n.ts` |
| Variable names | camelCase | `currentUser`, `showEditor` |
| Event handlers | handle prefix | `handleClick`, `handleSubmit` |

#### 3. State Management

**Global State**: Use MobX Store

```tsx
// Use observer to wrap component
const MemoList = observer(() => {
  const memos = memoStore.state.memos;
  
  const handleCreate = async () => {
    await memoStore.createMemo({ memo: { content } });
  };
  
  return <div>{/* ... */}</div>;
});
```

**Local State**: Use useState

```tsx
const [showEditor, setShowEditor] = useState<boolean>(false);
const [isLoading, setIsLoading] = useState(false);
```

#### 4. Error Handling

All async operations must include error handling:

```tsx
const handleSubmit = async () => {
  try {
    await memoStore.createMemo({ memo: { content } });
    toast.success(t("memo.create-success"));
  } catch (error) {
    console.error("Failed to create memo:", error);
    toast.error(t("memo.create-failed"));
  }
};
```

### Internationalization

#### Adding Translations

1. Add translation key-value pairs in `src/locales/*.json` files
2. Use the `useTranslate` hook to get the translation function

```tsx
import { useTranslate } from "@/utils/i18n";

const Component = () => {
  const t = useTranslate();
  
  return <div>{t("common.welcome")}</div>;
};
```

#### Supported Languages

Currently supports 32+ languages, including:

- 🇺🇸 English (en)
- 🇨🇳 Simplified Chinese (zh-Hans)
- 🇹🇼 Traditional Chinese (zh-Hant)
- 🇯🇵 Japanese (ja)
- 🇰🇷 Korean (ko)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- And more...

### Theme Development

Theme files are located in `src/themes/`, using CSS variables to define themes:

```css
/* themes/default.css */
:root {
  --color-primary: #3b82f6;
  --color-background: #ffffff;
  --color-text: #1f2937;
  /* ... */
}
```

---

## Build & Deployment

### Development Build

```bash
pnpm build
```

Build output is placed in the `dist/` directory.

### Production Build

```bash
pnpm release
```

Build output will be placed in `../server/router/frontend/dist/` for use by the Go backend service.

**Note**: Production builds enable code minification and optimization.

### Build Configuration

The Vite configuration file `vite.config.mts` includes the following optimizations:

- **Code Splitting**: Separate large dependencies (KaTeX, Mermaid, Leaflet) into independent chunks
- **Version Control**: Use `package.json` version number as asset fingerprint
- **Development Proxy**: Proxy API requests to backend service
- **Path Aliases**: `@/` points to `src/` directory

### Deployment Checklist

- [ ] Run `pnpm lint` to ensure code quality
- [ ] Run `pnpm build` to ensure successful build
- [ ] Check asset files in the `dist/` directory
- [ ] Confirm environment variables are configured correctly
- [ ] Test production environment functionality

---

## Code Standards

### ESLint Rules

This project uses ESLint for code linting, with the following main rules:

- ✅ Use TypeScript recommended rules
- ✅ Integrate Prettier formatting
- ✅ Prohibit direct destructuring of `t` from `useTranslation`, must use `useTranslate` hook
- ✅ Prohibit unused variables

### TypeScript Types

- Use `interface` to define Props and State
- Use `type` to define union types
- Avoid using `any`, use specific types
- Add types to all function parameters and return values

### Performance Optimization

- Use `memo()` to wrap pure presentation components
- Use `useCallback()` to cache event handler functions
- Use `useMemo()` to cache computed results
- Avoid creating new objects or functions during rendering

### Git Commit Conventions

Follow Conventional Commits specification:

```bash
feat(editor): add Markdown keyboard shortcuts support
fix(memo): fix issue where list doesn't update after deleting memo
chore(deps): update dependency versions
docs(readme): update development guide
```

---

## FAQ

### 1. Development Server Won't Start

**Issue**: `pnpm dev` errors or port conflict

**Solution**:
- Ensure Node.js version >= 18
- Check if port 3001 is occupied
- Delete `node_modules` and reinstall: `rm -rf node_modules && pnpm install`

### 2. Backend API Request Failure

**Issue**: Frontend cannot connect to backend service

**Solution**:
- Ensure backend service is running at `http://localhost:8081`
- Check proxy configuration in `vite.config.mts`
- Set environment variable to specify backend address: `export DEV_PROXY_SERVER=http://localhost:8081`

### 3. Type Checking Failure

**Issue**: `pnpm lint` reports TypeScript type errors

**Solution**:
- Run `pnpm install` to ensure complete dependencies
- Check `tsconfig.json` configuration
- Use IDE type hints to fix type errors

### 4. Build Output Too Large

**Issue**: Bundle size too large after build

**Solution**:
- Vite is already configured with code splitting, large dependencies are automatically separated
- Check if unnecessary dependencies are imported
- Use `pnpm build` and check file sizes in the `dist/` directory

### 5. Internationalization Text Not Displayed

**Issue**: Translation text shows key name when using `t()` function

**Solution**:
- Ensure translation key exists in `src/locales/*.json`
- Check `i18n.ts` initialization configuration
- Confirm you're using the `useTranslate` hook instead of `useTranslation`

---

## References

### Official Documentation

- [React Official Documentation](https://reactjs.org/)
- [TypeScript Official Documentation](https://www.typescriptlang.org/)
- [Vite Official Documentation](https://vitejs.dev/)
- [MobX Official Documentation](https://mobx.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

### Project Related

- [Memos Official Website](https://www.usememos.com)
- [Memos Documentation](https://www.usememos.com/docs)
- [API Documentation](../proto/README.md)
- [Backend Code](../server/README.md)

### Code Standards

- [Frontend Coding Standards](../blueprint/frontend/前端编码规范.md)
- [Frontend Testing Standards](../blueprint/frontend/前端测试规范.md)

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m 'feat(scope): description'`
4. Push branch: `git push origin feat/your-feature`
5. Submit a Pull Request

**Notes**:
- Code must pass `pnpm lint` checks
- Follow project coding standards
- Provide clear commit messages
- UI changes must include screenshots

---

## License

This project is open sourced under the [MIT License](../LICENSE).

---

<div align="center">

**Made with ❤️ by the Memos Team**

[Official Website](https://www.usememos.com) • [Documentation](https://www.usememos.com/docs) • [GitHub](https://github.com/usememos/memos)

</div>
