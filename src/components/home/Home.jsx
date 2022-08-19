import React, {useEffect} from "react";
import {about, carouselData} from "../../data";
import {Fade} from "react-reveal";
import DrawFuzz from "./Fuzz"
import VerticalCarousel from "../VerticalCarousel";


export default function Home() {
    useEffect(() => {
        DrawFuzz()
    })
    return (
        <Fade bottom duration={2000} distance="40px">
            <section id="projectDiv">
                <div className="container flex md:flex-row flex-col items-center">
                    <canvas id="fuzz"/>
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><span
                            style={{'color': 'grey'}}>
                        Hey!<br/>My name's&nbsp;</span>
                            {about.name}&nbsp;
                            <span
                                style={{'color': 'grey'}}>
                        and <br/> I'm a </span>{about.title}
                        </h1>
                        <p className="mb-8 leading-relaxed text-2xl">
                            {about.body}
                        </p>
                        <VerticalCarousel data={carouselData.slides}/>
                        <div className="flex justify-center">
                            <a
                                href="src/components/home/Home.jsx"
                                className="inline-flex text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Work With Me
                            </a>
                            <a
                                href="src/components/home/Home.jsx"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                See My Past Work
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>);
}