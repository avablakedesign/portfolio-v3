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
                    <title>Nightmarket | Eva K Design</title>
                    {/*Change the content of the site so that it is detailed.*/}
                    <meta name="description" content="Eva K Design Gallery" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/slimegirl2.png" />
                </Head>
            <main className="about">
                <div className="about-slime">
                    <div className="aboutHeader">
                        <h1>Nightmarket</h1>
                    </div>
                </div>    
                    <div>
                        <div className="about-text">
                            <p> 
                                <span>Nightmarket</span> is a minimalist dashboard going against the trends. <span>Sophisticated</span> in <span>design</span>, Nightmarket distinguishes itself by being <span>highly ledgible</span>.
                            </p>
                        </div>
                        <div className="nightmarket-wrapper">
                            <div className="nightmarket">
                                <img src="./designs/Nightmarket/Nightmarket.png"></img>
                            </div>
                            <div>
                                <img src="nightmarketlogo4.jpg"></img>
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