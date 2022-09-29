import Head from "next/head";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import NBU from "../components/NBU";
import Banner from "../components/Banner";
import styles from "../styles/General.module.css";

export default function Home() {
	return (
		<PageWrapper text="Home of">
			<Head>
				<title>FISSION:: Home</title>
			</Head>
			<div className={styles.content}>
				<Banner />
				<h2>What is FISSION?</h2>
				<p>
					FISSION is an international science fair organized by{" "}
					<Link href="/team">
						<a>students</a>
					</Link>{" "}
					for students.
					<br />
					<br />
					Our goal is to provoke students to take knowledge outside of
					the classroom. We want to challenge their creativity as they
					explore the practical applications of theoretical science.
					We also aim to unite students from different countries and
					scientific interests and create a community of ambitious
					young scientists. The online format this year will enable
					participation from all around the world, with direct
					communication between the participants and the jury.
				</p>
				<div className={styles.iframeContainer}>
					<iframe
						src="https://youtube.com/embed/1i8YE69bQ8o?controls=0"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<h2>Where and when?</h2>
				<p>
					March 31st - April 1st, 2023
					<br />
					At ACS: Floyd Black Lane, Mladost 2, 1799 Sofia, Bulgaria
				</p>
				<h2>Why?</h2>
				<p>
					FISSION is the place to meet like-minded individuals, share
					knowledge and ideas with young scientists from all over
					Europe, have fun and get inspired!
				</p>
				<h2>Timeline</h2>
				<table>
					<colgroup>
						<col width="20%" />
						<col width="80%" />
					</colgroup>
					<tbody>
						<tr>
							<td>01.12.2022</td>
							<td>Registration deadline </td>
						</tr>
						<tr>
							<td>01.03.2023</td>
							<td>Project submission deadline</td>
						</tr>
						<tr>
							<td>31.03.2023 (Friday)</td>
							<td>Arrive in Sofia & Check-in</td>
						</tr>
						<tr>
							<td>01.04.2023 (Saturday)</td>
							<td>FISSION Event & Awards</td>
						</tr>
					</tbody>
				</table>
				<h3>
					On the Day of the Event (01.04.2023)
					{/*<i>Durations are subject to change</i> */}
				</h3>
				<ul>
					<li>Opening Ceremony</li>
					<li>Meetings with jury</li>
					<li>Campus tour</li>
					<li>Other activities</li>
					<li>Awards Ceremony</li>
					<li>Participants departure</li>
				</ul>
				{/*                 <table>
				 *                     <colgroup>
				 *                         <col width="20%" />
				 *                         <col width="20%" />
				 *                         <col width="60%" />
				 *                     </colgroup>
				 *                     <tbody>
				 *                         <tr>
				 *                             <td> 11:00 - 11:30 </td>
				 *                             <td> Opening Ceremony </td>
				 *                             <td>
				 *                                 Official speeches of the honorable guests from
				 *                                 ACS; Introduction of the jury; General
				 *                                 instruction about the event and presentation of
				 *                                 the schedule.
				 *                             </td>
				 *                         </tr>
				 *                         <tr>
				 *                             <td> 11:30-11:50 </td>
				 *                             <td> New Bulgarian University </td>
				 *                             <td>
				 *                                 FISSION Partners New Bulgarian University
				 *                                 present their institution.
				 *                             </td>
				 *                         </tr>
				 *                         <tr>
				 *                             <td> 11:50-12:10 </td>
				 *                             <td> Games and Activities </td>
				 *                             <td>
				 *                                 A chance for everyone in the live meeting to win
				 *                                 prizes and enjoy the event.
				 *                             </td>
				 *                         </tr>
				 *                         <tr>
				 *                             <td> 12:10-12:40 </td>
				 *                             <td> EnduroSat Presentation</td>
				 *                             <td>
				 *                                 Meet an exciting company and get a chacne to ask
				 *                                 questions at the end.
				 *                             </td>
				 *                         </tr>
				 *                         <tr>
				 *                             <td> 12:40-12:50 </td>
				 *                             <td> Award Ceremony</td>
				 *                             <td>
				 *                                 Jury members anounce FISSION 2022 winners in
				 *                                 each category.
				 *                             </td>
				 *                         </tr>
				 *
				 *                         <tr>
				 *                             <td> 12:50-13:00 </td>
				 *                             <td> Closing Ceremony</td>
				 *                             <td> Closing video address.</td>
				 *                         </tr>
				 *                     </tbody>
				 *                 </table> */}
				<p>
					Please submit your report through the official FISSION email
					address:{" "}
					<a className={styles.mail} href="mailto:fission@acsbg.org">
						fission@acsbg.org
					</a>
					.
				</p>
				<p>Accommodation is organized by FISSION team. </p>
				<h2>Official Partner</h2>
				<NBU />
				<h3>
					<i>
						Fission 2022 is brought to you with the support of the
						Central Fund Of Strategic Development of NBU&apos;s
						board of trusties.
					</i>
				</h3>
				<hr />
				<h2 style={{ textAlign: "center" }}>
					We can&apos;t wait to see you!
				</h2>
			</div>
		</PageWrapper>
	);
}
