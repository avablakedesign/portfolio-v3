import ObserverWrapper from "./ObserverWrapper"
import localFontOne from 'next/font/local'
import Glitch from "./Glitch"
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
                            <video src="Dragonpunk.webm" />
                        </div>
                    </div>
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
                        <div className = "project-description-links">    
                              <div style={{background:"magenta"}}>
                                <Glitch text="Github" bg="magenta">
                                        <div className = "link">
                                            <a href="#">Github</a>
                                        </div>    
                                </Glitch>
                              </div>
                        </div>
                    </div>
                </section>
            </ObserverWrapper>

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
                <section className="section-flex">
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
                        <div className = "project-description-links">    
                              <div style={{background:"magenta"}}>
                                <Glitch text="Github" bg="magenta">
                                        <div className = "link">
                                            <a href="#">Github</a>
                                        </div>    
                                </Glitch>
                              </div>
                        </div>
                    </div>
                    <div>
                        <div className="video-wrapper">
                            <video src="Dragonpunk.webm" />
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