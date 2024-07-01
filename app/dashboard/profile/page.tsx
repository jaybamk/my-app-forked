import styles from "@/app/page.module.scss";

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruits.entries();
const newArr = fruits.findLastIndex((value, index, arr) => {
    // newArr.push(value)
    console.log(value, index)


    return value.charAt(1) === "a"
    return `${value} has index ${index}`
})
console.log(newArr)

export default function Profile() {
    const isLoggedIn = true;

    return <>
        <div className={!isLoggedIn ? styles.loggedOut : styles.loggedIn}>
            {isLoggedIn ? <AdminPanel /> : <LoginForm />}
        </div>
    </>
}

function AdminPanel() {
    return (
        <div>
            <h1>Admin Panel</h1>
        </div>
    );
}

function LoginForm() {
    return (
        <div>
            <h1>Login form</h1>
        </div>
    );
}