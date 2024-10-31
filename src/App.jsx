import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Characters from './pages/characters'
import HomePage from './pages/home'
import SingleCharacter from './pages/singleCharacter'

function App() {



  return (
    <>
      <header className='mb-10 py-5 bg-slate-900 text-white w-full flex justify-center'>
        <div className="container">
          <nav className='flex justify-between'>
            <Link to='/'><h1>Rick and Morty API</h1></Link>
            <ul className='flex space-x-3'>
              <li>
                <NavLink to='/'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to='/character/1'>Personajes</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>



      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/character/:page' element={<Characters />} />
        <Route path='/character/details/:page/:id' element={<SingleCharacter />} />
        <Route path='*' element={<h1> NOT FOUND!!! </h1>} />
      </Routes>
    </>
  )
}

export default App