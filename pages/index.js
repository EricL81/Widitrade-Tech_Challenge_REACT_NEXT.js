import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss';
import logo from '../public/logo.png';
import LoginForm from '../components/LoginForm';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Widitrade Tech Challenge</title>
				<meta name='description' content='Widitrade Tech challenge for a Junior Frontend Developer position' />
				<meta name='author' content='Eric Lehmann' />
				<meta name='keywords' content='tech challenge, widitrade, junior, frontend developer, login' />
				<link rel='icon' href='/logo.png' />
			</Head>

			<main className={styles.main}>
				<div className={styles.logoWrapper}>
					<Image src={logo} alt='Widitrade Logo' width={115} height={82} />
				</div>
				<LoginForm />
			</main>
			<div className={styles.photoWrapper}></div>
		</div>
	);
}
