import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import styles from "../styles/General.module.css";

export default function Donate() {
	return (
		<PageWrapper text="Schedule of">
			<Head>
				<title>FISSION :: Schedule</title>
			</Head>
			<div className={styles.content}>
				<h1> FISSION 2022 Schedule</h1>
				<hr />
				<h2>General Information </h2>
				<table>
					<colgroup>
						<col width="20%" />
						<col width="80%" />
					</colgroup>
					<tbody>
						<tr>
							<td> 10.03.2022 </td>
							<td> Registration deadline </td>
						</tr>
						<tr>
							<td> 10.03.2022 </td>
							<td> Report deadline </td>
						</tr>
						<tr>
							<td> 10.03.2022 </td>
							<td> Video presentation deadline </td>
						</tr>
						<tr>
							<td> 19 - 20.03.2022 </td>
							<td>
								{" "}
								Q&A between jury and participants (with
								appointment){" "}
							</td>
						</tr>
						<tr>
							<td> 26.03.2022 </td>
							<td> Date of the event </td>
						</tr>
						<tr>
							<td> TBA </td>
							<td> Distribution of rewards due </td>
						</tr>
					</tbody>
				</table>
				<h2>
					On the Day of the Event (26.03.2022) -{" "}
					<i>Durations are subject to change</i>
				</h2>
				<table>
					<colgroup>
						<col width="20%" />
						<col width="20%" />
						<col width="60%" />
					</colgroup>
					<tbody>
						<tr>
							<td> 11:00 - 11:30 </td>
							<td> Opening Ceremony </td>
							<td>
								Official speeches of the honorable guests from
								ACS; Introduction of the jury; General
								instruction about the event and presentation of
								the schedule.
							</td>
						</tr>
						<tr>
							<td> 11:30-11:50 </td>
							<td> New Bulgarian University </td>
							<td>
								FISSION Partners New Bulgarian University
								present their institution.
							</td>
						</tr>
						<tr>
							<td> 11:50-12:10 </td>
							<td> Games and Activities </td>
							<td>
								A chance for everyone in the live meeting to win
								prizes and enjoy the event.
							</td>
						</tr>
						<tr>
							<td> 12:10-12:40 </td>
							<td> EnduroSat Presentation</td>
							<td>
								Meet an exciting company and get a chacne to ask
								questions at the end.
							</td>
						</tr>
						<tr>
							<td> 12:40-12:50 </td>
							<td> Award Ceremony</td>
							<td>
								Jury members anounce FISSION 2022 winners in
								each category.
							</td>
						</tr>

						<tr>
							<td> 12:50-13:00 </td>
							<td> Closing Ceremony</td>
							<td> Closing video address.</td>
						</tr>
					</tbody>
				</table>
				<h2>
					Please submit your report and video through the official
					FISSION email address:{" "}
					<a className={styles.mail} href="mailto:fission@acsbg.org">
						fission@acsbg.org
					</a>
					.
				</h2>
			</div>
		</PageWrapper>
	);
}
