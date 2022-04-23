import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
	const [spinner, setSpinner] = useState(true);
	return (
		<>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.side}>
					<h1>Sign Up for</h1>
					<span className={styles.fission}>
						<Logo />
						<b className={styles.title}>FISSION</b>
					</span>
				</div>
				<section className={styles.form}>
					{spinner && (
						<span className={styles.spinner}>
							<span className={styles.loader}></span>
						</span>
					)}
					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSdsaYDRkoBzpWnSYTwyC1DFaOCJZNSzZxgTEtw6ig-rlVxZNA/viewform?usp=sf_link"
						onLoad={() => setSpinner(false)}
					/>
				</section>
			</main>
			<Footer />
		</>
	);
}
