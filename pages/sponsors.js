import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import ResponsiveTable from "../components/ResponsiveTable";
import SponsorshipTableCell from "../components/SponsorshipTableCell";
import styles from "../styles/General.module.css";

export default function Donate() {
	return (
		<PageWrapper text="Sponsor">
			<Head>
				<title>FISSION :: Sponsors</title>
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
					.
				</p>
				<h1>Sponsors</h1>
				<hr />
				<ResponsiveTable>
					<colgroup>
						<col style={{ minWidth: "20em" }} />
						<col style={{ minWidth: "7.5em" }} />
						<col style={{ minWidth: "7.5em" }} />
						<col style={{ minWidth: "7.5em" }} />
					</colgroup>
					<thead>
						<tr>
							<th>Value</th>
							<th>500BGN</th>
							<th>1000BGN</th>
							<th>1500BGN</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Logo on the event banner</td>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
						</tr>
						<tr>
							<td>Logo on the FISSION website</td>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
						</tr>
						<tr>
							<td>Inclusion in email bulletin</td>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
						</tr>
						<tr>
							<td>
								Distribution of advertisement material at the
								event
							</td>
							<SponsorshipTableCell>
								&#x2718;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
						</tr>
						<tr>
							<td>Banner at the event</td>
							<SponsorshipTableCell>
								&#x2718;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
						</tr>
						<tr>
							<td>
								Speaker time slot (5 minutes) during the event
							</td>
							<SponsorshipTableCell>
								&#x2718;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2718;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
						</tr>
						<tr>
							<td>Booth at the event</td>
							<SponsorshipTableCell>
								&#x2718;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2718;
							</SponsorshipTableCell>
							<SponsorshipTableCell>
								&#x2714;
							</SponsorshipTableCell>
						</tr>
					</tbody>
				</ResponsiveTable>
				<p>
					To sponsor the event, email us at{" "}
					<a href="mailto:fission@acsbg.org" className={styles.mail}>
						fission@acsbg.org
					</a>
					.
				</p>
			</div>
		</PageWrapper>
	);
}
