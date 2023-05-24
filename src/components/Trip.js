import "./TripStyles.css";
import TripData from "./TripData";
import trip1 from "../assets/france.jpg";
import trip2 from "../assets/indonisea.jpg";
import trip3 from "../assets/malasya.jpg";

function Trip  (){
  return (
    <div className="Trip">
    <h1>Recent Trips</h1>
    <p>You can discover unique destinations using Google Maps.</p>
    
    <div className="tripcard">

     <TripData
        image={trip2}
        heading="Trip in Indonesia"
        text="Indonesia, officially the Republic of Indonesia ,
        is a country in southest Asia and Oceania between the indian and pacefic oceans
        .It consists of over 17,000 islands , including sumatra , java ,sulawesi , and parts of Borneo and new guinea"
     />



<TripData
        image={trip3}
        heading="Trip in malasya"
        text="Malasya is the southest Asian country occupying parts of the malay peninsula 
        and the island of Borneo . it's known for its beaches, rainforest and mix of malay,chinese,indian, and European
        cultural influences
        "
     />


<TripData
        image={trip1}
        heading="Trip in France"
        text="France, in Western Europe ,encompasses medival cities, alpine villages and Mediterranean beaches.Paris ,its capital
        is famed for its fashion houses,classical art museums including the Louvre and monuments like the Eiffel towers 
       "
     />
    </div>
    
    </div>
  )
}

export default Trip