import Image from "next/image";
import generalStyles from "../../styles/General.module.css";
import styles from "../../styles/Team.module.css";

import KC from "../../public/images/team/Krasimira Chakarova.jpg";
import MF from "../../public/images/team/Meriem Fereva.jpg";
import DM from "../../public/images/team/Desislava Markova.jpg";
import TD from "../../public/images/team/Teodora Daskalova.jpg";
import AD from "../../public/images/team/Alexandra Daskalova.jpg";

import ED from "../../public/images/team/Elizabeth Dimitrova.jpg";
import GP from "../../public/images/team/Gabriela Petrova.jpg";
import IK from "../../public/images/team/Irina Kovacheva.jpg";
import KD from "../../public/images/team/Kaloyan Dimitrov.jpg";
import LK from "../../public/images/team/Lyudmila Kaneva.jpg";
import NS from "../../public/images/team/Nikoleta Stoynova.jpg";
import VS from "../../public/images/team/Vladislav Skrinski.jpg";
import YD from "../../public/images/team/Yana Dimitrova.jpg";
import YT from "../../public/images/team/Yoana Troeva.jpg";
import SI from "../../public/images/team/Svetoslav Ivanov.jpg";
import SN from "../../public/images/team/Stefani Naydenova.jpg";

import Person from "../../components/Person";

export const metadata = {
	title: "FISSION :: Team",
};

export default function Team() {
	return (
		<div className={generalStyles.content}>
			<h1>Team</h1>
			<hr />
			<div className={styles.leaderPhotos}>
				<Person
					name="Meriem Fereva"
					caption="Senior at the American College of Sofia"
					email="m.fereva24@acsbg.org"
					img={MF}
				/>
				<Person
					name="Desislava Markova"
					caption="Senior at the American College of Sofia"
					email="d.markova24@acsbg.org"
					img={DM}
				/>
				<Person
					name="Teodora Daskalova"
					caption="Senior at the American College of Sofia"
					email="t.daskalova24@acsbg.org"
					img={TD}
				/>
				<Person
					name="Alexandra Daskalova"
					caption="Senior at the American College of Sofia"
					email="a.daskalova24@acsbg.org"
					img={AD}
				/>
				<Person
					name="Krasimira Chakarova"
					caption="Teacher Sponsor"
					email="k.chakarova@acsbg.org"
					img={KC}
				/>
			</div>
			<div className={styles.photos}>
				<Image src={ED} alt="Elizabeth Dimitrova" />
				<Image src={IK} alt="Irina Kovacheva" />
				<Image src={KD} alt="Kaloyan Dimitrov" />
				<Image src={LK} alt="Lyudmila Kaneva" />
				<Image src={NS} alt="Nikoleta Stoynova" />
				<Image src={VS} alt="Vladislav Skrinski" />
				<Image src={YD} alt="Yana Dimitrova" />
				<Image src={YT} alt="Yoana Troeva" />
				<Image src={SN} alt="Stefani Naydenova" />
				<Image src="" alt="" />
				<Image src={SI} alt="Svetoslav Ivanov" />
				<Image src="" alt="" />
			</div>
		</div>
	);
}
