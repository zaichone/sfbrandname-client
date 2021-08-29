function Header() {
    return (
        <header className="d-flex justify-content-between py-2 px-5 bg-dark">
            <a href="/" className="logo">LOGO</a>
            <ul className="nav d-flex justify-content-end">
                <li className="nav-item"><a href="/how-it-work/" className="nav-link">How it Work</a></li>
                <li className="nav-item"><a href="/services/" className="nav-link">Services</a></li>
                <li className="nav-item"><a href="/authentication/" className="nav-link">Authentication</a></li>
                <li className="nav-item"><a href="/sign-in/" className="nav-link">Sign In</a></li>
            </ul>
        </header>
    )
}

export default Header
