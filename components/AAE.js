import Image from "next/future/image";
import styles from "../styles/AAE.module.css";
import logo from "../public/images/AAE/logo.png";

export default function AAE() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Image src={logo} alt="Supported by AAE" />
			</div>
		</div>
	);
}
