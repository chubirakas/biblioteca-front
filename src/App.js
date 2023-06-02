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

const Info = (props)=>{
  return(
  <div>
    <h3>Nome: {props.nome}</h3>
    <h4>Email: {props.email}</h4>
    </div>
  );
}

function App() {
  return (
    <div>eba
      <Header/>
      <Info nome = "cabila" email = "cabila@cabila.com"/>
      <Info nome = "cabide" email = "cabide@cabide.com"/>
      <Info nome = "cabra" email = "cabra@cabra.com"/>
      <Sobre/>
    </div>
  );
}

export default App;
