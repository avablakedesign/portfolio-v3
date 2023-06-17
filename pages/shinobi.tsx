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
                    <title>Shinobi | Eva K Design</title>
                    {/*Change the content of the site so that it is detailed.*/}
                    <meta name="description" content="Eva K Designs Gallery" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/slimegirl2.png" />
                </Head>
                <main className="about">
                    <div className="about-slime">
                        <div className="aboutHeader">
                            <h1>Shinobi</h1>
                        </div>
                        <div>
                            <div className="about-text">
                                <p>
                                </p>
                            </div>
                            <div>
                                <img src="./designs/Shinobi/icon.jpg"></img>
                            </div>
                            <div>
                                <img src="./designs/Shinobi/icon2.jpg"></img>
                            </div>
                            <div>
                                <img src="./designs/Shinobi/Iphone-Screen.jpg"></img>
                            </div>
                            <div>
                                <img src="./designs/Shinobi/ShinobiAd4-variant3.jpg"></img>
                            </div>
                            <div>
                                <img src="./designs/Shinobi/background2.jpg"></img>
                            </div>
                            <div>
                                <img src="./designs/Shinobi/background3.jpg"></img>
                            </div>
                            <div>
                                <img src="./designs/Shinobi/background.jpg"></img>
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