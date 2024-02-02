// import logo from './logo.svg';
// import './App.css';
import Header from './Header'; 
import Content from './Content';
import Footer from './Footer';
import { useState } from "react"

// Controlled inputs -> inputs in react forms

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ])

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    // console.log(id)
    const listItems = items.filter((item) => item.id !== id); //filter creates a new array
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))

  }


  return (
    <div className="App">
     <Header title = "Groceries"/>
     <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
     />
     <Footer length = {items.length}/>

    </div>
  );
}

export default App;
