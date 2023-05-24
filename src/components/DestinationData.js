import "./DestinationStyles.css";
import { Component } from "react";







class DestinationData extends Component {
    render(){
  return (


    <div className={this.props.className}>
    <div className="des-text">
        <h2>{this.props.heading}</h2>
        <p>
        {this.props.text}
        </p>
    </div>


    <div className="image">
  


    <img src="https://images.unsplash.com/photo-1590501885773-77f3fff9e7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" alt="img"/>
    
    <img src="https://cdn.pixabay.com/photo/2017/02/21/00/54/beach-2084350__480.jpg" alt="img2"/>

         

    </div>

    
    
</div>

)}
}

export default DestinationData


