import localFontOne from 'next/font/local'
const fontMain = localFontOne({
  src: "../public/Kinetic-Outlined.otf"
})

export default () => {
  return (
    <section className={`${fontMain.className} section`}>
      <h1>
        <span>Eva</span><span>K</span><span>Design</span>
      </h1>
      <div className="splash-header">
        <div className="splash-header-content content">
          <h1 className="text" data-text="Eva K Design">
            Eva K Design
          </h1>
        </div>
        <div className="splash-header-flow">
          <div className="splash-header-flow-vert">
            <p>
              FLOW
            </p>
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