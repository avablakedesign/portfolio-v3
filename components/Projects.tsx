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
                <section className="section-flex">
                    <div>
                        <div className="video-wrapper">
                            <a href="" target="_blank" title="SHINOBI | The end to end encrypted code editor.">
                                {/* <img src="Shinobi.jpg" /> */}
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
                                        <GlitchButton text="Project Link" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ObserverWrapper>

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
                <section className="section-flex">
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
                                    A mock up of a Treasure Hunter app. Search globally for Doubloons, find geocached swag such as from Supreme or Apple.
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
                                    {/* <img src="Doubloon-Ad.jpg" /> */}
                    </div>
                </div>
            </section>
        </ObserverWrapper >
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
        </>
    )
}