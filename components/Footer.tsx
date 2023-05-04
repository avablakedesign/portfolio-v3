import localFontOne from 'next/font/local'
const fontMain = localFontOne({
  src: "../public/Kinetic-Outlined.otf"
})

export default () => {
    return (
        <section className={`${fontMain.className} section`}>
          <h1>
            <span>Made by Eva K Design</span> 
          </h1>
          <div className="content">
          <footer>
          </footer> 
          </div> 
        </section>  
    )
}