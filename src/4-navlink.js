import { Routes, Route, Link, NavLink, useParams, useMatch } from "react-router-dom"


let activeStyle = {
  fontSize: 20,
  textDecoration: "none",
  color: "red",
}

let activeClassName = "chanchitofeliz"

let proyecto2style = {
  fontSize: 30,
  backgroundColor: "#eee",
  color: "black",
}
const Proyecto1 = () => {
  //const match = useMatch("/portafolio/:proyecto_id")
  let params = useParams()
  const { proyecto_id } = params
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
          <NavLink to={"proyecto-1"}
          style={({isActive}) => 
          isActive ? activeStyle : null
        }
        >
            Proyecto 1
          </NavLink>
        </li>
        <li>
          <NavLink to={"proyecto-2"}
          className={({isActive}) => 
          isActive ? activeClassName : null
        }
        style={({isActive}) => isActive ? proyecto2style : null}
        >
          Proyecto 2
          </NavLink>
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
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
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
