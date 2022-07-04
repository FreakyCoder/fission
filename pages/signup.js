import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
	const [spinner, setSpinner] = useState(true);
	return (
		<PageWrapper text="Sign up for">
			<div className={styles.container}>
				{spinner && (
					<span className={styles.spinner}>
						<span className={styles.loader}></span>
					</span>
				)}
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSdsaYDRkoBzpWnSYTwyC1DFaOCJZNSzZxgTEtw6ig-rlVxZNA/viewform?usp=sf_link"
					className={styles.frame}
					onLoad={() => setSpinner(false)}
				/>
			</div>
		</PageWrapper>
	);
}
