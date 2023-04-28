import { useEffect, useRef } from "react";
import localFontOne from 'next/font/local'
import Glitch from "./Glitch"
import * as PIXI from 'pixi.js'

const fontMain = localFontOne({
    src: "../public/coolvetica rg.otf"
})

export default () => {
    const wobbleRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // if (wobbleRef.current) {
        //     const app: any = new PIXI.Application({width: wobbleRef.current?.clientWidth , height: wobbleRef.current.clientHeight });
        //     wobbleRef.current.appendChild(app.view);
        //     PIXI.Assets.load('GlitchSmiley.png').then((texture) => {
        //         const plane = new PIXI.SimplePlane(texture, 10, 10);
                
        //         plane.width = wobbleRef.current ? (wobbleRef.current?.clientWidth * 0.40) : 100;
        //         plane.height = wobbleRef.current ? (wobbleRef.current?.clientWidth * 0.40) : 100;
        //         plane.x = wobbleRef.current ? (wobbleRef.current?.clientWidth * 0.42) : 0;
        //         plane.y = wobbleRef.current ? (wobbleRef.current?.clientHeight * 0.2) : 0;
    
        //         app.stage.addChild(plane);
    
        //         // Get the buffer for vertice positions.
        //         const buffer = plane.geometry.getBuffer('aVertexPosition');
    
        //         // Listen for animate update
        //         let timer = 0;
        //         app.ticker.add(() => {
        //             // Randomize the vertice positions a bit to create movement.
        //             for (let i = 0; i < buffer.data.length; i++) {
        //                 buffer.data[i] += Math.sin((timer / 10) + i) * 0.5;
        //             }
        //             buffer.update();
        //             timer++;
        //         });
        //     });
        // }
    }, []);

    return (
        <section className="section-flex">
            <div>
                <div className="video-wrapper">
                    <video src="Dragonpunk.webm" />
                </div>
            </div>
            <div className={`project-description ${fontMain.className}`}>
                <div className="project-description-header">
                    <h2>
                        Nocturne
                    </h2>
                </div>
                <div>
                    <p>
                        Nocturne is a internet radio station for classical music that has a system designed to comply with data laws for logging tracks.
                    </p>
                </div>
                <div className="project-description-links">
                    <div style={{ background: "magenta" }}>
                        <Glitch text="Github" bg="magenta">
                            <div className="link">
                                <a href="#">Github</a>
                            </div>
                        </Glitch>
                    </div>
                </div>
            </div>
            <div className = "project-background" ref = {wobbleRef}>

            </div>
        </section>
    );
};