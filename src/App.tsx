
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AwHome from './pages/AwHome/AwHome'
import AwNavbar from './components/Aw-Navbar/AwNavbar'
import AwProduct from './pages/AwProducts/AwProducts'
import AwFlowers from './pages/AwProducts/sections/AwFlowers'
import AwCharacters from './pages/AwProducts/sections/AwCharacters'
import AwBouquets from './pages/AwProducts/sections/AwBouquets'
import AwContact from './pages/AwContact/AwContact'
import ResponsiveService from './service/ResposiveService'


function App() {
  
  return(
    <BrowserRouter>
    <ResponsiveService>
    <AwNavbar />
    <Routes>

      <Route index element={<AwHome/>}/>
      <Route path='products' element={<AwProduct />}>
        <Route path='flowers' element={<AwFlowers/>}/>
        <Route path='characters' element={<AwCharacters />}/>
        <Route path='bouquets' element={<AwBouquets />} />

      </Route>


        
        
      <Route path='/contacts' element={<AwContact />}/>
    </Routes>
    </ResponsiveService>
    </BrowserRouter>
  )
}

export default App
