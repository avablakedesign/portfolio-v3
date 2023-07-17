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
                    <title>Pinterest X Vogue | Eva K Design</title>
                    {/*Change the content of the site so that it is detailed.*/}
                    <meta name="description" content="Eva K Design Gallery" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/slimegirl2.png" />
                </Head>
                <main className="about">
                    <div className="about-slime">
                        <div className="aboutHeader">
                            <h1>Pinterest X Vogue</h1>
                        </div>
                        <div className="about-text">
                            <p> 
                                <span>Pinterest X Vogue</span> is a high fashion app. A mock up of Pinterest and Vogue, search for fashion trends and view Vogue <span>fashion archives</span>. This is noncommercial and I am not affilated with either corporations.
                            </p>
                        </div>
                    </div>    
                        <div className="pinterestxvogue">
                            <div>
                                <img src="./designs/PinterestXVogue/Main_Page.png"></img>
                            </div>
                            <div>
                                <img src="./designs/PinterestXVogue/Search.png"></img>
                            </div>
                            <div>
                                <img src="./designs/PinterestXVogue/Menu.png"></img>
                            </div>
                        </div>
                    {/* <div className="about-glitch-button">
                        <GlitchButton text="Return to Homepage" color="turquoise" />
                    </div> */}
                    <div className="no-slime">
                        <Footer page="/" pageName="Home" />
                    </div>
                </main>
        </ObserverWrapper >
        </>
    )
}