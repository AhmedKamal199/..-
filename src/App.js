import Header from './components/Header'
import Cards from './components/Cards'
import { useState, useEffect } from 'react'
import AddCard from './components/AddCard'

function App() {
  const [cards, setCards] = useState([])

  const deleteCard = async (id) =>{
    await fetch(`http://localhost:5000/cards/${id}`, {
      method:'DELETE',
    })
    console.log(id)
    setCards(cards.filter((card)=> card.id !== id))
  }

  useEffect(()=> {
    const getCards = async () =>{
      const cardsFromServer = await fetchCards()
      setCards(cardsFromServer)
    }
    getCards()
}, [])
  const fetchCards = async () =>{
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json()
    return data
  }

  const [showAdd,setShow] = useState(false)

  const Addcard = (card) =>{
    const NewCard = {...card}
    setCards([...cards, NewCard])
    
  }

  return (
    <div className="App">
      <Header onAdd={()=>setShow(!showAdd)} showAdd={showAdd}/>
      {showAdd && <AddCard onAdd={Addcard}/> }
      { cards.length > 0 ? 
      (<Cards cards={cards} onDelete={deleteCard}/>)
    :(
      'Now Cards to show')
    }
    </div>
  );
}

export default App;
