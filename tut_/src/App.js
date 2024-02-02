// import logo from './logo.svg';
// import './App.css';
import Header from './Header'; 
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react"
import SearchItem from './SearchItem';


// Controlled inputs -> inputs in react forms

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] =useState('')

  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }


  const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1; //setting id value
      const myNewItem = {id, checked: false, item}
      const listItems = [...items, myNewItem]
      setAndSaveItems(listItems)

  }

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setAndSaveItems(listItems)

  }

  const handleDelete = (id) => {
    // console.log(id)
    const listItems = items.filter((item) => item.id !== id); //filter creates a new array
    setAndSaveItems(listItems)

  }
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    // add item function
    addItem(newItem)
    // console.log(e)
    // console.log(newItem)
    setNewItem('')

  }


  return (
    <div className="App">
     <Header title = "Groceries"/>
     <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
     />
     <SearchItem 
        search={search}
        setSearch = {setSearch}
     />
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
