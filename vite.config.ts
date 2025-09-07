import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: false,
    target: 'es2015',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('react-hook-form')) {
              return 'vendor-forms';
            }
            if (id.includes('web-vitals') || id.includes('react-ga4')) {
              return 'vendor-analytics';
            }
            return 'vendor-other';
          }
          // App chunks
          if (id.includes('pages/HomePage')) return 'page-home';
          if (id.includes('pages/SobrePage')) return 'page-sobre';
          if (id.includes('pages/ServicosPage')) return 'page-servicos';
          if (id.includes('pages/ContatoPage')) return 'page-contato';
          if (id.includes('pages/BlogPage')) return 'page-blog';
          if (id.includes('components/Header')) return 'component-header';
          if (id.includes('components/Footer')) return 'component-footer';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      }
    },
    chunkSizeWarningLimit: 500
  },
  server: {
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
  // Configuração para SPA routing
  preview: {
    port: 4173,
    host: true
  },
  // Configuração adicional para fallback de SPA
  base: '/'
})
