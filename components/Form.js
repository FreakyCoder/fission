"use client";
import { useState } from "react";
import styles from "../styles/Form.module.css";

export default function Form() {
	const [spinner, setSpinner] = useState(true);
	return (
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
	);
}
