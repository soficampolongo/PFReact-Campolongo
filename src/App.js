import LogoImg from "./img/logoamn.PNG";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemListContainer/ItemListContainer";
import ItemCount from "./ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar img={LogoImg}/>
      <ItemListContainer greeting = "Bienvenidos"/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
