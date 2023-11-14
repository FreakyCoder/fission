import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "../styles/PageWrapper.module.css";

export default function PageWrapper({ children }) {
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<section className={styles.content}>
					{children}
					<Footer />
				</section>
			</main>
		</div>
	);
}
