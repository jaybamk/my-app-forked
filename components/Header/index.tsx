
export default function Header() {
    const date = new Date();
    return <>
        <header>
            <nav>
                <div>
                    <a href="/">
                        <img src="/vercel.svg" alt="logo" />
                    </a>
                </div>
                <ul>
                    <li><a href="/contact">contact</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/auth/signin">signin</a></li>
                    <li><a href="/auth/signin">{date.toISOString()}</a></li>
                </ul>
            </nav>
        </header>
    </>
}