import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkmodeContextProvider from './DarkmodeContext/DarkmodeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkmodeContextProvider>
        <App/>
    </DarkmodeContextProvider>
)
