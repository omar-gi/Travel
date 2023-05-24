import DestinationData from './DestinationData';
import './DestinationStyles.css';

const Destination = () => {
  return (
    <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot , within a time frame</p>

         
        <DestinationData
            className="first-des"
            heading="Taal Volcano ,Batangas"
            text="
        One of the most iconic views in Luzon, mt. Taal boasts a volcano inside a lake inside an island .
        if you fancy a closer look , the hike up to the crater is a mere 45 minutes ,
        and is easy enough for biginners.
        Guides will assist most of the way ,and you'll see the pecuilar enviroment found on an active volcano , 
        including volcanic rocks and steam vents. The hike can be dusty and hot , so plan for an early morning trip"
        
       

        />



           
       <DestinationData
            className="first-des-reverse"
            heading="mt.Daguldul ,Batangas"
            text="
        if you are looking for a hike that's a little more challenging but still good for a beginner mountaineer, check
        out Mt.Daguldul in san juan ,Batangas .You'll start your hike from the beach and pass through tropical forrest
        ,different rock formations and small streams"
     

        />

       </div>
  )
}

export default Destination