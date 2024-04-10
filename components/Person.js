import Image from "next/image";
import styles from "../styles/Person.module.css";

export default function Person({ img, name, caption, captions, email }) {
	return (
		<div className={styles.container}>
			<div className={styles.col1}>
				<Image src={img} alt={name} />
			</div>
			<div className={styles.col2}>
				<h1>{name}</h1>
				{captions &&
					captions.map((caption) => <h2 key={caption}>{caption}</h2>)}
				<h2>{caption}</h2>
				<a href={`mailto:${email}`} className={styles.mail}>
					{email}
				</a>
			</div>
		</div>
	);
}
