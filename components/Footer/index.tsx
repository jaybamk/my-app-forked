import Link from 'next/link'
import Image from 'next/image'
import routes from '@/routes'
import styles from './styles.module.scss'
import logo from '@/img/logo.png'
import facebook from '@/img/facebook.svg'
import instagram from '@/img/instagram.svg'
import twitter from '@/img/twitter.svg'


export default function Footer() {
    return <>
        <footer className={`bg-secondary w-100 d-flex ${styles.myLinks} `}>
            <div>
                <Link href={routes.home}>
                    <Image src={logo} alt="logo" width={120} height={45} />
                </Link>
            </div>
            <div>
                <ul className={`d-flex flex-column list-unstyled`}>
                    <li> <Link href={routes.home}>About Us</Link></li>
                    <li> <Link href={routes.home}>Responsibilities</Link></li>
                    <li> <Link href={routes.home}>Our Services</Link></li>
                    <li> <Link href={routes.home}>Contact</Link></li>
                </ul>
            </div>
            <div>
                <ul className={`d-flex flex-column list-unstyled`}>
                    <li> <Link href={routes.home}>Disclaimer</Link></li>
                    <li> <Link href={routes.home}>Testimonials</Link></li>
                    <li> <Link href={routes.home}>Privacy Policy</Link></li>
                    <li> <Link href={routes.home}>Terms of Service</Link></li>
                </ul>
            </div>
            <div className={`d-flex`}>
                <ul className='d-flex list-unstyled'>
                    <li> <Link href={routes.home}><Image src={facebook} alt="facebook" width={20} height={20} /></Link></li>
                    <li> <Link href={routes.home}><Image src={twitter} alt="twitter" width={20} height={20} /></Link></li>
                    <li> <Link href={routes.home}><Image src={instagram} alt="instagram" width={20} height={20} /></Link></li>
                </ul>

            </div>

        </footer>
    </>
}