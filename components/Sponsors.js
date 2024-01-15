import ABF from "../public/images/ABF.png";
import NBU from "../public/images/nbu.png";
import DonateOrBecomeSponsorButton from "./DonateOrBecomeSponsorButton";
import styles from "../styles/Sponsors.module.css";
import SupporterLogo from "./SupporterLogo";
import AAE from "../public/images/AAE/logo.png";
import Siemens from "../public/images/siemens.png";
import BGNauka from "../public/images/BGNauka.png";
import Danibon from "../public/images/danibon.png";
// import DSK from "../public/images/dsk.png";
import Telerik from "../public/images/telerik.png";
import MediaBricksBG from "../public/images/mediabricksbg.png";
// import ACS from "../public/images/acs.png";

export default function Sponsors() {
	return (
		<>
			<h2>Official Partners</h2>
			<div className={styles.container}>
				<SupporterLogo img={ABF} alt="America for Bulgaria" important />
				<SupporterLogo img={NBU} alt="New Bulgarian University" />
				<SupporterLogo img={Siemens} alt="Siemens" />
			</div>
			<hr />
			{/*<h2>Sponsor</h2>
			<div className={styles.container}>
				<SupporterLogo img={DSK} alt="DSK Bank" />
			</div>
			<hr />*/}
			<h2>Donator</h2>
			<div className={styles.container}>
				<SupporterLogo img={AAE} alt="AAE" />
			</div>
			<h2>Media Partners</h2>
			<div className={styles.container}>
				<SupporterLogo img={BGNauka} alt="BG Nauka" />
				<SupporterLogo img={Danibon} alt="Danibon" />
				<SupporterLogo img={MediaBricksBG} alt="MediaBricks" />
				<SupporterLogo img={Telerik} alt="Telerik" />
				<DonateOrBecomeSponsorButton />
			</div>
			<p style={{ textAlign: "center" }}>
				Fission 2023 is brought to you with the support of the Central
				Fund Of Strategic Development of NBU&apos;s board of trustees.
			</p>
			{/*<div className={styles.container}>
				<SupporterLogo img={ACS} />
			</div>*/}
		</>
	);
}
