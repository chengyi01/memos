# Memos 前端

<div align="center">

基于 **React 18** + **TypeScript** + **Vite** 构建的现代化前端应用

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📋 目录

- [项目概述](#项目概述)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [开发指南](#开发指南)
- [构建与部署](#构建与部署)
- [代码规范](#代码规范)
- [常见问题](#常见问题)

---

## 项目概述

这是 Memos 应用的前端模块，提供现代化、响应式的用户界面，用于个人知识管理和笔记记录。采用组件化架构设计，支持多语言国际化、主题切换、实时协作等功能。

### 核心特性

- 🎨 **现代化 UI** - 基于 Tailwind CSS 和 shadcn/ui 构建的精美界面
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- 🌍 **国际化支持** - 内置 32+ 种语言翻译
- 🎭 **主题系统** - 支持亮色/暗色模式及自定义主题
- ⚡ **高性能渲染** - 使用 MobX 状态管理和 React 优化技术
- 🔐 **类型安全** - 完整的 TypeScript 类型定义
- 📝 **Markdown 支持** - 富文本编辑，支持 KaTeX、Mermaid 图表
- 🗺️ **可视化** - 支持知识图谱、活动热力图、地图标注

---

## 技术栈

### 核心框架

| 技术 | 版本 | 说明 |
|------|------|------|
| [React](https://reactjs.org/) | 18.3.1 | 前端框架 |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.2 | 类型系统 |
| [Vite](https://vitejs.dev/) | 7.1.5 | 构建工具 |

### 状态管理与路由

| 技术 | 版本 | 说明 |
|------|------|------|
| [MobX](https://mobx.js.org/) | 6.13.7 | 响应式状态管理 |
| [React Router](https://reactrouter.com/) | 7.9.1 | 路由管理 |

### UI 框架与样式

| 技术 | 版本 | 说明 |
|------|------|------|
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.13 | 原子化 CSS 框架 |
| [Radix UI](https://www.radix-ui.com/) | - | 无障碍组件库 |
| [Lucide Icons](https://lucide.dev/) | 0.486.0 | 图标库 |

### 功能增强

| 技术 | 说明 |
|------|------|
| [i18next](https://www.i18next.com/) | 国际化 |
| [KaTeX](https://katex.org/) | 数学公式渲染 |
| [Mermaid](https://mermaid.js.org/) | 图表渲染 |
| [Leaflet](https://leafletjs.com/) | 地图组件 |
| [highlight.js](https://highlightjs.org/) | 代码高亮 |
| [gRPC-Web](https://github.com/grpc/grpc-web) | API 通信 |

---

## 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0（推荐使用 pnpm 作为包管理器）

### 安装依赖

```bash
cd web
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 `http://localhost:3001` 启动。

**注意**: 前端默认代理到 `http://localhost:8081` 的后端服务。如需自定义后端地址，请设置环境变量：

```bash
export DEV_PROXY_SERVER=http://your-backend-url:port
pnpm dev
```

### 代码检查

运行 TypeScript 类型检查和 ESLint 代码检查：

```bash
pnpm lint
```

---

## 项目结构

```
web/
├── public/                 # 静态资源
│   ├── logo.webp          # 应用 Logo
│   ├── full-logo.webp     # 完整 Logo
│   └── *.png              # PWA 图标
│
├── src/
│   ├── components/        # 可复用组件
│   │   ├── ui/           # 基础 UI 组件 (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── ...
│   │   ├── MemoView.tsx       # Memo 视图组件
│   │   ├── MemoEditor/        # Memo 编辑器
│   │   ├── Settings/          # 设置模块
│   │   └── ...
│   │
│   ├── pages/            # 页面组件（路由级）
│   │   ├── Home.tsx              # 首页
│   │   ├── MemoDetail.tsx        # Memo 详情
│   │   ├── Setting.tsx           # 设置页
│   │   ├── Explore.tsx           # 发现页
│   │   └── ...
│   │
│   ├── layouts/          # 布局组件
│   │   ├── RootLayout.tsx        # 根布局
│   │   └── HomeLayout.tsx        # 主页布局
│   │
│   ├── store/            # MobX 状态管理
│   │   ├── memo.ts              # Memo 状态
│   │   ├── user.ts              # 用户状态
│   │   ├── workspace.ts         # 工作区状态
│   │   ├── attachment.ts        # 附件状态
│   │   └── ...
│   │
│   ├── hooks/            # 自定义 Hooks
│   │   ├── useCurrentUser.ts    # 获取当前用户
│   │   ├── useAsyncEffect.ts    # 异步副作用
│   │   ├── useNavigateTo.ts     # 路由导航
│   │   └── ...
│   │
│   ├── router/           # 路由配置
│   │   └── index.tsx            # 路由定义
│   │
│   ├── types/            # TypeScript 类型定义
│   │   ├── proto/               # gRPC 生成的类型
│   │   └── ...
│   │
│   ├── utils/            # 工具函数
│   │   ├── i18n.ts              # 国际化工具
│   │   ├── memo.ts              # Memo 工具函数
│   │   ├── user.ts              # 用户工具函数
│   │   └── ...
│   │
│   ├── locales/          # 国际化翻译文件
│   │   ├── en.json              # 英语
│   │   ├── zh-Hans.json         # 简体中文
│   │   ├── zh-Hant.json         # 繁体中文
│   │   └── ...                  # 32+ 种语言
│   │
│   ├── themes/           # 主题样式
│   │   ├── default.css          # 默认主题
│   │   ├── default-dark.css     # 暗色主题
│   │   ├── paper.css            # 纸张主题
│   │   └── whitewall.css        # 白墙主题
│   │
│   ├── App.tsx           # 应用根组件
│   ├── main.tsx          # 应用入口
│   ├── grpcweb.ts        # gRPC 客户端配置
│   ├── i18n.ts           # i18n 初始化
│   └── index.css         # 全局样式
│
├── index.html            # HTML 模板
├── vite.config.mts       # Vite 配置
├── tsconfig.json         # TypeScript 配置
├── eslint.config.mjs     # ESLint 配置
├── components.json       # shadcn/ui 配置
├── package.json          # 项目依赖
└── pnpm-lock.yaml        # 依赖锁定文件
```

### 目录职责说明

| 目录 | 职责 |
|------|------|
| `components/` | 可复用的业务组件和基础 UI 组件 |
| `pages/` | 页面级组件，对应路由页面 |
| `layouts/` | 布局组件，包装页面提供通用布局 |
| `store/` | MobX 状态管理，全局状态和业务逻辑 |
| `hooks/` | 自定义 React Hooks |
| `types/` | TypeScript 类型定义和接口 |
| `utils/` | 工具函数和辅助方法 |
| `router/` | 路由配置和路由守卫 |
| `locales/` | 国际化翻译文件 |
| `themes/` | 主题样式文件 |

---

## 开发指南

### 组件开发

#### 1. 创建新组件

组件应遵循以下结构：

```tsx
// src/components/ExampleComponent.tsx
import { useState, useCallback } from "react";
import { observer } from "mobx-react-lite";

import { memoStore } from "@/store";
import { useTranslate } from "@/utils/i18n";

interface Props {
  /** 组件属性说明 */
  title: string;
  /** 可选属性 */
  className?: string;
}

const ExampleComponent: React.FC<Props> = observer((props: Props) => {
  const { title, className } = props;
  const t = useTranslate();
  
  const [state, setState] = useState<string>("");
  
  const handleClick = useCallback(() => {
    // 事件处理逻辑
  }, []);
  
  return (
    <div className={className}>
      <h1>{title}</h1>
      {/* 组件内容 */}
    </div>
  );
});

export default ExampleComponent;
```

#### 2. 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件文件 | PascalCase.tsx | `MemoView.tsx`, `UserAvatar.tsx` |
| Hooks 文件 | use 开头 | `useCurrentUser.ts`, `useNavigateTo.ts` |
| 工具文件 | 小写 | `utils.ts`, `i18n.ts` |
| 变量名 | 驼峰式 | `currentUser`, `showEditor` |
| 事件处理 | handle 开头 | `handleClick`, `handleSubmit` |

#### 3. 状态管理

**全局状态**：使用 MobX Store

```tsx
// 使用 observer 包装组件
const MemoList = observer(() => {
  const memos = memoStore.state.memos;
  
  const handleCreate = async () => {
    await memoStore.createMemo({ memo: { content } });
  };
  
  return <div>{/* ... */}</div>;
});
```

**本地状态**：使用 useState

```tsx
const [showEditor, setShowEditor] = useState<boolean>(false);
const [isLoading, setIsLoading] = useState(false);
```

#### 4. 错误处理

所有异步操作必须包含错误处理：

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

### 国际化

#### 添加翻译

1. 在 `src/locales/*.json` 文件中添加翻译键值对
2. 使用 `useTranslate` Hook 获取翻译函数

```tsx
import { useTranslate } from "@/utils/i18n";

const Component = () => {
  const t = useTranslate();
  
  return <div>{t("common.welcome")}</div>;
};
```

#### 支持的语言

当前支持 32+ 种语言，包括：

- 🇺🇸 英语 (en)
- 🇨🇳 简体中文 (zh-Hans)
- 🇹🇼 繁体中文 (zh-Hant)
- 🇯🇵 日语 (ja)
- 🇰🇷 韩语 (ko)
- 🇪🇸 西班牙语 (es)
- 🇫🇷 法语 (fr)
- 🇩🇪 德语 (de)
- 更多...

### 主题开发

主题文件位于 `src/themes/`，使用 CSS 变量定义主题：

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

## 构建与部署

### 开发构建

```bash
pnpm build
```

构建产物输出到 `dist/` 目录。

### 生产构建

```bash
pnpm release
```

构建产物将输出到 `../server/router/frontend/dist/`，供 Go 后端服务使用。

**注意**：生产构建会启用代码压缩和优化。

### 构建配置

Vite 配置文件 `vite.config.mts` 包含以下优化：

- **代码分割**: 将大型依赖（KaTeX、Mermaid、Leaflet）分离成独立 chunk
- **版本控制**: 使用 `package.json` 版本号作为资源指纹
- **开发代理**: API 请求代理到后端服务
- **路径别名**: `@/` 指向 `src/` 目录

### 部署检查清单

- [ ] 运行 `pnpm lint` 确保代码质量
- [ ] 运行 `pnpm build` 确保构建成功
- [ ] 检查 `dist/` 目录中的资源文件
- [ ] 确认环境变量配置正确
- [ ] 测试生产环境功能

---

## 代码规范

### ESLint 规则

本项目使用 ESLint 进行代码检查，主要规则：

- ✅ 使用 TypeScript 推荐规则
- ✅ 集成 Prettier 格式化
- ✅ 禁止直接解构 `useTranslation` 中的 `t`，必须使用 `useTranslate` Hook
- ✅ 禁止未使用的变量

### TypeScript 类型

- 使用 `interface` 定义 Props 和 State
- 使用 `type` 定义联合类型
- 避免使用 `any`，使用具体类型
- 为所有函数参数和返回值添加类型

### 性能优化

- 使用 `memo()` 包装纯展示组件
- 使用 `useCallback()` 缓存事件处理函数
- 使用 `useMemo()` 缓存计算结果
- 避免在渲染中创建新对象或函数

### Git Commit 规范

遵循 Conventional Commits 规范：

```bash
feat(editor): 添加 Markdown 快捷键支持
fix(memo): 修复删除 memo 后列表未更新的问题
chore(deps): 更新依赖版本
docs(readme): 更新开发指南
```

---

## 常见问题

### 1. 开发服务器无法启动

**问题**: `pnpm dev` 报错或端口冲突

**解决方案**:
- 确保 Node.js 版本 >= 18
- 检查 3001 端口是否被占用
- 删除 `node_modules` 重新安装: `rm -rf node_modules && pnpm install`

### 2. 后端 API 请求失败

**问题**: 前端无法连接到后端服务

**解决方案**:
- 确保后端服务已启动在 `http://localhost:8081`
- 检查 `vite.config.mts` 中的代理配置
- 设置环境变量指定后端地址: `export DEV_PROXY_SERVER=http://localhost:8081`

### 3. 类型检查失败

**问题**: `pnpm lint` 报 TypeScript 类型错误

**解决方案**:
- 运行 `pnpm install` 确保依赖完整
- 检查 `tsconfig.json` 配置
- 使用 IDE 的类型提示修复类型错误

### 4. 构建产物过大

**问题**: 构建后的 bundle 体积过大

**解决方案**:
- Vite 已配置代码分割，大型依赖会自动分离
- 检查是否引入了不必要的依赖
- 使用 `pnpm build` 后检查 `dist/` 目录中的文件大小

### 5. 国际化文本未显示

**问题**: 使用 `t()` 函数翻译文本时显示键名

**解决方案**:
- 确保翻译键在 `src/locales/*.json` 中存在
- 检查 `i18n.ts` 初始化配置
- 确认使用的是 `useTranslate` Hook 而不是 `useTranslation`

---

## 参考资料

### 官方文档

- [React 官方文档](https://reactjs.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [MobX 官方文档](https://mobx.js.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

### 项目相关

- [Memos 官网](https://www.usememos.com)
- [Memos 文档](https://www.usememos.com/docs)
- [API 文档](../proto/README.md)
- [后端代码](../server/README.md)

### 代码规范

- [前端编码规范](../blueprint/frontend/前端编码规范.md)
- [前端测试规范](../blueprint/frontend/前端测试规范.md)

---

## 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 项目仓库
2. 创建特性分支: `git checkout -b feat/your-feature`
3. 提交更改: `git commit -m 'feat(scope): description'`
4. 推送分支: `git push origin feat/your-feature`
5. 提交 Pull Request

**注意事项**:
- 代码必须通过 `pnpm lint` 检查
- 遵循项目编码规范
- 提供清晰的 commit 信息
- UI 更改需附带截图

---

## 许可证

本项目采用 [MIT License](../LICENSE) 开源协议。

---

<div align="center">

**Made with ❤️ by the Memos Team**

[官网](https://www.usememos.com) • [文档](https://www.usememos.com/docs) • [GitHub](https://github.com/usememos/memos)

</div>
