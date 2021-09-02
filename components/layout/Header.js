import Link from 'next/link';
import Logo from '../../assets/Logo.png';
function Header() {
    return (
        <header className="d-flex justify-content-between py-3 px-5 top-header">
            <Link href="/" passHref className="logo"><img src={Logo.src} className="img-fluid img-logo" alt="SF Brandname" /></Link>
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
