"use client";
import styles from './signup.module.scss';
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
import CountrySelect from "../components/countrySelect";
export default function SignUp(){
    const facebookLink = `https://m.facebook.com/privacy/consent_framework/prompt/?consent_flow_name=gdp&consent_entry_source=gdp_delegated&consent_extra_params%5Bapp_id%5D=192718330121667&consent_extra_params%5Bkid_directed_site%5D=false&consent_extra_params%5Blogger_id%5D=%22cde58459-e75c-42c1-aa65-03883854b330%22&consent_extra_params%5Bnext%5D=%22read%22&consent_extra_params%5Bredirect_uri%5D=%22https%3A%5C%2F%5C%2F${routes.auth.signin}%5C%2Foauth2%5C%2Fidpresponse%22&consent_extra_params%5Bresponse_type%5D=%22code%22&consent_extra_params%5Breturn_scopes%5D=false&consent_extra_params%5Bscope%5D=%5B%22public_profile%22%2C%22email%22%5D&consent_extra_params%5Bstate%5D=%22H4sIAAAAAAAAAFWRSXOjMBCF_4vOhgAyi33LBGNj48R7YqamXLIWdkSQwMvU_PcRhznMSa_r9dfd9fQbIDAFndAoElIzL918sp9_uZ8EjMBVOQHC9Mp5oUqsSmIm7XdVGrRK3Z7L4moksm1rQ9lE2amUjZi-vDQtZ1lJ9RsUOOW8FDrmleqhqgdzQpVk_w9PwPQn4A2ts2Ezug1EUmeS6yJTb613grY6IlVWg18jkCr6Zr9_-Id-54f2QqxmQfY2WxrRocDRMdiknaPmZMOSHw9YXZK8ibdESN94yP347BF8hz2Dvrubv0bR3PabfrtVRK6IvWUPcKHkwbPCOdssS2F5D_S8pJKvUPgaOuQLzRxUx6dtN7m90ybe3KnJHYeE3jrxPy-HsF4Y6RnXs0mAnVMItfXm-cbMdocj65G38nTOdx-nxSZZxseFSBJC2lycmLc1D_fq2cSeVtbnNAj3q6CPbLeksVfF66bgGbodP_L7ubt7TRdZaulsuagKT11cqotRJ9Mh90Zl-y_2CkxN14IQGtC0R6ABU4ZKQUfgWwG9aevD_7VKu5RB6thYs7GBtbHjWtrEZFfNYFfiWc4YsgkDf_4CMmXr-TQCAAA.H4sIAAAAAAAAAAEgAN__GXJRQpc0xWCznAAns53Nl5KXhjmpqnPeJpKHFpd7QavscH-OIAAAAA.4%22&consent_extra_params%5Bsteps%5D=%7B%22read%22%3A%5B%22public_profile%22%2C%22email%22%2C%22baseline%22%5D%7D&consent_extra_params%5Btp%5D=%22unspecified%22&consent_extra_params%5Bcui_gk%5D=%22%5BPASS%5D%3Alogin_platformization_read%22&consent_extra_params%5Bis_limited_login_shim%5D=false&wtsid=rdr_06KqCpIIdaH7MeFxv&_rdr`;
    const googleLink = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=398874333579-u9rrotjv4vu07ut6l3844d6mspcadqds.apps.googleusercontent.com&redirect_uri=https%3A%2F%2F${routes.auth.signin}%2Foauth2%2Fidpresponse&scope=profile%20email%20openid&response_type=code&state=H4sIAAAAAAAAAE1Q2ZKiMBT9lzyLHQKy-IZKIWK74QZTUxQJYWmBIAEdmZp_n_jQVf1076mz3FP3L4jBFPRcojHvJDnqHdN3rvolASOABeMwlpVUACJAImftvSohrXL9wbobhlnXtjUUdCLovOsaPv34aFqWFiUdPxVOcsZKPiasEhoqNIQl77T0Z3QGpr8Aa2hdvK_Gz7c-q4uOjXkhZj3uOW3HcVIVNfg9ArnwWk1GyBqR-DLkcKnj3S5Fs8p0w9kQbAMFi5xCyNpVeIqrTW77C7Q-u6v0nui9u57ojWs8PUfLV21zvDz5sAiE40s4fDTRxHoT68TQB1U9dZ_7-GxevfbYb-1-MuGL-lHhOdoz9TZ87iq6IdGsfB1Mvv2D4HCZe7Ucbo-Bc77ZofSwpNULfUW7ULnR4LzFlvMitevYR93yD-7Sm1l7DudLy3BarfAjtNGQ6p2hI3XEUk_4ItsbJdBenuFG9vUYaal8D02iE58pRrVZ7Q_RcrBF41I0jvsuf3-9iQn9fnoFprKOFEWBSFNHoAHTNC45HYFWGGQZ40SViWSmBpZU3SRSTBGUCEGGoSQQGwiCf_8BfBM0fSQCAAA.H4sIAAAAAAAAANMLzrOakbjBd8qny_3_NCQKWQ3YeEqKUzZ4RnNISbjyzgMAjXtqBSAAAAA.4&access_type=offline&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow`;
    return(
    <>
    <div className="row">
        <div className="col-xs-12 col-lg-6 p-1 p-sm-2 p-md-3 p-lg-5">
            <div className="p-5">
                <div className="text-start mb-5">
                    <p className="h2 my-3 mb-5"><b>Create Your FREE Account</b></p>
                    <p className="h6">Have an account? <Link href={routes.auth.signin.index} className={styles.dontHaveAcctlink}>Sign in</Link></p>
                </div>
                <div>
                    <div className='mb-5'>
                        <p className="h4"><b>Register as an Ambassador</b></p>
                    </div>
                    <form action="submit" method="get">
                        <div className="mb-5">
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
                                <label htmlFor="agreement">I agree to Language Academy <Link href={routes.auth.signup.agreement.terms} className="text-primary">Terms</Link> and <Link href={routes.auth.signup.agreement.conditions} className="text-primary">Conditions</Link></label>
                            </div>
                            <div>
                                <button type="submit" className={`btn btn-primary ${styles.btn}`}>Sign Up</button>
                            </div>
                        </div>
                        <div className="d-flex row">
                            <div className="col-5">
                                <hr className="mb-5" />
                                <Link href={`${googleLink}`} className={`d-flex justify-content-around ${styles.btn}`}><Image src="/google.svg" alt="google image" width={50} height={50} className='p-2'/></Link>
                            </div>
                            <div className="col-2 d-flex justify-content-center">
                                <p>Or</p>
                            </div>
                            <div className="col-5">
                                <hr className="mb-5" />
                                <Link href={`${facebookLink}`} className={`d-flex justify-content-around ${styles.btn}`}> <Image src="/facebook.svg" alt="facebook image" style={{ color: 'blue', fontSize: '24px' }} width={50} height={50} className={`${styles.bgWhite} ${styles.br50} p-2`}/></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className={`d-none d-lg-flex col-lg-6 p-1 p-sm-2 p-md-3 p-lg-5 text-center justify-content-center ${styles.bgImage}`}>
            <div className='d-flex flex-column justify-content-between align-content-center'>
                <div className='mt-5 pt-5'>
                    <p className='fs-1 fw-semibold pt-5'>&quot;The Best way <br /> to Earn is to <br />Learn&quot;</p>
                </div>
                <div className='p-1 p-sm-2 p-md-3 p-lg-4'>
                    <p className='fs-5 pb-5'>Language Acedemy</p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}