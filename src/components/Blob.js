import DrawBlob from "blob-animated";
import {useEffect} from "react";

//USAGE  ==  <Blob image={about.image}/>
export default function Blob({image}) {
    useEffect(() => {
        updateBlob()
    })

    const updateBlob = () => {
        new DrawBlob({
            canvas: document.getElementById('canvasExample'),
            speed: 100,
            scramble: 0.1,
            color: '#9daeac',
            size: 800
        })
    }

    return (<div className="outsideWrapper">
        <div className="insideWrapper">
            <img
                className="coveredImage"
                alt="Me"
                src={require('../' + image)}
            />
            <canvas id="canvasExample"/>
        </div>
    </div>)
}