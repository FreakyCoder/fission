import Image from "next/future/image";
import styles from "../styles/SupporterLogo.module.css";

export default function SupporterLogo({ img }) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Image src={img} alt="Supported by AAE" />
			</div>
		</div>
	);
}
