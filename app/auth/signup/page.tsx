"use client";
import styles from './signup.module.scss';
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
import CountrySelect from "./countrySelect/index"
export default function SignUp(){
    return(
    <>
    <div className="row">
        <div className="col-xs-12 col-lg-7 p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5">
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
                            <label htmlFor="FullName" className="d-block">Full Name</label>
                            <div className="input-group mb-3 border-primary">
                                <input type="text" className={`${styles.input} form-control border-primary`} id="FullName" name="FullName" placeholder="" aria-label="Full Name" required/>
                            </div>
                            <label htmlFor="Email" className="d-block">Email address</label>
                            <div className="input-group mb-3 border-primary">
                                <input type="email" className={`${styles.input} form-control border-primary`} id="Email" name="Email" placeholder="" aria-label="Email address" required/>
                            </div>
                            <label htmlFor="EnterPassword" className="d-block">Enter Password</label>
                            <div className="input-group mb-3">
                                <input type="password" className={`${styles.input} form-control border-primary`} id="EnterPassword" placeholder="" aria-label="Enter Password" required/>
                            </div>   
                            <label htmlFor="confirmPassword" className="d-block">Confirm Password</label>
                            <div className="input-group mb-3">
                                <input type="password" className={`${styles.input} form-control border-primary`} id="confirmPassword" placeholder="" aria-label="Confirm Password" required/>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label htmlFor="dateOfBirth" className="d-block">Date of Birth</label>
                                    <div className="input-group mb-3">
                                        <input type="date" className={`${styles.input} form-control border-primary`} id="dateOfBirth" aria-label="date of birth"/>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="sex" className="d-block">Sex</label>
                                    <div className="input-group mb-3">
                                        <select className={`${styles.input} form-control border-primary`} id="sex">
                                            <option value=""></option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="transgender">Transgender</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label htmlFor="phoneNumber" className="d-block">Phone Number</label>
                                    <div className="input-group mb-3">
                                        <input type="number" className={`${styles.input} form-control border-primary`} id="phoneNumber" aria-label="phone number"/>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="country" className="d-block">Country</label>
                                    <div className="input-group mb-3">
                                        <CountrySelect/>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-3 d-flex align-items-center'>
                                <input type="checkbox" name="agreement" id="agreement" className='align-self-start m-3' required/>
                                <label htmlFor="agreement">I agree to Language Academy <Link href={routes.agreement.terms} className="text-primary">Terms</Link> and <Link href={routes.agreement.conditions} className="text-primary">Conditions</Link></label>
                            </div>
                            <div>
                                <button type="submit" className={`btn btn-primary ${styles.btn}`}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex row mb-5">
                        <div className="col-5">
                            <hr className="mb-5" />
                            <Link href="" className={`d-flex justify-content-around ${styles.btn}`}><Image src="/google.svg" alt="google image" width={40} height={40}/></Link>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <p>Or</p>
                        </div>
                        <div className="col-5">
                            <hr className="mb-5" />
                            <Link href="" className={`d-flex justify-content-around ${styles.btn}`}> <Image src="/facebook.svg" alt="facebook image" width={40} height={40}/></Link>
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