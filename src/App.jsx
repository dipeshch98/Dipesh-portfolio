import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import { ThemeProvider } from './context/ThemeContext'

function App() {


  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
