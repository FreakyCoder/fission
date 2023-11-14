import NavBar from "./NavBar";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "../styles/PageWrapper.module.css";

export default function PageWrapper({ text, children }) {
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<section className={styles.side}>
					<h1>{text}</h1>
					<span className={styles.fission}>
						<span className={styles.logo}>
							<Logo />
						</span>
						<b>FISSION</b>
					</span>
				</section>
				<section className={styles.content}>
					{children}
					<Footer />
				</section>
			</main>
		</div>
	);
}
