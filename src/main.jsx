import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './components/Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Contact } from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Information from './components/Information.jsx'
import Formation from './components/Formation.jsx'
import ParamUrl from './components/ParamUrl.jsx'
import { Error } from './components/Error.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="info" element={<Information />} />
                  <Route path="formation" element={<Formation />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/url/:message" element={<ParamUrl />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
)
