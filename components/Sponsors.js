import AAE from "./AAE";
import DonateOrBecomeSponsorButton from "./DonateOrBecomeSponsorButton";
import styles from "../styles/Sponsors.module.css";

export default function Sponsors() {
	return (
		<div className={styles.container}>
			<AAE />
			<DonateOrBecomeSponsorButton />
		</div>
	);
}
