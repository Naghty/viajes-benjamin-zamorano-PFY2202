export default function MensajeError({ mensaje }) {
  return (
    <div className="rounded-md border border-red-300 bg-red-50 p-4 text-red-700" role="alert">
      {mensaje}
    </div>
  )
}
