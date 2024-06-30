import styles from "@/app/page.module.scss";

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