# Dark Theme Details - Portfolio Project

## Overview

This document contains all the dark theme configuration, styles, and implementation details extracted from the Portfolio project.

## Theme Configuration

### Tailwind Configuration

- **Dark Mode Type**: `class` (class-based dark mode)
- **Configuration Location**: `client/tailwind.config.js`

### Core Color Palette

#### CSS Variables (`:root` vs `.dark-mode`)

```css
/* Light Theme (Default) */
:root {
  --primary-color: #6366f1; /* Indigo-500 */
  --secondary-color: #8b5cf6; /* Violet-500 */
  --accent-color: #ec4899; /* Pink-500 */
  --dark-color: #374151; /* Gray-700 */
  --light-color: #f9fafb; /* Gray-50 */
  --bg-color: #f9fafb; /* Gray-50 */
  --surface-color: #ffffff; /* White */
  --surface-dark-color: #f3f4f6; /* Gray-100 */
}

/* Dark Theme */
.dark-mode {
  --primary-color: #818cf8; /* Indigo-400 */
  --secondary-color: #a78bfa; /* Violet-400 */
  --accent-color: #f472b6; /* Pink-400 */
  --dark-color: #f3f4f6; /* Gray-100 */
  --light-color: #111827; /* Gray-900 */
  --bg-color: #111827; /* Gray-900 */
  --surface-color: #1f2937; /* Gray-800 */
  --surface-dark-color: #374151; /* Gray-700 */
}
```

#### Tailwind Extended Colors

```javascript
colors: {
  primary: "#6366F1",    // Indigo-500
  secondary: "#8B5CF6",  // Violet-500
  accent: "#EC4899",     // Pink-500
  dark: "#111827",       // Gray-900
  light: "#F9FAFB",      // Gray-50
  darkBlue: "#1E3A8A",   // Blue-900
  gradStart: "#6366F1",  // For gradients
  gradEnd: "#EC4899",    // For gradients
}
```

## Component-Specific Dark Theme Styles

### Glass Morphism Effect

