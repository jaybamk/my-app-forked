import styles from "@/app/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>My Next.js App</div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>John</td><td>25</td>
        </tr>
      </table>
      <div style={{ width: 200, height: 200 }}> djkfdjkdfkfd</div>

    </main>
  );
}
