import Head from 'next/head'
import Image from 'next/image';
import * as PIXI from 'pixi.js'
import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer'
import GlitchButton from '@/components/GlitchButton';

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const app: any = new PIXI.Application({
                antialias: true,
                view: canvasRef.current,
                // resizeTo:canvasRef.current,
                backgroundColor: 0x000000,
                autoDensity: false,
                resolution: 1
            });
            window.onresize = (event: any) => {
                app.view.width = canvasRef.current?.width;
                app.view.height = canvasRef.current?.height;
            }
            PIXI.Assets.load('../slimegirl2.png').then((texture) => {
                const plane = new PIXI.SimplePlane(texture, 10, 10);

                plane.width = app.view.height * .85;
                plane.height = app.view.height * .85;
                plane.x = (app.view.width * .5) - (plane.width * .5);
                plane.y = (app.view.height * .5) - (plane.height * .5);

                app.stage.addChild(plane);

                // Get the buffer for vertice positions.
                const buffer = plane.geometry.getBuffer('aVertexPosition');

                // Listen for animate update
                let timer = 0;
                app.ticker.add(() => {
                    // Randomize the vertice positions a bit to create movement.
                    for (let i = 0; i < buffer.data.length; i++) {
                        buffer.data[i] += Math.sin((timer / 10) + i) * 0.5;
                    }
                    buffer.update();
                    timer++;
                });
            });
        }
    }, [])
    return (

        <>
            <Head>
                <title>About |Eva K Design</title>
                {/*Change the content of the site so that it is detailed.*/}
                <meta name="description" content="futurist, product designer and creative visionary" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/slimegirl2.png" />
            </Head>
            <main className="about">
                <div className="about-slime">
                    <div className="aboutHeader">
                        <h1>About</h1>
                    </div>
                    {/* <Image
                    src="/slimegirl2.png"
                    width={500}
                    height={500}
                    alt="A picture of a slimegirl"
                /> */}
                    <div>
                        <div className="canvasContainer slimeGirl">
                            <canvas ref={canvasRef} />
                        </div>
                        <div className="about-text">
                            <p>     Hello, I am a <span>futurist</span> and <span>creative visionary</span>, and <span>slime enthusiast</span> who has professional experience in the industry as an
                                <span> Executive Creative Director</span>. I design across all mediums but specialize in developing technology, <span>generative design optimization</span>, pitching ideas, branding and idea development. I love innovating brands and I am skilled in <span>creative strategy</span>.
                                I can create original ideas and guide them through all stages of development. Together we can work to build a new vision. I'm a strong proponent of ethics, especially regarding <span>artificial intelligence</span>.
                            </p>
                        </div>
                    </div>
                    <div className="about-glitch-button">
                        <GlitchButton text="Hire me" color="turquoise" />
                    </div>
                </div>
                <div className="no-slime">
                    <Footer page="/" pageName="Home" />
                </div>
            </main>
        </>
    )
}