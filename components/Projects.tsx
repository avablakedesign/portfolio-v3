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
                        <div className={`project-description ${fontMain.className} smiley`}>
                            <div className="project-description-header">
                                <h2>
                                    Project I Header
                                </h2>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit temporibus deleniti earum nesciunt non vero officia, optio libero saepe recusandae consequuntur omnis consequatur ut similique ipsam eum tempora! At.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="#">
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
                        <div className={`project-description ${fontMain.className} smiley`}>
                            <div className="project-description-header">
                                <h2>
                                    Project II Header
                                </h2>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit temporibus deleniti earum nesciunt non vero officia, optio libero saepe recusandae consequuntur omnis consequatur ut similique ipsam eum tempora! At.
                                </p>
                            </div>
                            <div className="project-description-links">
                                <div>
                                    <a href="#">
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