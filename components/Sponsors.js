import NBU from "../components/NBU";
import DonateOrBecomeSponsorButton from "./DonateOrBecomeSponsorButton";
import styles from "../styles/Sponsors.module.css";
import SupporterLogo from "./SupporterLogo";
import AAE from "../public/images/AAE/logo.png";
import BGNauka from "../public/images/BGNauka.png";
import Danibon from "../public/images/danibon.png";
import MediaBricksBG from "../public/images/mediabricksbg.png";

export default function Sponsors() {
	return (
		<>
			<h2>Official Partner</h2>
			<NBU />
			<h3>
				<i>
					Fission 2022 is brought to you with the support of the
					Central Fund Of Strategic Development of NBU&apos;s board of
					trustees.
				</i>
			</h3>
			<hr />
			<h2>Event Media Partners</h2>
			<div className={styles.mediaPartners}>
				<SupporterLogo img={BGNauka} />
				<SupporterLogo img={Danibon} />
				<SupporterLogo img={MediaBricksBG} />
			</div>
			<hr />
			<h2>Donations</h2>
			<div className={styles.container}>
				<SupporterLogo img={AAE} />
				<DonateOrBecomeSponsorButton />
			</div>
		</>
	);
}
