import LogoImg from "./img/logoamn.PNG";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar img={LogoImg}/>
      <ItemListContainer greeting = "Bienvenidos"/>
    </div>
  );
}

export default App;
