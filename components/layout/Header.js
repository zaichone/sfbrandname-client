import Link from 'next/link';
import Logo from '../../assets/Logo.png';
import { useRouter } from 'next/router';

import { auth } from "../../src/config/firebase";
import useAuth from '../../src/hooks/auth';

function Header() {

    const { user, loginWithGoogle, login, logout } = useAuth();
    //console.log("🚀 ~ file: Header.js ~ line 10 ~ Header ~ login", login)
    //console.log("🚀 ~ file: Header.js ~ line 10 ~ Header ~ user", user)
    const router = useRouter()

    async function signOut() {
        await auth.signOut();
        window.location.reload(); 
        router.push("/sign-in/");
    }
    return (
        <header className="d-flex justify-content-between py-3 px-5 top-header">
            <Link href="/" passHref className="logo"><img src={Logo.src} className="img-fluid img-logo" alt="SF Brandname" /></Link>
            <ul className="nav d-flex justify-content-end">
                <li className="nav-item"><Link href="/how-it-work/" className="nav-link">How it Work</Link></li>
                <li className="nav-item"><Link href="/services/" className="nav-link">Services</Link></li>
                <li className="nav-item"><Link href="/authentication/" className="nav-link">Authentication</Link></li>
                {!user &&
                    <li className="nav-item"><Link href="/sign-in/" className="nav-link">Sign In</Link></li>
                }
                {user &&
                <>
                <li className="nav-item"><Link href="/orders/" className="nav-link">My Order</Link></li>
                <li className="nav-item"><Link href="/account/" className="nav-link">My Account</Link></li>
                    <li className="nav-item"><button onClick={signOut} className="nav-link">Sign Out</button></li>
                </>
                }
            </ul>
        </header>
    )
}

export default Header
