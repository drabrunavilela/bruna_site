// CSS crítico para above-the-fold content
export const CRITICAL_CSS = `
/* Critical CSS for above-the-fold content */
:root {
  --color-primary: #C9C1E0;
  --color-primary-dark: #B8A8D8;
  --color-text: #333333;
  --color-text-muted: #666666;
  --color-white: #FFFFFF;
  --color-gray-light: #F5F5F5;
  --color-gray-medium: #E0E0E0;
  
  --font-family-primary: "Times New Roman", Times, serif;
  --font-family-secondary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  
  --container-max-width: 1200px;
  --border-radius-small: 8px;
  --border-radius-medium: 12px;
  --spacing-small: 0.5rem;
  --spacing-medium: 1rem;
  --spacing-large: 2rem;
  --spacing-xlarge: 3rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family-secondary);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-white);
}

/* Header crítico */
header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Navigation crítica */
nav {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-medium);
}

/* Logo crítico */
.logo {
  height: 60px;
  width: auto;
}

/* Hero section crítica */
.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: var(--spacing-xlarge) var(--spacing-medium);
}

/* Container crítico */
.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-medium);
}

/* Buttons críticos */
.button-primary {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius-small);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button-primary:hover {
  background: var(--color-primary-dark);
}

/* Loading skeleton crítico */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Utility classes críticas */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Mobile-first responsive */
@media (max-width: 768px) {
  .hero {
    min-height: 50vh;
    padding: var(--spacing-large) var(--spacing-medium);
  }
  
  .container {
    padding: 0 var(--spacing-small);
  }
}
`;

export const getCriticalCSS = (): string => CRITICAL_CSS;
