import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import VerticalCarousel from "./components/VerticalCarousel";
import {carouselData} from "./data";

function App() {
    return (
        <main>
            <Navbar/>
            <Home/>
            <Projects/>
            <Skills/>
            <Contact/>
            <VerticalCarousel data={carouselData.slides}/>
        </main>
    );
}

export default App;
