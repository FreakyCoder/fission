import Head from "next/head";
import Image from "next/future/image";
import PageWrapper from "../components/PageWrapper";
import generalStyles from "../styles/General.module.css";
import styles from "../styles/Team.module.css";

import Teodora from "../public/images/team/Teodora.jpg";
import Dani from "../public/images/team/Dani.jpg";
import Martin from "../public/images/team/Martin.jpg";
import KC from "../public/images/team/KC.jpg";
import Kaloyan from "../public/images/team/Kaloyan.jpg";
import Ali from "../public/images/team/Ali.jpg";
import Alii from "../public/images/team/Alii.jpg";
import Elizabeth from "../public/images/team/Elizabeth.jpg";
import Vladi from "../public/images/team/Vladi.jpg";
import Stefi from "../public/images/team/Stefi.jpg";
import Meri from "../public/images/team/Meri.jpg";
import Rosi from "../public/images/team/Rosi.jpg";
import Tedi from "../public/images/team/Tedi.jpg";
import Person from "../components/Person";

export default function Team() {
	return (
		<PageWrapper text="Team of">
			<Head>
				<title>FISSION :: Team</title>
			</Head>
			<div className={generalStyles.content}>
				<h1>Team</h1>
				<hr />
				<div className={styles.leaderPhotos}>
					<Person
						name="Teodora Marinova"
						email="t.marinova23@acsbg.org"
						img={Teodora}
					/>
					<Person
						name="Daniel Sevik"
						email="d.sevik23@acsbg.org"
						img={Dani}
					/>
					<Person
						name="Martin Lozanov"
						email="m.lozanov23@acsbg.org"
						img={Martin}
					/>
					<Person
						name="Krasimira Chakarova"
						email="k.chakarova@acsbg.org"
						img={KC}
					/>
				</div>
				<div className={styles.photos}>
					<Image src={Kaloyan} alt="Kaloyan Dimitrov" />
					<Image src={Ali} alt="Aleksandra Daskalova" />
					<Image src={Tedi} alt="Teodora Daskalova" />
					<Image src={Alii} alt="Aleksandra Ignatova" />
					<Image src={Elizabeth} alt="Elizabeth Dimitrova" />
					<Image src={Vladi} alt="Vladislav Skrinski" />
					<Image src={Stefi} alt="Stefani Naydenova" />
					<Image src={Meri} alt="Meriem Fereva" />
					<Image src={Rosi} alt="Rositsa Karaivanova" />
				</div>
			</div>
		</PageWrapper>
	);
}
