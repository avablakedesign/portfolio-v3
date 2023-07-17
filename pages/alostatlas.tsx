import ObserverWrapper from '@/components/ObserverWrapper'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import Footer from '@/components/Footer'
import GlitchButton from '@/components/GlitchButton'

export default function Home() {
    useEffect(() => {
    }, [])
    return (
        <>
            <ObserverWrapper
                observedClass={"section-one-entered"}
                observerThreshold={0.1}
                callback={
                    () => {
                        console.log("intersecting")
                    }
                }
            >
                <Head>
                    <title>A Lost Atlas | Eva K Design</title>
                    {/*Change the content of the site so that it is detailed.*/}
                    <meta name="description" content="Eva K Design Gallery" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/slimegirl2.png" />
                </Head>
                <main className="about">
                    <div className="about-slime">
                        <div className="aboutHeader">
                            <h1>A Lost Atlas</h1>
                        </div>
                            <div className="about-text">
                                <p>
                                    <span>A Lost Atlas</span> is a <span>World Building Art Gallery</span> app. Where will you travel to in <span>time</span>? Meet some of histories great minds on an <span>epic adventure</span>. Time journals, apocalypse clocks, trinkets, keys and doorways to other <span>parallel worlds</span>. I am the artist who created these works to explore <span>visual storytelling</span>. 
                                </p>
                            </div>
                            <div>
                            <div className="alostatlas">
                                <div>
                                    <img src="./designs/TheLostAtlas/LostAtlasIcon.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/LookingThroughTheWindowOfTime.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/TheTimeTravelersJournals/Journal1.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/TheTimeTravelersJournals/Journal2.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/TheTimeTravelersJournals/Journal3.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/TheTimeTravelersJournals/JournalOnTimeCurrents.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/ApocalypseClocks/clock1.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/ApocalypseClocks/clock2.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/ApocalypseClocks/clock3.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/ApocalypseClocks/clock4.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/Doorways/door0.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/Doorways/door1.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/Doorways/door2.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/Doorways/door3.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/TheTimeTravelersTrinkets/Key3.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/TheLostAtlas/TheTimeTravelersTrinkets/Trinket4.jpg"></img>
                                </div>
                            </div>
                            {/* <div className="about-glitch-button">
                        <GlitchButton text="Return to Homepage" color="turquoise" />
                    </div> */}
                        </div>
                        <div className="no-slime">
                            <Footer page="/" pageName="Home" />
                        </div>
                    </div>
                </main>
            </ObserverWrapper>
        </>
    )
}