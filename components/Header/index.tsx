import Image from "next/image";
import styles from './styles.module.scss'
import Link from "next/link";
import routes from "@/routes";

export default function Header() {
    return <>
        <header className={`w-100 ${styles.header} position-fixed`}>
            <nav className={`w-100 d-flex justify-content-between`}>
                <div>
                    <Link href="/">
                        <Image src="/vercel.svg" alt="logo" width={72} height={16} />
                    </Link>
                </div>
                <ul className={`d-flex list-unstyled gap-10`}>
                    <li><Link href={routes.support.contact}>contact</Link></li>
                    <li><Link href={routes.support.about}>about</Link></li>
                    <li><Link href={routes.auth.signin}>signin</Link></li>
                </ul>
            </nav>
        </header>
    </>
}