import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
	const [spinner, setSpinner] = useState(true);
	return (
		<PageWrapper text="Sign up for">
			{spinner && (
				<span className={styles.spinner}>
					<span className={styles.loader}></span>
				</span>
			)}
			<iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSdsaYDRkoBzpWnSYTwyC1DFaOCJZNSzZxgTEtw6ig-rlVxZNA/viewform?usp=sf_link"
				onLoad={() => setSpinner(false)}
			/>
		</PageWrapper>
	);
}
