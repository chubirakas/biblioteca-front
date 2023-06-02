import{Component} from "react";

class Sobre extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <h3>Nome: {this.props.nome}</h3>
            <h4>Email: {this.props.email}</h4><br/>
            </div>
        );
    }
}

export default Sobre;