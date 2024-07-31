import { Routes, Route, Link} from "react-router-dom"


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>}/>
          <Route path="/perfil" element={<h1>Perfil</h1>}/>
          <Route path="*" element={"404: ruta no encontrada"}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
