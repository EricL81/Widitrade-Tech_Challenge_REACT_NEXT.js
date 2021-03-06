import Head from 'next/head';
import React from 'react';
import styles from '../styles/pages/newPage.module.scss';

const newPage = () => {
	return (
		<div>
			<Head>
				<title>Widitrade New Page</title>
				<meta name='description' content='' />
				<meta name='author' content='Eric Lehmann' />
				<meta name='keywords' content='tech challenge, widitrade, junior, frontend developer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.newPage}>Widitrade New Page</div>
		</div>
	);
};

export default newPage;
