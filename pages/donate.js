import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import styles from "../styles/Donate.module.css";

export default function Donate() {
	return (
		<PageWrapper text="Donate to">
			<Head>
				<title>FISSION :: Donate</title>
			</Head>
			<div className={styles.content}>
				<h1>Donate</h1>
				<hr />
				<p>
					Donations of all kinds and all amounts are welcome. FISSION
					is organized by a handful of students from the American
					College of Sofia who give it their all to make the fair a
					success. Any support from parents, other students, guests,
					organizations, and friends is highly appreciated and valued
					by our team. The funds donated to the fair will be used to
					provide a better experience for all who attend FISSION. This
					includes more space for all participants, more activities
					and challenges, more food stands and more.{" "}
				</p>
				<p>
					Thank you for all of your support and we will do our very
					best to bring the most pleasant experience possible. If you
					would like to donate, please send an email to the following
					address for further information:{" "}
				</p>
				<p>
					ACS Donations Officer, Georgi Metodiev:{" "}
					<a
						href="mailto:g.metodiev@acsbg.org"
						className={styles.mail}
					>
						g.metodiev@acsbg.org
					</a>
				</p>
			</div>
		</PageWrapper>
	);
}
