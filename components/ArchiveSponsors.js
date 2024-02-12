import ABF from "../public/images/ABF.png";
import NBU from "../public/images/nbu.png";
import styles from "../styles/Sponsors.module.css";
import SupporterLogo from "./SupporterLogo";
import AAE from "../public/images/AAE/logo.png";
import BGNauka from "../public/images/BGNauka.png";
import Danibon from "../public/images/danibon.png";
import DSK from "../public/images/dsk.png";
import Telerik from "../public/images/telerik.png";
import MediaBricksBG from "../public/images/mediabricksbg.png";
import ACS from "../public/images/acs.png";

export default function Sponsors() {
	return (
		<>
			<div className={styles.container}>
				<SupporterLogo
					img={ABF}
					alt="America for Bulgaria"
					archive
					important
				/>
				<SupporterLogo img={NBU} alt="New Bulgarian University" />
				<SupporterLogo img={DSK} alt="DSK Bank" />
				<SupporterLogo img={AAE} alt="AAE" />
				<SupporterLogo img={BGNauka} alt="BG Nauka" />
				<SupporterLogo img={Danibon} alt="Danibon" />
				<SupporterLogo img={MediaBricksBG} alt="MediaBricks" />
				<SupporterLogo img={Telerik} alt="Telerik" />
				<SupporterLogo img={ACS} alt="American College of Sofia" />
			</div>
		</>
	);
}
