import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/PageWrapper.module.css";

export default function PageWrapper({ children }) {
	return (
		<>
			<html lang="en">
				<head>
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="/favicons/apple-touch-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href="/favicons/apple-touch-icon-60x60.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="/favicons/apple-touch-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/favicons/apple-touch-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="/favicons/apple-touch-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="/favicons/apple-touch-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="/favicons/apple-touch-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/favicons/apple-touch-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicons/apple-touch-icon-180x180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="194x194"
						href="/favicons/favicon-194x194.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/favicons/android-chrome-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicons/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/favicons/safari-pinned-tab.svg"
						color="#7f0080"
					/>
					<link rel="shortcut icon" href="/favicons/favicon.ico" />
					<meta name="apple-mobile-web-app-title" content="FISSION" />
					<meta name="application-name" content="FISSION" />
					<meta name="msapplication-TileColor" content="#9f00a7" />
					<meta
						name="msapplication-TileImage"
						content="/favicons/mstile-144x144.png"
					/>
					<meta
						name="msapplication-config"
						content="/favicons/browserconfig.xml"
					/>
					<meta name="theme-color" content="#7f0080" />
				</head>
				<body>
					<div className={styles.container}>
						<NavBar />
						<main className={styles.main}>
							<section className={styles.content}>
								{children}
								<Footer />
							</section>
						</main>
					</div>
				</body>
			</html>
		</>
	);
}
