## 🚀 Thor Dev - Svelte Tutorial Application

A comprehensive, interactive Svelte 5 tutorial application showcasing modern web development practices with beautiful UI and hands-on examples.

See the live demo: [https://thor-3770-app.vercel.app/](https://thor-3770-app.vercel.app/)

![Tutorial Home](static/PikaThorAnime.png)

## 📚 Overview

This project is a fully-featured tutorial platform built with **SvelteKit 5**, **TailwindCSS 4**, and the **Skeleton UI library**. It demonstrates core Svelte concepts through interactive examples and visually stunning interfaces.

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Reactivity** | Master Svelte's reactive magic with `$state`, `$derived`, and `$effect` |
| 🔗 **Props** | Learn component communication patterns |
| 🧠 **Logic** | Conditional rendering, loops, and async patterns |
| 🎯 **Events** | Handle user interactions and DOM events |
| 🔄 **Bindings** | Two-way data binding mastery |

## 🛠️ Tech Stack

- **Framework**: [SvelteKit 5](https://kit.svelte.dev/) with Svelte 5 runes
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/) + [Skeleton UI](https://www.skeleton.dev/)
- **Language**: TypeScript
- **Syntax Highlighting**: [Shiki](https://shiki.style/)
- **Deployment**: [Vercel](https://vercel.com/) via `adapter-vercel`
- **Build Tool**: Vite

## 📁 Project Structure

```
thor-3770-app/
├── src/
│   ├── routes/                    # SvelteKit routes
│   │   ├── +layout.svelte        # Root layout
│   │   ├── +page.svelte          # Landing page
│   │   └── tutorial/             # Tutorial section
│   │       ├── +layout.svelte    # Tutorial navigation
│   │       ├── +page.svelte      # Tutorial home
│   │       ├── reactivity/       # Reactivity tutorial
│   │       ├── props/            # Props tutorial
│   │       ├── logic/            # Logic blocks tutorial
│   │       ├── events/           # Events tutorial
│   │       └── bindings/         # Bindings tutorial
│   ├── lib/
│   │   ├── components/           # Reusable components
│   │   │   ├── Counter.svelte
│   │   │   ├── Child.svelte
│   │   │   ├── CodeBlock/        # Syntax highlighting
│   │   │   └── ...
│   │   ├── global/               # Global state
│   │   │   └── globalCount.svelte.ts
│   │   └── utils/                # Utility functions
│   ├── app.css                   # Global styles
│   └── app.html                  # HTML template
├── static/                        # Static assets
├── package.json
├── svelte.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🎓 Tutorial Sections

### ⚡ Reactivity
Learn Svelte's reactive state management:
- **`$state`**: Reactive variables that trigger UI updates
- **`$derived`**: Automatically computed values
- **`$effect`**: Side effects and cleanup
- **`Counter`**: Demonstrates independent reactive state

**Key Components:**
- `Counter.svelte` - Independent counter with shared global state
- `globalCount.svelte.ts` - Shared reactive state

### 🔗 Props
Master component communication:
- Passing data from parent to child
- Default prop values with destructuring
- Type-safe props with TypeScript
- **`Child`**: Example component receiving props

**Key Components:**
- `Child.svelte` - Accepts `name` prop with default value
- `CodeBlock` - Syntax-highlighted code examples

### 🧠 [`Logic`](src/routes/tutorial/logic/+page.svelte)
Control flow and rendering patterns:
- **`#if/#else`**: Conditional rendering
- **`#each`**: Loop through arrays
- **`#await`**: Handle async operations with loading states
- Live examples with avatars using [`@faker-js/faker`](https://fakerjs.dev/)

**Key Features:**
- `getRandomNumber()` - Async promise example
- Dynamic avatar generation with faker

### 🎯 Events
Handle user interactions:
- DOM event handlers (`onclick`, `onpointermove`, etc.)
- Event bubbling and propagation
- Passing event handlers as props
- **`Stepper`**: Increment/decrement callbacks
- **`BigGreenButton`**: Custom click handlers

**Key Components:**
- `Stepper.svelte` - Accepts `increment` and `decrement` functions
- `BigGreenButton.svelte` - Forwards all props

### 🔄 Bindings
Two-way data binding:
- **`bind:value`**: Text inputs, numbers, textareas
- **`bind:group`**: Radio buttons and checkboxes
- **`bind:checked`**: Single checkbox state
- Markdown rendering with [`marked`](https://marked.js.org/)
- Form validation examples

**Key Components:**
- `InsecureQuestion.svelte` - Complex form with multiple binding types

## 🚀 Getting Started

### Prerequisites
- Node.js (version specified in package.json)
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd thor-3770-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
npm run dev -- --open
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type-check Svelte files |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🎨 Theming

The app uses Skeleton UI themes with the "mint" theme as default. Change the theme in app.html:

```html
<html lang="en" data-theme="mint">
```

Available themes: `cerberus`, `mint`, `modern`

## 🔧 Configuration Files

- **svelte.config.js** - SvelteKit configuration with Vercel adapter
- **vite.config.ts** - Vite build configuration
- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint rules
- **.prettierrc** - Code formatting rules

## 📦 Key Dependencies

### Production
- `@faker-js/faker` - Generate fake data for examples
- `marked` - Markdown to HTML converter

### Development
- `@skeletonlabs/skeleton` - UI component library
- `@sveltejs/kit` - SvelteKit framework
- `@sveltejs/adapter-vercel` - Vercel deployment adapter
- `@tailwindcss/vite` - TailwindCSS integration
- `shiki` - Syntax highlighting
- `typescript` - Type safety

## 🌐 Deployment

This project is configured for [Vercel](https://vercel.com/) deployment using `@sveltejs/adapter-vercel`.

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The build output is optimized and ready for deployment to Vercel or any Node.js hosting platform.

## 📝 Code Highlights

### Reactive State with `$state`
```typescript
// src/lib/global/globalCount.svelte.ts
export const counter = $state({ count: 0 })
```

### Derived State with `$derived`
```svelte
<!-- src/routes/tutorial/reactivity/+page.svelte -->
let numbers = $state([1, 2, 3, 4]);
let total = $derived(numbers.reduce((acc, n) => acc + n, 0));
```

### Props with Defaults
```svelte
<!-- src/lib/components/Child.svelte -->
<script lang="ts">
    let { name = 'Thor' } = $props()
</script>

<p>Hello {name}!</p>
```

### Two-way Binding
```svelte
<!-- src/routes/tutorial/bindings/+page.svelte -->
<input type="text" bind:value={name} />
```

## 🎯 Learning Objectives

By exploring this codebase, you'll learn:

✅ Modern Svelte 5 runes (`$state`, `$derived`, `$effect`, `$props`)  
✅ SvelteKit routing and layouts  
✅ Component composition patterns  
✅ Event handling and binding  
✅ TypeScript integration  
✅ TailwindCSS + Skeleton UI styling  
✅ Build optimization with Vite  
✅ Production deployment strategies  

## 📄 License

This is a tutorial project for educational purposes.

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome!

---

**Built with ⚡ by Thor** | Powered by Svelte 5 & TailwindCSS 4