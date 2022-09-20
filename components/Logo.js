import Image from "next/image";
import logo from "../public/images/logo.png";
import styles from "../styles/Logo.module.css";

export default function Logo() {
	return (
		<span className={styles.container}>
			<Image src={logo} alt="" />
		</span>
	);
}
