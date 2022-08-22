import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
    return (
        <main>
            <Navbar/>
            <Home/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
    );
}

export default App;
