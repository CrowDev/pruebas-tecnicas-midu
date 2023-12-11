import { createRoot } from 'react-dom/client'
const app = document.getElementById('app')
if (app) {
  const root = createRoot(app)
  root.render(
    <h1>Test</h1>
  )
}
