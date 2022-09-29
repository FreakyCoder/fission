import Person from "../components/Person";
import PageWrapper from "../components/PageWrapper";
import styles from "../styles/General.module.css";
import { getPlaiceholder } from "plaiceholder";
import Head from "next/head";

export default function Team({ people }) {
	return (
		<PageWrapper text="Team of">
			<Head>
				<title>FISSION :: Team</title>
			</Head>
			<div className={styles.content}>
				<h1>Contacts for FISSION</h1>
				<h2>
					FISSION is brought to you by a team of passionate ACS
					students and staff.
				</h2>
				<hr />
				{people.map((person, ind) => (
					<Person data={person} key={ind} />
				))}
			</div>
		</PageWrapper>
	);
}

export async function getStaticProps(context) {
	const { default: data } = await import("../metadata/team.json");
	const people = await Promise.all(
		data.map(async (p) => {
			const { base64, img } = await getPlaiceholder(p.image);
			return {
				...p,
				image: {
					...img,
					blurDataURL: base64,
				},
			};
		})
	);
	return {
		props: {
			people,
		},
	};
}
