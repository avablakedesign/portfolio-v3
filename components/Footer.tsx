import Link from "next/link"
interface Props {
    page:string;
    pageName:string;
}
export default ({page, pageName}:Props) => {
    return (
        <footer className = "footer">
            {/* <div>
                <Link href="/">
                    Home
                </Link>
            </div> */}
            <div>
                <Link href={page}>
                    {pageName}
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