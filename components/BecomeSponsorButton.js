import styles from "../styles/BecomeSponsorButton.module.css";
import Link from "next/link";

export default function BecomeSponsorButton() {
	return (
		<Link href="/sponsors" passHref className={styles.container}>
			<div className={styles.flex}>
				<button className={styles.link}>Become a sponsor</button>
			</div>
		</Link>
	);
}
