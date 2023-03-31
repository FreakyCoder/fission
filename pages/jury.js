import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import Person from "../components/Person";
import styles from "../styles/General.module.css";

import nophoto from "../public/images/nophoto.png";
import DD from "../public/images/jury/DD.png";
import DV from "../public/images/jury/DV.png";
import DM from "../public/images/jury/DM.jpg";
import MA from "../public/images/jury/MA.jpg";
import VD from "../public/images/jury/VD.jpg";
import CA from "../public/images/jury/CA.jpg";
import VT from "../public/images/jury/VT.jpg";
import MZ from "../public/images/jury/MZ.png";
import ZM from "../public/images/jury/ZM.png";
import KV from "../public/images/jury/KV.png";
import KP from "../public/images/jury/KP.jpg";
import KD from "../public/images/jury/KD.jpg";
import NK from "../public/images/jury/NK.png";

export default function Jury() {
	return (
		<PageWrapper text="Jury of">
			<Head>
				<title>FISSION :: Jury</title>
			</Head>
			<div className={styles.content}>
				<h1>FISSION 2023 Jury</h1>
				<hr />
				<h2>Physical Sciences & Engineering</h2>
				<Person
					name="Miroslav Abrashev"
					img={MA}
					caption={
						<>
							Faculty of Physics
							<br /> <br />
							University of Sofia
							<br /> <br />
							Professor of Physics, PhD, DSc
						</>
					}
				/>
				<Person
					name="Viktoriya Dimov"
					img={VD}
					caption={
						<>
							Space System Engineer
							<br /> <br />
							EnduroSat
						</>
					}
				/>
				<hr />
				<h2>Biological, Biomedical & Chemical Sciences</h2>
				<Person
					name="Desislava Ivanova Mantovska, Assistant PhD"
					img={DM}
					caption={
						'Department of Plant Physiology, Faculty of Biology, Sofia University "St. Kliment Ohridski"'
					}
				/>
				<Person
					name="Kolyo Dankov, PhD"
					img={KD}
					caption={
						"Assistant Professor, Department of Biophysics and Radiobiology, Biological Faculty, Sofia University"
					}
				/>
				<Person
					name="Aleksandriya Gendjova"
					img={nophoto}
					caption={
						"Associate Professor, Laboratory of Chemical Education, Faculty of Chemistry and Pharmacy, Sofia University"
					}
				/>
				<Person
					name="Dimitar Djilianov, PhD"
					img={DD}
					caption={
						"Professor, Agrobioinstitute, Abiotic Stress Group Research Leader"
					}
				/>
				<hr />
				<h2>Computer Sciences</h2>
				<Person
					name="Serge Ovanesyan"
					img={nophoto}
					caption={"VP of Engineering, Receipt Bank"}
				/>
				<hr />
				<h2>Mathematics</h2>
				<Person
					name="Katerina Velcheva, PhD"
					img={KV}
					caption={
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
					name="Desislava Ivanova Mantovska, Assistant PhD"
					img={DM}
					caption={
						'Department of Plant Physiology, Faculty of Biology, Sofia University "St. Kliment Ohridski"'
					}
				/>
				<Person
					name="Kolyo Dankov, PhD"
					img={KD}
					caption={
						"Assistant Professor, Department of Biophysics and Radiobiology, Biological Faculty, Sofia University"
					}
				/>
				<Person
					name="Dimitar Djilianov, PhD"
					img={DD}
					caption={
						"Professor, Agrobioinstitute, Abiotic Stress Group Research Leader"
					}
				/>
				<hr />
				<h2>Junior Category</h2>
				<Person
					name="Vanya Angelova"
					img={nophoto}
					caption={
						"Former Physics Teacher, American College of Sofia"
					}
				/>
				<Person
					name="Diana Vladimirova"
					img={DV}
					caption={
						"Department Chair and Chemistry Teacher, American College of Sofia"
					}
				/>
				<br />
				<br />
				<br />
				<h1>FISSION 2022 Jury</h1>
				<hr />
				<h2>Physical Sciences & Engineering</h2>
				<Person
					name="Christina Andreeva, PhD"
					img={CA}
					caption={
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
					caption={
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
					caption={"Docent, Faculty of Biology, Sofia University"}
				/>
				<hr />
				<h2>Computer Sciences</h2>
				<Person
					name="Docent Zlatogor Minchev"
					img={ZM}
					caption={
						"Associate Professor (2010) at the Institute of ICT, Bulgarian Academy of Sciences, IT for Security Department Head (2016)"
					}
				/>
				<hr />
				<h2>Mathematics</h2>
				<Person
					name="Katerina Velcheva, PhD"
					img={KV}
					caption={
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
					caption={
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
					caption={
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
