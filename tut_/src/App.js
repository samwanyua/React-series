import logo from './logo.svg';
import './App.css';

function App() {

  // const name = 'Wanyua'
  const handleNameChange = () => {
    const names = ['Bob', 'Einstein','Halaand','Willian', 'Drogba','Fofana']
    const int = Math.floor(Math.random()* 6)
    return names[int]
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}, you are learning React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          You are doing great
        </a>
        {/* <p>{'Wanyua'}</p>  renders as a string. Does not render  a boolean or object */}
      </header>
     
    </div>
  );
}

export default App;
