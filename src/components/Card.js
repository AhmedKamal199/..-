import {FaTimes} from 'react-icons/fa'


const Card = ({card, onDelete}) => {
  var frame = 'weekly'
  var current = card.timeframes[frame].current
  var previous = card.timeframes[frame].previous

  return (
    <div className="up card study bg-darkblue">
      <span className="top study-he-co">
        </span><h3 className="title">{card.title}</h3>
        <div className='pos'>
        <FaTimes  style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(card.id)} />
        </div>
        <h1 className="current">{current}hrs</h1>
        <h6 className="previous-t">last week &nbsp; &nbsp; 
        <span className="previous p">{previous}hrs</span>
        </h6>
      </div>
  )
}

export default Card
