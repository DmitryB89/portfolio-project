import logo from './logo.svg';
import './App.scss';
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {Projects} from "./components/Projects";
import {Footer} from "./components/Footer";
import {Skills} from "./components/Skills";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default App;
