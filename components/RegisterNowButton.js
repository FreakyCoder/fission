import styles from "../styles/RegisterNowButton.module.css";
import Link from "next/link";

export default function RegisterNowButton() {
	return (
		<Link href="/signup" passHref className={styles.container}>
			<div className={styles.flex}>
				<button className={styles.link}>Register Now</button>
			</div>
		</Link>
	);
}
