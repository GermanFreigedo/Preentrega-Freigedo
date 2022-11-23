import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar/>  
      <ItemListContainer greeting= {"¡Bienvenidos a InstaBuy!"}/>
    </div>
  );
}

export default App;
