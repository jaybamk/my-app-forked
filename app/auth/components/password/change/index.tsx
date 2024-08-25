"use client";
import ChangeIcon from "@/app/auth/components/ChangeIcon";
import Image from "next/image";
import styles from './change.module.scss';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Change(){
    const validationSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters')
          .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
          .matches(/[0-9]/, 'Password must contain at least one number')
          .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password')], 'Passwords must match'),
      });
    
      const formOptions = { resolver: yupResolver(validationSchema) };
      const { register, handleSubmit, formState: { errors }, watch } = useForm(formOptions);
    
      const onSubmit = (data:any) => {
        console.log(data);
      };
    
      const password = watch('password');
      const alertMessage:any =()=>{
        if (password !== watch('confirmPassword')) {
            console.log('Passwords do not match');
      }}

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

    return(
        <>
        <Modal show={show} onHide={handleClose} data-bs-theme={Theme} className="text-center">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-around align-content-center p-2 p-md-3 p-lg-5">
                    <div>
                        <div><ChangeIcon className="" /></div>
                        <div>
                            <p className="fs-2">Password Change</p>
                            <p>Enter new password and re-type it</p>
                        </div>
                        <div>
                            <form action="submit" method="get" onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group mb-3">
                                    <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                        <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon"/>
                                    </span>
                                    <input type="password" className={`${styles.input} form-control border-primary`} id="EnterPassword" placeholder="" aria-label="Enter Password" {...register('password')} required onFocus={handleSubmit(onSubmit)}/>
                                </div>   
                                <div className='text-primary'>{errors.password && <p>{errors.password.message}</p>}</div>
                                <div className="input-group mb-3">
                                    <span className={`input-group-text inputText d-flex justify-content-center align-items-center border-primary w-25 `} id="basic-addon1">
                                        <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon"/>
                                    </span>
                                    <input type="password" className={`${styles.input} form-control border-primary`} id="confirmPassword" placeholder="" aria-label="Confirm Password"{...register('confirmPassword')} onBlur={alertMessage} required/>
                                </div>
                                <div className='text-primary'>{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}</div>
                                <div>
                                    <button disabled={true} type="submit" className={`btn btn-primary ${styles.btn}`}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </Modal.Body>
        </Modal>
            
        </>
    )
}
