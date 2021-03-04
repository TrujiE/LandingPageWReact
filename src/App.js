import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";


function App() {
  return (//className="App"
    <div>
      <NavBar/>
    <div className="container">
      <Header/>
      <Card/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
