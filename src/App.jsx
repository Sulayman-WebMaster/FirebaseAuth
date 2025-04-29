
import { Outlet } from 'react-router'
import './App.css'

function App() {
 

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center gap-y-5' >
        <h1 className='text-3xl font-extrabold'>sign Up</h1>
                <Outlet/>
           </div>
       
    </>
  )
}

export default App
