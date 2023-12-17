import { useState } from "react";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
	const [spinner, setSpinner] = useState(true);
	return (
		<PageWrapper text="Sign up for">
			<Head>
				<title>FISSION :: Sign Up</title>
			</Head>
			<div className={styles.container}>
				{spinner && (
					<>
						<a href="https://forms.gle/NkmAT3kBimDeJPNw6">
							If the form does&apos;t load, click here
						</a>
						<span className={styles.spinner}>
							<span className={styles.loader}></span>
						</span>
					</>
				)}
				<iframe
					src="https://forms.gle/NkmAT3kBimDeJPNw6"
					className={styles.frame}
					onLoad={() => setSpinner(false)}
				/>
			</div>
		</PageWrapper>
	);
}
