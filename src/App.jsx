import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes ,Route } from "react-router-dom"
import Loading from "./components/Loading/Loading";
import './App.css'


function App() {
 
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a React"} LoadingComponent={Loading} /> } />
          <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"Bienvenidos a React"}LoadingComponent={Loading} />} />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer   LoadingComponent={Loading} />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
