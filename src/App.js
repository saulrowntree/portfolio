import Home from "./components/home/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <main>
                <Home/>
                {/*<About />*/}
                <Projects/>
                <Skills/>
                <Contact/>
            </main>
        </div>
    );
}

export default App;
