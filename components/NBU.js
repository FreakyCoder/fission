import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/NBU.module.css";
import nbu from "../public/images/nbu.png";

export default function NBU() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1> New Bulgarian University</h1>
				<Link href="https://www.nbu.bg/" passHref>
					<Image
						src={nbu}
						className={styles.image}
						alt="New Bulgarian university"
					/>
				</Link>
			</div>
		</div>
	);
}
