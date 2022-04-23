import Person from "../components/Person";
import PageWrapper from "../components/PageWrapper";
import styles from "../styles/Team.module.css";
import imageSize from "image-size";

export default function Team({ people }) {
	return (
		<PageWrapper text="Team of">
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
			const img = await imageSize(p.image);
			return {
				...p,
				image: {
					src: p.image.substring(6),
					width: img.width,
					height: img.height,
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
