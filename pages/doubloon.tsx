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
                    <title>Doubloon | Eva K Design</title>
                    {/*Change the content of the site so that it is detailed.*/}
                    <meta name="description" content="Eva K Design Gallery" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/slimegirl2.png" />
                </Head>
                <main className="about">
                    <div className="about-slime">
                        <div className="aboutHeader">
                            <h1>Doubloon</h1>
                        </div>
                        <div className="about-text">
                                <p> 
                                    <span>Doubloon</span> is a <span>treasure hunting</span> app. Guided by a compass, GPS locations have <span>clues</span> to assist in finding <span>swag</span> in geocaches around the world. 
                                </p>
                            </div>
                        <div>
                            <div className="doubloon">
                                <div>
                                    <img src="./designs/Doubloon/DoubloonAppFinal-edited.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/Doubloon/DoubloonFintechApp-StartScreen.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/Doubloon/DoubloonFintechApp1-Compass.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/Doubloon/DoubloonTreasureClue2-Edited.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/Doubloon/DoubloonTreasureClue3-Edited.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/Doubloon/DoubloonTreasureDoubloon.jpg"></img>
                                </div>
                                <div>
                                    <img src="./designs/Doubloon/DoubloonAd2-v4.jpg"></img>
                                </div>
                            </div>
                        </div>
                        {/* <div className="about-glitch-button">
                        <GlitchButton text="Return to Homepage" color="turquoise" />
                    </div> */}
                    </div>
                    <div className="no-slime">
                        <Footer page="/" pageName="Home" />
                    </div>
                </main>
            </ObserverWrapper>
        </>
    )
}