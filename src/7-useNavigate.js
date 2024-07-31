import { Routes, Route, Link, useNavigate } from "react-router-dom"


function App() {
  const navigate = useNavigate()
  const forward = () => {
    navigate(1)
  }
  const back = () => {
    navigate(-1)
  }
  const push = (url) => {
    navigate(url)
  }
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
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => push("/chanchitofeliz")}>Push</button>
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
