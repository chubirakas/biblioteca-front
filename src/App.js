import './App.css';
import Sobre from "./Sobre";

const Header = ()=>{
  return(

    <div>
      <h1>Buen Viendo</h1>
      <h3>Esse site foi desenvolvido por: </h3>
    </div>
  );

}

function App() {
  return (
    <div>eba
      <Header/>
      <Sobre nome = "cabila" email = "cabila@cabila.com"/>
      <Sobre nome = "cabide" email = "cabide@cabide.com"/>
      <Sobre nome = "cabra" email = "cabra@cabra.com"/>
    </div>
  );
}

export default App;
