# PomoZen - A Pomodoro Timer App

PomoZen is a Pomodoro timer application built using Lynx, a modern framework for building cross-platform applications. Leveraging `@lynx-js/react` and bootstrapped with `create-rspeedy`, PomoZen offers a seamless and efficient user experience.

## Project Structure

```
|-- public/
|-- src/
|   |-- App.jsx         # Main application component
|   |-- App.css         # Application styles
|   |-- index.js        # Entry point
|-- package.json
|-- vite.config.js
```

## Installation Guide

### Prerequisites

- Node.js (v18.0.0 or later)
- npm (v6.0.0 or later)
- LynxExplorer App installed on your mobile device

### Step 1: Clone the Repository

```bash
git clone https://github.com/intropercib/pomozen
cd pomozen
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

### Step 4: Preview on Device

1. Open the LynxExplorer App on your device
2. Scan the QR code displayed in your terminal
3. The PomoZen app will load on your device

## Required Dependencies

The following packages will be installed automatically:

- [`@lynx-js/react`](https://www.npmjs.com/package/@lynx-js/react): Core Lynx React components
- [`@lynx-js/rspeedy`](https://www.npmjs.com/package/@lynx-js/rspeedy): Build toolchain for Lynx projects
- [`@lynx-js/lynx-explorer`](https://www.npmjs.com/package/@lynx-js/lynx-explorer): LynxExplorer app for previewing Lynx projects on mobile devices

## Building for Production

```bash
npm run build
```

## Troubleshooting

- Ensure your device and computer are on the same network
- Check that LynxExplorer is the latest version
- If QR code doesn't scan, try restarting the development server

---

<div align="center">
Happy Coding! 🚀
</div>
