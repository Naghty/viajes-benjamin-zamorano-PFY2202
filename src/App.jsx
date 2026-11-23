import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Destinos from './pages/Destinos.jsx'
import DetalleDestino from './pages/DetalleDestino.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 sm:p-6">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/destinos/:id" element={<DetalleDestino />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
