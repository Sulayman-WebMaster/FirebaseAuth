
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <App/> ,
    children:[
        {
        index:true,
        element: <Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
