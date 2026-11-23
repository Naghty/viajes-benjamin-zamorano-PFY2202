export default function Cargando({ texto = 'Cargando...' }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-slate-600" role="status">
      <span className="h-5 w-5 rounded-full border-2 border-sky-600 border-t-transparent animate-spin"></span>
      <span>{texto}</span>
    </div>
  )
}
