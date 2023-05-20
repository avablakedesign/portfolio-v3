import ObserverWrapper from "./ObserverWrapper"
import localFontOne from 'next/font/local'
import GlitchButton from "./GlitchButton"
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
                            <a href="https://nocturne-radio.vercel.app/" target="_blank" title="site | Nocturne radio for the people.">
                                <img src="nocturne-screenshot-2.png" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className={`smiley`}></div>
                        <div className={`project-description ${fontMain.className}`}>
                            <div className="project-description-header">
                                <h2>
                                    Project I - Nocturne
                                </h2>
                            </div>
                            <div>
                                <p>
                                    An internet radio project for the people that plays classical music from the internet archive. Nocturne supports free information advocacy.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="https://github.com/evakdesign/nocturne">
                                        <GlitchButton text="Github" />
                                    </a>
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
                                    Project II - NESpunk
                                </h2>
                            </div>
                            <div>
                                <p>
                                    NESpunk is a fansite of the NES. It's a meeting place for the homebrew and chiptune scenes where you can buy homebrew carts and listen to tracks. It also has a free procedural chiptune tracker app. 
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="https://github.com/evakdesign/dragonpunk">
                                        <GlitchButton text="Github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="video-wrapper">
                            <img src="nespunk_screenshot.png" />
                        </div>
                    </div>
                </section>
            </ObserverWrapper>
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
        </>
    )
}