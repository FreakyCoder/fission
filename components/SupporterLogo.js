import Image from "next/future/image";
import styles from "../styles/SupporterLogo.module.css";

export default function SupporterLogo({ img, alt, href, important }) {
	return (
		<a
			href={href}
			className={styles.container}
			style={important ? { width: "70%" } : {}}
		>
			<div
				className={styles.content}
				style={important ? { paddingBottom: 0, paddingTop: 0 } : {}}
			>
				<Image src={img} alt={`Supported by ${alt}`} />
			</div>
		</a>
	);
}
