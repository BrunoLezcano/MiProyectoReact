import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/NavBar/CartWidget';


function App() {

  return (
    <div>
      <header className='navBarConteiner'>
        <NavBar imgurl="\IMG\pastas_frescas.png" titulo="Casa Martin"/>
      </header>
    </div>
  );
}


export default App;
