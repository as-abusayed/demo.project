import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Navbar} from "./components/navbar"
import App from "./App"
import { Footer } from './components/Footer'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Navbar></Navbar>
        <App></App>
        <Footer></Footer>
    </StrictMode>
)