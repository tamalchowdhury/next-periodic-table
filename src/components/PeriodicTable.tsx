import {elements} from '@/data/elements.js';

export default function PeriodicTable() {
  return (
    <div>
      <h1>Periodic Table</h1>
      <section className='periodic-table'>
      {elements.map((element) => <Element key={element.number} element={element}  />)}
      </section>
    </div>
  )
}

function Element({element}) {
  return (
    <div className="element border-[1px]">
      <h2>{element.name}</h2>
      <p>{element.symbol}</p>
      <p>{element.atomic_mass}</p>
    </div>
  )
}