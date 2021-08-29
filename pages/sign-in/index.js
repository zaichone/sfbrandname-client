import Link from 'next/link';

function SignIn() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 px-5 py-5 d-flex flex-column justify-content-between">
                    <h1 className="page-title">Sign In</h1>
                    <form>
                        <div className="mb-5">

                            <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-5">

                            <input type="password" className="form-control form-control-lg " id="password" placeholder="Password" />
                        </div>
                        <div className="mb-5">
                            <div className="row">
                            <div className="form-check col-6">
                                <input className="form-check-input" type="checkbox" value="" id="keepMeSignedIn" checked />
                                <label className="form-check-label" htmlFor="keepMeSignedIn">
                                    Keep me signed in
                                </label>
                            </div>

                            <div className="col-6">
                            <p className="forget-password-text text-end"><Link href="/forget-password/">Forget Password</Link></p>
                            </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="mb-3">Login</button>
                        </div>
                    </form>
                    <p className="register-text text-center"><Link href="/register/">Don’t have acount, Register here.</Link></p>
                </div>
                <div className="col-8 p-0">
                    <div className="register-cover"></div>
                </div>
            </div>
        </div >
    )
}

export default SignIn
