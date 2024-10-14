import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ActiveActionProvider } from './context/siteContext.js'
import 'lenis/dist/lenis.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ActiveActionProvider>
      <App/>
    </ActiveActionProvider>   
  </React.StrictMode>,
)

