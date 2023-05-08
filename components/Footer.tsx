import Link from "next/link"
export default () => {
    return (
        <footer className = "footer">
            <div>
                <Link href="/about">
                    About
                </Link>
            </div>
            <div className = "footer-socials">
                <div>
                    <a href="">
                        Github
                    </a>
                </div>
                <div>
                    <a href="">
                        LinkedIn
                    </a>
                </div>
                <div>
                    <a href="mailto:evakdesign@protonmail.com">
                        Email | evakdesign@protonmail.com
                    </a>
                </div>
            </div>
        </footer>
    )
}