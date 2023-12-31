import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import './index.css'

export function render(url: string, context: Record<string, any>) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}