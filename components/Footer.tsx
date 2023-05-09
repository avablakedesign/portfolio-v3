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
                    <a href="https://github.com/evakdesign?tab=repositories">
                        Github
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/eva-krist%C3%B3fersd%C3%B3ttir-1aaa78261/">
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