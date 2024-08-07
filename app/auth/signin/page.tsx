import Header from "@/components/Header";
import Footer from"@/components/Footer";
import styles from './signIn.module.scss';
import logo from "@/img/logo.png";
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
export default function SignIn(){
    return(
    <>
    <div className="row d-flex justify-content-center mb-3">
    <div className="d-none d-lg-block col-lg-5 bg-primary">
        <Image src="/signin-img.svg" alt="signin image" width={400} height={700}/>
    </div>
    <div className="col-xs-12 col-lg-7 mb-3 text-center">
        <div className="d-flex justify-content-around mb-3 py-5">
            <div className="text-start">
                <p className="h2 mb-3">Welcome Back</p>
                <p className="h6">Don't have an account? <Link href={routes.auth.signup} className={styles.dontHaveAcctlink}>Sign up</Link></p>
            </div>
            <div>
                <Link href="/">
                    <Image src={logo} alt="logo" width={120} height={45} />
                </Link>
            </div>
        </div>
        <div>
        <div className="d-flex justify-content-around">
            <div>
                <Link href="" className="btn btn-light">Sign in with Google</Link>
                <hr />
            </div>
            <div>
                <Link href="" className="btn btn-info">Sign in with Facebook</Link>
                <hr />
            </div>
        </div>
        <div>
            <form action="submit" method="get">
                <label htmlFor="Email" className="d-block">Email address</label>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="email" className="form-control" id="Email" name="Email" placeholder="Email address" aria-label="Email address" required/>
                </div>
                <label htmlFor="Password" className="d-block">Password</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="password" className="form-control" id="Password" placeholder="Password" aria-label="Password" required/>
                </div>   
                <div className="mb-3">
                    <Link href={routes.auth.password.index}>Forget password?</Link>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
    );
}