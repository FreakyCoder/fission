import styles from "../styles/DonateOrBecomeSponsorButton.module.css";
import Link from "next/link";

export default function DonateOrBecomeSponsorButton() {
	return (
		<Link href="/sponsors" passHref className={styles.container}>
			<div className={styles.flex}>
				<button className={styles.link}>
					Donate or become a sponsor
				</button>
			</div>
		</Link>
	);
}
