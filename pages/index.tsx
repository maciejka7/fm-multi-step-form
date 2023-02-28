import Head from 'next/head';
import { Switcher } from '../src/components';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        components:
        <Switcher />
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;
          <b>next.new</b>
&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
