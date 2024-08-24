"use client";
import ResetIcon from "@/app/auth/components/ResetIcon";
import Image from "next/image";
import styles from './reset.module.scss';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function Reset() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Theme, setTheme] = useState("dark");

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateChange = () => {
            if (darkModeMediaQuery.matches) {
                setTheme("dark");
            } else {
                setTheme("white");
            }
        };

        updateChange(); // Set initial Change based on current preference
        darkModeMediaQuery.addEventListener('change', updateChange); // Listen for changes

        return () => {
            darkModeMediaQuery.removeEventListener('change', updateChange); // Cleanup listener on unmount
        };
    }, []);
    return (
        <>
            <div className={`${styles.link} mb-3`} onClick={handleShow}>
                Forget password?
            </div>

            <Modal show={show} onHide={handleClose} data-bs-theme={Theme} className="text-center">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-around align-content-center p-2 p-md-3 p-lg-5">
                        <div>
                            <div><ResetIcon className="" /></div>
                            <div>
                                <p className="fs-2">Password Reset</p>
                                <p>Enter your Email and click on the link provided<br />or write the code here</p>
                            </div>
                            <div>
                                <div className="input-group mb-5 border-primary">
                                    <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                        <Image src="/emailIcon.svg" width={30} height={30} alt="password Icon" />
                                    </span>
                                    <input type="email" className={`${styles.input} form-control border-primary text-lg-center`} id="Email" name="Email" placeholder="johnkentacad@gmail.com" aria-label="Email address" required autoFocus />
                                </div>
                                <div className="">
                                    <button className={`btn btn-primary ${styles.btn}`} onClick={handleShow}>Enter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}
