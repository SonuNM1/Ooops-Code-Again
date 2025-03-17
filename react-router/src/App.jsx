import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParaComp from './components/ParaComp'
import Courses from './components/Courses'
import MockTests from './components/Mock-tests'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/about',
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: '/dashboard',
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children: [
        {
          path: 'courses',
          element: <Courses/>
        },
        {
          path: 'mock-tests',
          element: <MockTests/>
        },
        {
          path: 'reports',
          element: <Reports/>
        } 
      ]
    },
    {
      path: '/student/:id',
      element: 
      <div>
        <Navbar/>
        <ParaComp/>
      </div>
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
