import { Routes, Route, Link, useParams, useMatch } from "react-router-dom"

const Proyecto1 = () => {
  const match = useMatch("/portafolio/:proyecto_id")
  let params = useParams()
  const { proyecto_id } = params
  console.log({params, match})
  return(
    <h2>Proyecto {proyecto_id} </h2>
  )
}
const Portafolio = () => {
  return(
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={"/portafolio/proyecto-1"}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={"/portafolio/proyecto-2"}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path=":proyecto_id" element={<Proyecto1 />}/>
        </Routes>
      </div>
    </div>
  )
}
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>}/>
          <Route path="portafolio/*" element={<Portafolio />}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
