import { Routes, Route, Link } from "react-router-dom"


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
          <Route path={"/portafolio/proyecto-1"} element={<h2>Proyecto 1</h2>}></Route>
           <Route path={"/portafolio/proyecto-2"} element={<h2>Proyecto 2</h2>}></Route>
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
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/portafolio" element={<Portafolio />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
