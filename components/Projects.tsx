import ObserverWrapper from "./ObserverWrapper"
import localFontOne from "next/font/local"
import GlitchButton from "./GlitchButton"
import Link from "next/link"
const fontMain = localFontOne({
    src: "../public/coolvetica rg.otf"
})
export default () => {

    return (
        <>
            {/* <ObserverWrapper
                baseClasses={"section section-one"}
                observedClass={"section-one-entered"}
                observerThreshold={0.1}
                callback={
                    () => {
                        console.log("intersecting")
                    }
                }
            >
                <section className="section-flex">
                    <div>
                        <div className="video-wrapper">
                            <a href="" target="_blank" title="SHINOBI | The end to end encrypted code editor.">
                                <img src="Shinobi.jpg" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className={`smiley`}></div>
                        <div className={`project-description ${fontMain.className}`}>
                            <div className="project-description-header">
                                <h2>
                                    SHINOBI
                                </h2>
                            </div>
                            <div>
                                <p>
                                    An end to end encrypted code editor. Collaborate privately, encrypt your git. Ships with a sandboxed Copilot &mdash; with stealth, with style.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <Link href="/shinobi">
                                        <GlitchButton text="project link" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ObserverWrapper> */}

            <ObserverWrapper
                baseClasses={"section section-two"}
                observedClass={"section-two-entered"}
                observerThreshold={0.2}
                callback={
                    () => {
                        console.log("intersecting")
                    }
                }
            >
                <section className="section-flex risebankwrapper">
                    <div>
                        <div className={`smiley-2`}></div>
                        <div className={`project-description ${fontMain.className}`}>
                            <div className="project-description-header">
                                <h2>
                                    RISE BANK
                                </h2>
                            </div>
                            <div>
                                <p>
                                    A mock up of a banking app that is both stylish and functional in design. RISE BANK, be unique. 
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="risebank">
                                        <GlitchButton text="project link" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="video-wrapper">
                            <img src="RISEhologramLogo.jpg" />
                        </div>
                    </div>
                </section>
            </ObserverWrapper >
            <ObserverWrapper
                baseClasses={"section section-one"}
                observedClass={"section-one-entered"}
                observerThreshold={0.1}
                callback={
                    () => {
                        console.log("intersecting")
                    }
                }
            >
                <section className="section-flex nightmarketwrapper">
                    <div>
                        <div className={`smiley-2`}></div>
                        <div className={`project-description ${fontMain.className}`}>
                            <div className="project-description-header">
                                <h2>
                                    NIGHT MARKET
                                </h2>
                            </div>
                            <div>
                                <p>
                                    This is a mock up of a financial dashboard. Know statistics at a glance with a clear no clutter design experience.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="nightmarket">
                                        <GlitchButton text="project link" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="video-wrapper">
                            <img src="nightmarketlogo4.jpg"/>
                        </div>
                    </div>
                </section>
            </ObserverWrapper >
                 <ObserverWrapper
                baseClasses={"section section-two"}
                observedClass={"section-two-entered"}
                observerThreshold={0.2}
                callback={
                    () => {
                        console.log("intersecting")
                    }
                }
            >
                <section className="section-flex pinterestxvoguewrapper">
                    <div>
                        <div className={`smiley-2`}></div>
                        <div className={`project-description ${fontMain.className}`}>
                            <div className="project-description-header">
                                <h2>
                                    PINTEREST X VOGUE
                                </h2>
                            </div>
                            <div>
                                <p>
                                    A mock up of a high fashion social media image sharing app. I am not affilated with either Vogue or Pinterest this collaboration is purely fictional.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="pinterestxvogue">
                                        <GlitchButton text="project link" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="video-wrapper">
                            <img src="pinterestXvogue.jpg" />
                        </div>
                    </div>
                </section>
            </ObserverWrapper >
            <ObserverWrapper
                baseClasses={"section section-one"}
                observedClass={"section-one-entered"}
                observerThreshold={0.2}
                callback={
                    () => {
                        console.log("intersecting")
                    }
                }
            >
                <section className="section-flex doubloonwrapper">
                    <div>
                        <div className={`smiley-2`}></div>
                        <div className={`project-description ${fontMain.className}`}>
                            <div className="project-description-header">
                                <h2>
                                    DOUBLOON
                                </h2>
                            </div>
                            <div>
                                <p>
                                    A mock up of a Treasure Hunter Iphone app. Search globally for Doubloons, find geocached swag such as from Supreme or Apple.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="doubloon">
                                        <GlitchButton text="project link" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="video-wrapper">
                            <img src="Doubloon-Ad.jpg" />
                        </div>
                    </div>
                </section>
            </ObserverWrapper >
            <ObserverWrapper
                baseClasses={"section section-two"}
                observedClass={"section-two-entered"}
                observerThreshold={0.1}
                callback={
                    () => {
                        console.log("intersecting")
                    }
                }
            >
                <section className="section-flex alostatlaswrapper">
                    <div>
                        <div className={`smiley-2`}></div>
                        <div className={`project-description ${fontMain.className}`}>
                            <div className="project-description-header">
                                <h2>
                                    A LOST ATLAS
                                </h2>
                            </div>
                            <div>
                                <p>
                                    This is a mock up of an Iphone app where it is a compendium of Time Traveler art I created for a fictional universe. You may piece together the story through visual clues.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="alostatlas">
                                        <GlitchButton text="project link" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="video-wrapper">
                            <img src="TheTimeTravelersNook.jpg" />
                        </div>
                    </div>
                </section>
            </ObserverWrapper >
        </>
    )
}