```css
/* Light Mode */
.glass-effect {
  background: rgba(228, 230, 235, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(228, 230, 235, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
}

/* Dark Mode */
.dark-mode .glass-effect {
  background: rgba(31, 41, 55, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(55, 65, 81, 0.4);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

### Text Gradients

```css
/* Light Mode */
.text-gradient {
  background-image: linear-gradient(to right, #5b68c0, #7165aa, #d8597b);
}

/* Dark Mode */
.dark-mode .text-gradient {
  background-image: linear-gradient(to right, #818cf8, #a78bfa, #f472b6);
}
```

### Button Gradients

```css
/* Light Mode */
.btn-gradient {
  background-image: linear-gradient(to right, #5b68c0, #d8597b);
}
.btn-gradient:hover {
  background-image: linear-gradient(to right, #4d56a0, #b44b68);
  box-shadow: 0 10px 15px -3px rgba(91, 104, 192, 0.3);
}

/* Dark Mode */
.dark-mode .btn-gradient {
  background-image: linear-gradient(to right, #4f46e5, #9333ea);
}
.dark-mode .btn-gradient:hover {
  background-image: linear-gradient(to right, #4338ca, #7e22ce);
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.4);
}
```

### Card Gradients

```css
/* Light Mode */
.card-gradient {
  border-image: linear-gradient(to right, #6366f1, #ec4899) 1;
}

/* Dark Mode */
.dark-mode .card-gradient {
  border-image: linear-gradient(to right, #818cf8, #f472b6) 1;
}
```

## Background Patterns & Effects

### Hero Background

```css
/* Light Mode */
.hero-background {
  background-image: radial-gradient(
      circle at 50% 50%,
      rgba(99, 102, 241, 0.2) 0%,
      rgba(255, 255, 255, 0) 70%
    ), url("/src/assets/grid-pattern.svg");
}

/* Dark Mode */
.dark-mode .hero-background {
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(79, 70, 229, 0.1) 0%,
    transparent 80%
  );
}
```

### Section Backgrounds

```css
/* Dark Theme Sections */
.dark-theme-section {
  background: linear-gradient(to bottom, #111827, #0f172a);
}

.dark-theme-section-alt {
  background: linear-gradient(to bottom, #0f172a, #111827);
}

/* Animated Background */
.dark-mode .animated-bg {
  background: linear-gradient(270deg, #111827, #1f2937, #312e81);
  background-size: 600% 600%;
  animation: darkGradientMove 15s ease infinite;
}
```

### Glowing Elements

```css
/* Light Mode */
.glow-dot {
  background: radial-gradient(
    circle at center,
    rgba(99, 102, 241, 0.8),
    rgba(99, 102, 241, 0)
  );
}

/* Dark Mode */
.dark-mode .glow-dot {
  background: radial-gradient(
    circle,
    rgba(79, 70, 229, 0.8) 0%,
    rgba(147, 51, 234, 0.4) 70%,
    transparent 100%
  );
  filter: blur(50px);
}
```

## Coding Platform Components

### Enhanced Cards

```css
.dark .enhanced-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(71, 85, 105, 0.3);
}

.light .enhanced-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.7);
}
```

### Skill Badges

```css
.dark .skill-badge {
  background-color: rgba(99, 102, 241, 0.2);
  color: rgba(165, 180, 252, 1);
}

.light .skill-badge {
  background-color: rgba(224, 231, 255, 0.6);
  color: rgba(79, 70, 229, 1);
}
```

### Difficulty Indicators

```css
/* Easy Problems */
.dark .difficulty-easy {
  background-color: rgba(34, 197, 94, 0.2);
  color: rgb(74, 222, 128);
}

/* Medium Problems */
.dark .difficulty-medium {
  background-color: rgba(234, 179, 8, 0.2);
  color: rgb(250, 204, 21);
}

/* Hard Problems */
.dark .difficulty-hard {
  background-color: rgba(239, 68, 68, 0.2);
  color: rgb(248, 113, 113);
}
```

### Problem Cards

```css
.dark .problem-card {
  background-color: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(55, 65, 81, 0.5);
}

.light .problem-card {
  background-color: rgba(249, 250, 251, 1);
  border: 1px solid rgba(229, 231, 235, 1);
}
```

## Scrollbar Customization

### Default Scrollbar

```css
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f9fafb;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #6366f1, #8b5cf6);
  border-radius: 6px;
  border: 2px solid #f9fafb;
}
```

### Dark Mode Scrollbar

```css
.dark-mode::-webkit-scrollbar {
  width: 10px;
}
.dark-mode::-webkit-scrollbar-track {
  background: #1f2937;
}
.dark-mode::-webkit-scrollbar-thumb {
  background: #4f46e5;
  border-radius: 5px;
}
.dark-mode::-webkit-scrollbar-thumb:hover {
  background: #4338ca;
}
```

## Shadow Effects

### Custom Shadows

```css
/* Light Mode */
.shadow-custom {
  box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.1), 0 10px 20px -5px rgba(99, 102, 241, 0.05);
}

/* Dark Mode */
.dark-mode .shadow-custom {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
```

## Theme Switcher Implementation

### Context Provider

```typescript
type Theme = "light" | "dark";

const ThemeProvider: React.FC = ({ children }) => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme || (prefersDarkMode ? "dark" : "light");
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
};
```

### Theme Toggle Animation

```css
.theme-toggle-shadow {
  filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.4));
}

.dark .theme-toggle-shadow {
  filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

## Component-Specific Dark Mode Classes

### Section Backgrounds

```typescript
// Example usage in components
className={`section relative py-28 md:py-32 overflow-hidden ${
  theme === "dark" ? "bg-gray-900" : "bg-gray-50"
}`}
```

### Decoration Blobs

```typescript
className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] ${
  theme === "dark" ? "bg-indigo-800/20" : "bg-indigo-500/10"
} animate-slow-pulse`}
```

### Work Experience Colors

```typescript
const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg:
        theme === "dark"
          ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/30"
          : "bg-gradient-to-br from-blue-50 to-indigo-50",
      border: theme === "dark" ? "border-blue-500/40" : "border-blue-200",
    },
    // ... more color mappings
  };
  return colorMap[color] || colorMap.blue;
};
```

## File Structure

```
src/
├── styles/
│   ├── custom.css              # Main dark theme styles
│   ├── codeAnimations.css      # Coding platform dark themes
│   ├── backgroundStyles.css    # Background patterns
│   ├── iconAnimations.css      # Icon hover effects
│   └── index.css              # CSS variables & base styles
├── contexts/
│   └── ThemeContext.tsx       # Theme state management
└── components/
    └── ThemeSwitcher.tsx      # Theme toggle component
```

## Key Implementation Notes

1. **Dual Class System**: Uses both `.dark-mode` and `.dark` classes for maximum compatibility
2. **CSS Variables**: Leverages CSS custom properties for consistent theming
3. **Local Storage**: Persists user preference across sessions
4. **OS Preference**: Respects system dark mode preference as default
5. **Smooth Transitions**: All theme changes include transition animations
6. **Glassmorphism**: Extensive use of backdrop-blur and transparency effects
7. **Gradient System**: Consistent gradient patterns across light and dark modes
8. **Accessibility**: Maintains proper contrast ratios in both themes

## Color Accessibility

### Dark Mode Contrast Ratios

- Primary text on dark background: `#f3f4f6` on `#111827` (≈16:1)
- Secondary text: `#d1d5db` on `#111827` (≈13.5:1)
- Interactive elements: `#818cf8` on `#111827` (≈9.5:1)
- Accent colors maintain WCAG AA compliance

This comprehensive dark theme system provides a consistent, professional, and accessible dark mode experience across the entire portfolio application.
