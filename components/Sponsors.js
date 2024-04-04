import ABF from "../public/images/ABF.png";
import NBU from "../public/images/nbu.png";
import DonateOrBecomeSponsorButton from "./DonateOrBecomeSponsorButton";
import styles from "../styles/Sponsors.module.css";
import SupporterLogo from "./SupporterLogo";
// import AAE from "../public/images/AAE/logo.png";
import Siemens from "../public/images/siemens.png";
import Bosch from "../public/images/Bosch.png";
import DigitalLights from "../public/images/DigitalLights.png";
import TukTam from "../public/images/TukTam.png";
import BGNauka from "../public/images/BGNauka.png";
import Danibon from "../public/images/danibon.png";
// import Focus from "../public/images/Focus.svg";
import Smokinya from "../public/images/Smokinya.png";
import Obekti from "../public/images/Obekti.jpg";
import DevStyleR from "../public/images/DevStyleR.png";
import Uchi from "../public/images/Uchi.png";
import Focus from "../public/images/Focus.png";
import Kafene from "../public/images/Kafene.png";
import Puzl from "../public/images/Puzl.png";
import PixelMedia from "../public/images/PixelMedia.gif";
// import DSK from "../public/images/dsk.png";
// import Telerik from "../public/images/telerik.png";
// import MediaBricksBG from "../public/images/mediabricksbg.png";
// import ACS from "../public/images/acs.png";

export default function Sponsors() {
	return (
		<>
			<h2>Official Partners</h2>
			<div className={styles.container}>
				<SupporterLogo img={NBU} alt="New Bulgarian University" />
				<SupporterLogo img={ABF} alt="America for Bulgaria" important />
				<SupporterLogo img={Siemens} alt="Siemens" />
			</div>
			<hr />
			<h2>Sponsor</h2>
			<div className={styles.container}>
				<SupporterLogo img={Bosch} alt="Bosch" />
				<SupporterLogo img={DigitalLights} alt="Digital Lights" />
			</div>
			<hr />
			<h2>Media Partners</h2>
			<div className={styles.container}>
				<SupporterLogo img={BGNauka} alt="BG Nauka" />
				<SupporterLogo img={Danibon} alt="Danibon" />
				<SupporterLogo img={Obekti} alt="Obekti" />
				<SupporterLogo img={Smokinya} alt="Smokinya" />
				<SupporterLogo img={DevStyleR} alt="DevStyleR" />
				<SupporterLogo img={Kafene} alt="Kafene" />
				<SupporterLogo img={Uchi} alt="Uchi" />
				<SupporterLogo img={PixelMedia} alt="PixelMedia" />
				<SupporterLogo img={Focus} alt="Focus" />
				<SupporterLogo img={TukTam} alt="TukTam" />
				{/* <SupporterLogo img={MediaBricksBG} alt="MediaBricks" /> */}
				{/* <SupporterLogo img={Telerik} alt="Telerik" /> */}
			</div>
			<DonateOrBecomeSponsorButton />
			<p style={{ textAlign: "center" }}>
				Fission 2024 is brought to you with the support of the Central
				Fund Of Strategic Development of NBU&apos;s board of trustees.
			</p>
			{/*<div className={styles.container}>
				<SupporterLogo img={ACS} />
			</div>*/}
		</>
	);
}
