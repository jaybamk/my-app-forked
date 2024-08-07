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
    <div className="row">
    <div className="d-none d-lg-flex col-lg-5 bg-primary justify-content-around">
        <Image src="/signin-img.svg" alt="signin image" width={400} height={700}/>
    </div>
    <div className="col-xs-12 col-lg-7 p-5 pt-3 pb-3">
        <Link href="/" >
            <Image src={logo} alt="logo" width={120} height={45} className="float-end my-5"/>
        </Link>
        <div className="p-5">
            <div className="text-start mb-5">
                <p className="h2 my-3">Welcome Back</p>
                <p className="h6">Don't have an account? <Link href={routes.auth.signup} className={styles.dontHaveAcctlink}>Sign up</Link></p>
            </div>
        <div>
        <div className="d-none d-md-flex row mb-5">
            <div className="col-md-5">
                <Link href="" className={`btn ${styles.btn} ${styles.btnGoogle} btn-light border-dark mb-5`}>Sign in with Google</Link>
                <hr />
            </div>
            <div className={`${styles.socialDivide} col-md-2`}>
                <p>Or</p>
            </div>
            <div className="col-md-5">
                <Link href="" className={`btn ${styles.btn} ${styles.btnFacebook} text-white mb-5`}>Sign in with Facebook</Link>
                <hr />
            </div>
        </div>
        <div className="mb-5">
            <form action="submit" method="get">
                <label htmlFor="Email" className="d-block">Email address</label>
                <div className="input-group mb-5 border-primary">
                    <span className={`input-group-text ${styles.inputText} border-primary`} id="basic-addon1">
                        <i className="bi bi-envelope"></i>
                    </span>
                    <input type="email" className={`${styles.input} form-control border-primary`} id="Email" name="Email" placeholder="johnkentacad@gmail.com" aria-label="Email address" required/>
                </div>
                <label htmlFor="Password" className="d-block">Password</label>
                <div className="input-group mb-5">
                    <span className={`input-group-text ${styles.inputText} border-primary`} id="basic-addon1">
                        <i className="bi bi-lock"></i>
                    </span>
                    <input type="password" className={`${styles.input} form-control border-primary`} id="Password" placeholder="*******************" aria-label="Password" required/>
                </div>   
                <div className="mb-4">
                    <Link href={routes.auth.password.index}>Forget password?</Link>
                </div>
                <div className="">
                    <button type="submit" className={`btn btn-primary ${styles.btn}`}>Sign in</button>
                </div>
            </form>
        </div>
        <div className="d-flex d-md-none row mb-5">
            <div className="col-5">
                <hr className="mb-5" />
                <Link href="" className={`btn ${styles.btn} ${styles.btnGoogle} btn-light border-dark`}>Sign in with Google</Link>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <p>Or</p>
            </div>
            <div className="col-5">
                <hr className="mb-5" />
                <Link href="" className={`btn ${styles.btn} ${styles.btnFacebook} text-white`}>Sign in with Facebook</Link>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
    );
}