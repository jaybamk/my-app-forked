'use client';
import { useState } from 'react';
import styles from './Button.module.scss';
const Button = ({ counted, size }: { counted: number, size: 'small' | 'large' }) => {
    const [count, setCount] = useState<number>(0)
    const [counter, setCounter] = useState<number>(() => 0)

    let anyNumber = 10;

    const handleClick = () => {
        const newCount = ((oldCount: number) => oldCount + 1)(count)
        setCount(newCount);
        anyNumber = newCount
        console.log(`anyNumber: ${anyNumber}`, `clicked ${newCount} time${newCount > 1 ? 's' : ''}`)
    }

    console.log(`counted:${counted},size: ${size}`, `anyNumber: ${anyNumber}`, `clicked ${count} time${count > 1 ? 's' : ''}`)
    return <button className={`${styles.btn} px-4  py-2`} onClick={handleClick}>{count ? `Clicked ${count} time${count > 1 ? 's' : ''}` : 'Click me!'}</button>

}


export default Button