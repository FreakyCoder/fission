import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import Person from "../components/Person";
import styles from "../styles/General.module.css";

import CA from "../public/images/jury/CA.jpg";
import VT from "../public/images/jury/VT.jpg";
import MZ from "../public/images/jury/MZ.png";
import ZM from "../public/images/jury/ZM.png";
import KV from "../public/images/jury/KV.png";
import KP from "../public/images/jury/KP.jpg";
import NK from "../public/images/jury/NK.png";

export default function Jury() {
	return (
		<PageWrapper text="Jury of">
			<Head>
				<title>FISSION :: Jury</title>
			</Head>
			<div className={styles.content}>
				<h1>FISSION 2022 Jury</h1>
				<hr />
				<h2>Physical Sciences & Engineering</h2>
				<Person
					name="Christina Andreeva, PhD"
					img={CA}
					description={
						<>
							Assoc. Prof. Institute of Electronics, Bulgarian
							Academy of Sciences
							<br /> <br />
							Assistant Prof. Faculty of Physics, Sofia University
						</>
					}
				/>
				<hr />
				<h2>Biological, Biomedical & Chemical Sciences</h2>
				<Person
					name="Vladimir Tsvetkov"
					img={VT}
					description={
						<>
							Teacher at private primary school Ronald Lauder{" "}
							<br />
							<br />
							Assistant in Sofia University
						</>
					}
				/>
				<Person
					name="Miroslava Zhiponova, PhD"
					img={MZ}
					description={"Docent, Faculty of Biology, Sofia University"}
				/>
				<hr />
				<h2>Computer Sciences</h2>
				<Person
					name="Docent Zlatogor Minchev"
					img={ZM}
					description={
						"Associate Professor (2010) at the Institute of ICT, Bulgarian Academy of Sciences, IT for Security Department Head (2016)"
					}
				/>
				<hr />
				<h2>Mathematics</h2>
				<Person
					name="Katerina Velcheva, PhD"
					img={KV}
					description={
						<>
							Teaches advanced mathematics at the American College
							of Sofia
							<br />
							<br />
							Assistant Prof. at Stanford, PhD in Mathematics from
							Stanford
							<br />
							<br />
							Undergraduate degree from MIT
							<br />
							<br />
							Major: Mathematics
						</>
					}
				/>
				<hr />
				<h2>Ecology & Environmental Science</h2>
				<Person
					name="Kalina Pachedjieva, PhD"
					img={KP}
					description={
						<>
							Main Assistant, Department of Ecology and
							Environmental Protection
							<br />
							<br />
							Biological Faculty in Sofia University
						</>
					}
				/>
				<hr />
				<h2>Junior Category</h2>
				<Person
					name="Nikola Karavasilev"
					img={NK}
					description={
						<>
							Physics and Astronomy Teacher, Izzy Science for Kids
							<br />
							<br />
							Master of Astrophysics, Sofia University
						</>
					}
				/>
			</div>
		</PageWrapper>
	);
}
