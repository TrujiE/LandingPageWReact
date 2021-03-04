import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";
import Card2 from "./Card2";


function App() {
  return (//className="App"
    <div>
      <NavBar/>
    <div className="container">
      <Header 
      title="A Warm Welcome!" 
      descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <Card2/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
