import Image from "next/image";

import Logo from "./Logo";

import horizontalBanner from "../public/images/banner/horizontal.jpg";
import verticalBanner from "../public/images/banner/vertical.jpg";

import styles from "../styles/Banner.module.css";

export default function Banner() {
	return (
		<div className={styles.container}>
			<Image
				src={horizontalBanner}
				alt=""
				className={styles.horizontalImage}
			/>
			<Image
				src={verticalBanner}
				alt=""
				className={styles.verticalImage}
			/>
			<div className={styles.overlay}>
				<span>
					<Logo />
				</span>
				<h1>
					<span style={{ color: "orange" }}>Inquire</span>.{" "}
					<span style={{ color: "yellow" }}>Inspire</span>. Set the
					World on <span style={{ color: "red" }}>Fire</span>.
				</h1>
			</div>
		</div>
	);
}
