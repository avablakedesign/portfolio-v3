import localFontOne from 'next/font/local'
const fontMain = localFontOne({
  src: "../public/Kinetic-Outlined.otf"
})

export default () => {
    return (
        <section className={`${fontMain.className} section`}>
          <h1>
            <span>Contact</span><span>Me</span> 
          </h1>
          <div className="content">
            <p>
                Email: evakdesign@protonmail.com
                LinkedIn: <a href="https://www.linkedin.com/in/ava-blake-1aaa78261/"></a>
            </p>
          </div>
        </section>  
    )
}