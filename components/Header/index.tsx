import Image from "next/image";
import styles from './styles.module.scss'
import Link from "next/link";
import routes from "@/routes";
import logo from "@/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return <>
        <header className={`w-100 ${styles.header} position-fixed`}>
            <nav className={`w-100 d-flex justify-content-between`}>
                <div>
                    <Link href="/">
                        <Image src={logo} alt="logo" width={120} height={45} />
                    </Link>
                </div>
                <div>
                    <ul className={`d-none d-md-flex list-unstyled gap-10`}>
                        <li><Link href={routes.support.contact}>contact</Link></li>
                        <li><Link href={routes.support.about}>about</Link></li>
                        <li><Link href={routes.auth.signin}>signin</Link></li>
                    </ul>
                    <div>
                    {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                    </div>
                </div>
            </nav>
        </header>
    </>
}