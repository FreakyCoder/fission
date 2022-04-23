import NavBar from "./NavBar";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "../styles/PageWrapper.module.css";

export default function PageWrapper({ text, children }) {
	return (
		<>
			<NavBar />
			<main className={styles.main}>
				<section className={styles.side}>
					<h1>{text}</h1>
					<span className={styles.fission}>
						<Logo />
						<b className={styles.title}>FISSION</b>
					</span>
				</section>
				<section className={styles.content}>{children}</section>
			</main>
			<Footer />
		</>
	);
}
