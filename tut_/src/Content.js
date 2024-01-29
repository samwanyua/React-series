const Content = () => {
    const handleNameChange = () => { //add the 'handle' before the function name
        const names = ['Bob', 'Einstein','Halaand','Willian', 'Drogba','Fofana']
        const int = Math.floor(Math.random()* 6)
        return names[int]
    }
    
  return (
    <main>
        <p>
            Hello {handleNameChange()}
        </p>
    </main>    
  )
}

export default Content