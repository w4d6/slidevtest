import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // presentation metadata
  title: 'Vibe Coding: The Future of Programming',
  author: 'AI Research Team',
  
  // theme and styling
  theme: 'default',
  highlighter: 'shiki',
  
  // development settings
  dev: {
    port: 3030,
    host: '0.0.0.0',
  },
  
  // build settings
  build: {
    outDir: 'dist',
  },
  
  // export settings
  export: {
    format: 'pdf',
    timeout: 30000,
    withClicks: true,
    dark: false,
  },
  
  // layout settings
  layout: 'default',
  
  // drawing settings
  drawings: {
    enabled: true,
    persist: false,
    presenterOnly: false,
    syncAll: true,
  },
  
  // Monaco editor settings
  monaco: {
    enabled: true,
    theme: 'vs-dark',
  },
  
  // plugins
  plugins: [
    // Add any additional plugins here
  ],
  
  // custom CSS
  css: 'unocss',
  
  // remote assets
  remoteAssets: true,
  
  // controls
  controls: true,
  
  // context menu
  contextMenu: true,
  
  // default transition
  transition: 'slide-left',
  
  // download button
  download: true,
  
  // info panel
  info: true,
  
  // line numbers for code blocks
  lineNumbers: true,
  
  // presenter mode
  presenter: true,
  
  // shortcuts
  shortcuts: true,
  
  // color schema
  colorSchema: 'auto',
  
  // fonts
  fonts: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif',
    mono: 'ui-monospace,SFMono-Regular,"SF Mono",Consolas,"Liberation Mono",Menlo,monospace',
  },
})