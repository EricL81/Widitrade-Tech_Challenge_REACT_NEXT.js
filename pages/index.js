import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/logo.png";
import LoginForm from "../components/LoginForm";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Widitrade Tech Challenge</title>
				<meta name="description" content="Widitrade Tech challenge for a Junior Frontend Developer position" />
				<meta name="author" content="Eric Lehmann" />
				<meta name="keywords" content="tech challenge, widitrade, junior, frontend developer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Image src={logo} alt="Widitrade Logo" width={115} height={82} />
				<LoginForm />
			</main>
		</div>
	);
}
