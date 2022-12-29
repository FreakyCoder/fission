import styles from "../styles/General.module.css";

export default function EmbedVideo({ href }) {
	return (
		<div className={styles.iframeContainer}>
			<iframe
				src={href}
				style={{ border: "none" }}
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
}
