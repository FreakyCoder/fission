import Image from "next/image";
import styles from "../styles/Person.module.css";

export default function Person({ data }) {
	return (
		<div className={styles.container}>
			<div className={styles.col1}>
				<Image
					src={data.image.src}
					width={data.image.width}
					height={data.image.height}
					placeholder="blur"
					blurDataURL={data.image.blurDataURL}
					layout="responsive"
					alt=""
				/>
			</div>
			<div className={styles.col2}>
				<h1>{data.name}</h1>
				<hr />
				<h2>{data.description}</h2>
				<a href={`mailto:${data.email}`} className={styles.mail}>
					{data.email}
				</a>
			</div>
		</div>
	);
}
