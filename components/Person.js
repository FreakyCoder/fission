import Image from "next/future/image";
import styles from "../styles/Person.module.css";

export default function Person({ img, name, email, description }) {
	return (
		<div className={styles.container}>
			<div className={styles.col1}>
				<Image src={img} alt={name} />
			</div>
			<div className={styles.col2}>
				<h1>{name}</h1>
				<a href={`mailto:${email}`} className={styles.mail}>
					{email}
				</a>
				<h2>{description}</h2>
			</div>
		</div>
	);
}
