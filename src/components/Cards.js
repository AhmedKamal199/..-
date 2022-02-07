import Card from './Card'

const Cards = ({cards,onDelete}) => {
  const sels = document.querySelectorAll('.selector ul li');
  sels.forEach((sel)=>{
    sel.addEventListener('click', ()=>{
      removeAll()
      sel.classList.add('active')
      console.log(sel.textContent)
    });
  });

  function removeAll(){
    sels.forEach((sel)=>{
      sel.classList.remove('active')
    })
  }

  return (
    <div className="container">
    <div className="person">
      <div className="gen">
        <img src="images/image-jeremy.png" alt="Jeremy" />
        <h6>Report for </h6>
        <h2> Jeremy <br /> Robson</h2>
      </div> 
      <div className="selector">
        <ul className="list-style">
        <li className='d-wh'>daily</li>
        <li className='d-wh active'>weekly</li>
        <li className='d-wh'>monthly</li>
      </ul>
      </div>
    </div>   
    <div className='cards up'>
    {cards.map((card,id) =>(
      id < 3 && <Card  key={id} card={card} 
      onDelete={onDelete} /> 
    ))}
    </div>
    <div className='cards down'>
    {cards.map((card,id) =>(
      id >= 3 && <Card key={id} card={card} 
      onDelete={onDelete} /> 
    ))}
    </div>
   </div>
  )}
export default Cards