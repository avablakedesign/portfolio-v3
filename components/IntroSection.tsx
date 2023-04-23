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
          <div className="content">
            <h1 className="text" data-text="Eva K Design">
              Eva K Design
            </h1>
          </div>
        </section>  
    )
}