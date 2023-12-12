import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'

const app = document.getElementById('app')
if (app) {
  const root = createRoot(app)
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
