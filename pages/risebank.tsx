import ObserverWrapper from '@/components/ObserverWrapper'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import Footer from '@/components/Footer'
import GlitchButton from '@/components/GlitchButton'

export default function Home() {
    useEffect(() => {
    }, [])
    return (
                <div className="wrapper">
                    <Head>
                        <title>RISE BANK | Eva K Design</title>
                        {/*Change the content of the site so that it is detailed.*/}
                        <meta name="description" content="RISEBANK" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/slimegirl2.png" />
                    </Head>
                    <main>
                        <div className="about-slime">
                            <div className="aboutHeader risebankfont">
                                <h1>RISE BANK</h1>
                            </div>
                        </div>
                        <div className="about-text risebankfont">
                            <p> 
                                <span>RISEBANK</span> is the future of <span>finance</span>. Stylish unique and <span>futuristic</span> in <span>design</span>, below are three mock ups displaying the apps functionality.
                            </p>
                        </div>
                        <div className="risebank">
                            <div>
                                <img src="./designs/RISEBANK/RISEBANK_ONBOARDING.png"></img>
                            </div>
                            <div>
                                <img src="./designs/RISEBANK/RISEBANK_SPENDING.png"></img>
                            </div>
                            <div>
                                <img src="./designs/RISEBANK/RISEBANK_DASHBOARD.png"></img>
                            </div>
                        </div>
                        {/* <div className="about-glitch-button">
                        <GlitchButton text="Return to Homepage" color="turquoise" />
                    </div> */}
                        <div className="no-slime">
                            <Footer page="/" pageName="Home" />
                        </div>
            </main>
            </div>
    )
}