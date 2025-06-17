
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import Datacontext from './Context/Datacontext.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Datacontext>
        <App></App>,
      <ToastContainer/>
    </Datacontext>
  </BrowserRouter>

)

