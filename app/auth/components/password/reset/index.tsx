import ChangeIcon from "@/components/ChangeIcon";
import Image from "next/image";
import styles from './reset.module.scss';
export default function Reset(){
    return(
        <>
            <div className="d-flex justify-content-around align-content-center p-5">
                <div>
                    <div><ChangeIcon className="" /></div>
                    <div>
                        <p className="fs-1">Password Reset</p>
                        <p>Enter your Email and click on the link provided<br/>or write the code here</p>
                    </div>
                    <div>
                        <div className="input-group mb-5 border-primary">
                            <span className={`input-group-text ${styles.inputText} border-primary w-25`} id="basic-addon1">
                                <Image src="/emailIcon.svg" width={30} height={30} alt="password Icon"/>
                            </span>
                            <input type="email" className={`${styles.input} form-control border-primary text-lg-center`} id="Email" name="Email" placeholder="johnkentacad@gmail.com" aria-label="Email address" required/>
                        </div>
                        <div className="">
                              <button type="submit" className={`btn btn-primary ${styles.btn}`}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}