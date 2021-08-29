import Link from 'next/link';
function Header() {
    return (
        <header className="d-flex justify-content-between py-2 px-5 bg-dark">
            <Link href="/" className="logo">LOGO</Link>
            <ul className="nav d-flex justify-content-end">
                <li className="nav-item"><Link href="/how-it-work/" className="nav-link">How it Work</Link></li>
                <li className="nav-item"><Link href="/services/" className="nav-link">Services</Link></li>
                <li className="nav-item"><Link href="/authentication/" className="nav-link">Authentication</Link></li>
                <li className="nav-item"><Link href="/sign-in/" className="nav-link">Sign In</Link></li>
            </ul>
        </header>
    )
}

export default Header
