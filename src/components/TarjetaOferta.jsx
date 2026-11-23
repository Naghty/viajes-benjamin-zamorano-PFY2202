export default function TarjetaOferta({ titulo, subtitulo, detalles, precio, disponibilidad, seleccionada, onSeleccionar }) {
  const agotado = disponibilidad <= 0

  return (
    <article
      className={`rounded-lg border-2 bg-white p-4 shadow-sm transition ${
        seleccionada ? 'border-sky-600' : 'border-transparent'
      }`}
    >
      <h3 className="font-bold">{titulo}</h3>
      <p className="text-sm text-slate-500 mb-2">{subtitulo}</p>
      <ul className="text-sm space-y-1 mb-3">
        {detalles.map((d) => (
          <li key={d.etiqueta} className="flex justify-between gap-2">
            <span className="text-slate-500">{d.etiqueta}</span>
            <span>{d.valor}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-lg font-bold">{precio}</p>
          <p className={`text-xs ${agotado ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
            {agotado ? 'Sin disponibilidad' : `${disponibilidad} disponibles`}
          </p>
        </div>
        <button
          onClick={onSeleccionar}
          disabled={agotado}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed ${
            seleccionada
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-sky-600 text-white hover:bg-sky-700'
          }`}
        >
          {seleccionada ? 'Seleccionado' : 'Seleccionar'}
        </button>
      </div>
    </article>
  )
}
