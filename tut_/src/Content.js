const Content = () => {
    const handleNameChange = () => { //add the 'handle' before the function name
        const names = ['Bob', 'Einstein','Halaand','Willian', 'Drogba','Fofana']
        const int = Math.floor(Math.random()* 6)
        return names[int]
    }
    
    const handleClick = () => {
      console.log('You clicked it!')
    }
    // adding a parameter  - on the button add an anonymous function         <button onClick={() => handleClick2('Wanyua')}>Click it</button>

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`)
    }
    //adding an event
    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }


  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() => handleClick2('Wanyua')}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button>

        
    </main>    
  )
}

export default Content