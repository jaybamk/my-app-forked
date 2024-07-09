'use client';
import styles from './Button.module.scss';
const Button = ({ count, counted, setCount, size }: { count: number, counted: number, setCount: (newCount: number) => void, size: 'small' | 'large' }) => {
    let anyNumber = 10;
    if (anyNumber === 11) { return <button>button</button> }

    const handleClick = () => {
        const newCount = ((oldCount: number) => oldCount + 1)(count)
        setCount(newCount);
        anyNumber = newCount
        console.log(`anyNumber: ${anyNumber}`, `clicked ${newCount} time${newCount > 1 ? 's' : ''}`)
    }

    console.log(`counted:${counted},size: ${size}`, `anyNumber: ${anyNumber}`, `clicked ${count} time${count > 1 ? 's' : ''}`)
    return <button className={`${styles.btn} px-4  py-2`} onClick={handleClick}>{count ? ` size,${size} with counted ${counted} is clicked ${count} time${count > 1 ? 's' : ''}` : 'Click me!'}</button>

}


export default Button