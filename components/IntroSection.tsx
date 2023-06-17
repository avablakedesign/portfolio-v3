import ObserverWrapper from "./ObserverWrapper"
import localFontOne from 'next/font/local'
const fontMain = localFontOne({
  src: "../fonts/Kinetic-Outlined.otf"
})

export default () => {
  return (
    <section className={`${fontMain.className} section`}>
      <h1>
        <div className="small-header">
          <span>Eva</span><span>K</span><span>Design</span>
        </div>
      </h1>
      <div className="splash-header">
        <div className="splash-header-content content">
          <h1 className="text" data-text="Eva K Design">
            Eva K Design
          </h1>
        </div>
        <div className="splash-header-flow">
          <div className="splash-header-flow-vert">
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
              <p>
                F
              </p>
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
              <p>
                L
              </p>
            </ObserverWrapper>
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
              <p>
                O
              </p>
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
              <p>
                W
              </p>
            </ObserverWrapper>
          </div>
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
          </div>
        </div>
      </div>
    </section>
  )
}