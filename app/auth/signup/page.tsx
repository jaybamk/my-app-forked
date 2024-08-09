import styles from './signup.module.scss';
import logo from "@/img/logo.png";
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
export default function SignUp(){
    return(
    <>
    <div className="row">
        <div className="col-xs-12 col-lg-7 p-5 pt-3 pb-3">
            <div className="p-5">
                <div className="text-start mb-5">
                    <p className="h2 my-3 mb-5"><b>Create Your FREE Account</b></p>
                    <p className="h6">Have an account? <Link href={routes.auth.signin} className={styles.dontHaveAcctlink}>Sign in</Link></p>
                </div>
                <div>
                    <div className='mb-5'>
                        <p className="h4"><b>Register as an Ambassador</b></p>
                    </div>
                    <div className="mb-5">
                        <form action="submit" method="get">
                            <label htmlFor="Email" className="d-block">Email address</label>
                            <div className="input-group mb-5 border-primary">
                                <input type="email" className={`${styles.input} form-control border-primary`} id="Email" name="Email" placeholder="johnkentacad@gmail.com" aria-label="Email address" required/>
                            </div>
                            <label htmlFor="Password" className="d-block">Password</label>
                            <div className="input-group mb-5">
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
        <div className="d-none d-lg-flex col-lg-5 bg-secondary justify-content-around">
            <h2>&quot;The Best way <br /> to Earn is to <br />Learn&quot;</h2>
        </div>
    </div>
    </>
    );
}