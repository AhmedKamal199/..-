import Card from './Card'

const Cards = ({cards,onDelete}) => {

  return (
    <div className="container">
    <div className="person">
      <div className="gen">
        <img src="images/image-jeremy.png" alt="Jeremy" />
      <h6>Report for<h2> <br />Jeremy <br /> Robson</h2> </h6>
      </div> 
      <div className="selector">
        <ul className="list-style">
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
      </div>
    </div>   
    {cards.map((card,id) =>(
      <Card  key={id} card={card} onDelete={onDelete}  />
    ))}
   </div>
  )}
export default Cards