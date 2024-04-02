export default function Formulario({ propData }) {
  const { dinero, setDinero } = propData

  const handleChange = (event) => {
    const formData = new FormData(event.currentTarget)
    const form = Object.fromEntries(formData.entries());

    setDinero(prevState => ({
      ...prevState,
      cuenta: Number(form.cuenta),
      propina: Number(form.propina),
      dividir: Number(form.dividir),
    }))
  }

  return (
    <section>
      <form className='form-section' onChange={handleChange} onSubmit={(e) => e.preventDefault()} >
        <div className='propinas'>
          <div>
            <label htmlFor='cuenta'>Cuenta</label>
            <input type='number' name='cuenta' placeholder='$...' defaultValue={dinero.cuenta} />
          </div>
          <div>
            <label htmlFor='propina'>Propina</label>
            <span>%{dinero.propina}</span>
          </div>
          <input type='range' name='propina' min="1" max="100" defaultValue={dinero.propina} />
          <p>Monto Total
            <span> ${(dinero.cuenta + ((dinero.cuenta / 100) * dinero.propina)).toFixed(2)}</span>
          </p>
        </div>
        <div className='divisiones'>
          <div>
            <label htmlFor='dividir'>Dividir</label>
            <span className='rango-dividido'>{dinero.dividir}</span>
          </div>
          <input type='range' name='dividir' min="1" max="10" defaultValue={dinero.dividir} />
          <p>Monto Partido
            <span> ${(((dinero.cuenta + ((dinero.cuenta / 100) * dinero.propina))) / dinero.dividir).toFixed(2)}</span>
          </p>
        </div>
      </form>
    </section>
  )
}
