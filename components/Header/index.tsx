import Image from "next/image";
import styles from './styles.module.scss'

export default function Header() {
    return <>
        <header className={`w-100 ${styles.header} position-fixed`}>
            <nav className={`w-100 d-flex justify-content-between`}>
                <div>
                    <a href="/">
                        <Image src="/vercel.svg" alt="logo" width={72} height={16} />
                    </a>
                </div>
                <ul className={`d-flex list-unstyled`}>
                    <li><a href="/contact">contact</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/auth/signin">signin</a></li>
                </ul>
            </nav>
        </header>
    </>
}