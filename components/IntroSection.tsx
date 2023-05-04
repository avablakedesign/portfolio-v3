import localFontOne from 'next/font/local'
import Link from 'next/link'
const fontMain = localFontOne({
  src: "../public/Kinetic-Outlined.otf"
})

export default () => {
  return (
    <section className={`${fontMain.className} section`}>
      <h1>
        <span>Eva</span><span>K</span><span>Design</span>
      </h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutpage">About Me</Link>
          </li>
          <li>
            <Link href="/contactpage">Contact</Link>
          </li>
        </ul>
      <div className="content">
        <h1 className="text" data-text="Eva K Design">
          Eva K Design
        </h1>

      </div>
    </section>
  )
}