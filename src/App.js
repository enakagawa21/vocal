import Hero from '../src/components/hero/Hero'
import './App.css';
import Navbar from './components/navbar/Navbar';
// import CardDisplay from './components/cards/CardDisplay'
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Doors from './components/doors/Doors'
import Callnow from './components/callNow/Callnow';

function App() {
  return (
    <div className="App">

<Navbar />
<Callnow />
<Hero id='#' /><br></br>
{/* <CardDisplay id='about' /> */}
<Doors id='servcices'/>
<Form id='contact' />
<Footer id='footer' />


    </div>
  );
}

export default App;
