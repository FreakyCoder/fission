import styles from "../styles/Social.module.css";

export default function SocialMediaButtons() {
	return (
		<div className={styles.container}>
			<form action="https://www.facebook.com/FissionACS/">
				<button type="submit" id={styles.facebook}>
					Facebook
				</button>
			</form>
			<form action="https://instagram.com/fission_acs?igshid=YmMyMTA2M2Y=">
				<button type="submit" id={styles.instagram}>
					Instagram
				</button>
			</form>
			<form action="mailto:fission@acsbg.org">
				<button type="submit" id={styles.email}>
					Email
				</button>
			</form>
		</div>
	);
}
