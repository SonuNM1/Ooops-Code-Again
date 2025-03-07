
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router' 
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Home from './pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route 
          path='/' 
          element={<Home/>}
        />
        <Route 
          path='/products' 
          element={<div>Product Page</div>}
        />
        <Route 
          path='/cart' 
          element={<div>Cart Page</div>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
)
