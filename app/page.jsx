import Link from "next/link";
import Banner from "../components/Banner";
import styles from "../styles/General.module.css";
import SocialMediaButtons from "../components/SocialMediaButtons";
import RegisterNowButton from "../components/RegisterNowButton";
import EmbedVideo from "../components/EmbedVideo";
import Quote from "../components/Quote";
import Sponsors from "../components/Sponsors";
import ResponsiveTable from "../components/ResponsiveTable";

export const metadata = {
	title: "FISSION :: Home",
};

export default function Home() {
	return (
		<div className={styles.content}>
			<Banner />
			<h2>What is FISSION?</h2>
			<p>
				FISSION is an international science fair organized by{" "}
				<Link href="/team">students</Link> for students.
				<br />
				<br />
				Our goal is to provoke students to take knowledge outside of the
				classroom. We want to challenge their creativity as they explore
				the practical applications of theoretical science. We also aim
				to unite students from different countries and scientific
				interests and create a community of ambitious young scientists.
				The online format this year will enable participation from all
				around the world, with direct communication between the
				participants and the jury.
			</p>
			<EmbedVideo href="https://drive.google.com/file/d/1TxR-B2psR-E8FA4LgdDErfo3uy7Sh9h3/preview" />
			<h2>Where and when?</h2>
			<p>
				April 12th - April 13th, 2024
				<br />
				At ACS: Floyd Black Lane, Mladost 2, 1799 Sofia, Bulgaria
			</p>
			<RegisterNowButton />
			<h2>Why?</h2>
			<p>
				FISSION is the place to meet like-minded individuals, share
				knowledge and ideas with young scientists from all over Europe,
				have fun and get inspired!
			</p>
			<h2>Timeline 2024</h2>
			<table>
				<colgroup>
					<col width="20%" />
					<col width="80%" />
				</colgroup>
				<tbody>
					<tr>
						<td>29.02.2024</td>
						<td>Registration deadline </td>
					</tr>
					<tr>
						<td>29.03.2024</td>
						<td>Project submission deadline</td>
					</tr>
					<tr>
						<td>12.04.2024 (Friday)</td>
						<td>Arrive in Sofia & Check-in</td>
					</tr>
					<tr>
						<td>13.04.2024 (Saturday)</td>
						<td>FISSION Event & Awards</td>
					</tr>
				</tbody>
			</table>
			<h2>On the Day of the Event (13.04.2024)</h2>
			<ResponsiveTable>
				<colgroup>
					<col width="20%" />
					<col width="30%" />
					<col width="20%" />
					<col width="30%" />
				</colgroup>
				<thead>
					<tr>
						<th>Time</th>
						<th>Activity</th>
						<th>Location</th>
						<th>Participants</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={4} className={styles.scheduleDay}>
							<b>Day 1(April 12th, Friday)</b>
						</td>
					</tr>
					<tr>
						<td>16:30 - 19:00</td>
						<td>Registration</td>
						<td>Ostrander</td>
						<td>Students and Supervisors</td>
					</tr>
					<tr>
						<td>17:30 - 18:30</td>
						<td>Welcome Reception</td>
						<td>Cafeteria and Ostrander</td>
						<td>Students and Supervisors</td>
					</tr>
					<tr>
						<td colSpan={4} className={styles.scheduleDay}>
							<b>Day 2(April 13th, Saturday)</b>
						</td>
					</tr>
					<tr>
						<td>8:00 - 9:00</td>
						<td>Set up</td>
						<td>Bubble</td>
						<td>Students and Supervisors and Supervisors</td>
					</tr>
					<tr>
						<td>9:00 - 9:30</td>
						<td rowSpan={3}>Opening Ceremony</td>
						<td rowSpan={3}>Whitaker Auditorium</td>
						<td rowSpan={3}>
							Esteemed Guests: Front Rows <br />
							Students and Teachers: Mid Rows <br />
							Guests and Alumni: Tail Rows <br />
							Organizers: Backstage <br />
						</td>
					</tr>
					<tr>
						<td>9:30 - 9:45</td>
					</tr>
					<tr>
						<td>9:45 - 10:00</td>
					</tr>
					<tr>
						<td>10:00 - 10:30</td>
						<td>Transition</td>
						<td>To Bubble</td>
						<td>Everyone</td>
					</tr>
					<tr>
						<td>10:30 - 10:45</td>
						<td rowSpan={10}>Presentation of projects</td>
						<td rowSpan={10}>Bubble</td>
						<td rowSpan={10}>
							Juniors: Inner Circle <br />
							All Other Categories: Outer <br />
							Circle Partners: On Tables at Entrance <br />
							Teachers, Jury, Guests: Walk Around
						</td>
					</tr>
					<tr>
						<td>10:45 - 11:00</td>
					</tr>
					<tr>
						<td>11:00 - 11:15</td>
					</tr>
					<tr>
						<td>11:15 - 11:30</td>
					</tr>
					<tr>
						<td>11:30 - 11:45</td>
					</tr>
					<tr>
						<td>11:45 - 12:00</td>
					</tr>
					<tr>
						<td>12:00 - 12:15</td>
					</tr>
					<tr>
						<td>12:15 - 12:30</td>
					</tr>
					<tr>
						<td>12:30 - 12:45</td>
					</tr>
					<tr>
						<td>12:45 - 13:00</td>
					</tr>
					<tr>
						<td>13:00 - 13:15</td>
						<td>Transition to lunch</td>
						<td>To Cafeteria</td>
						<td>Everyone</td>
					</tr>
					<tr>
						<td>13:15 - 13:30</td>
						<td rowSpan={4}>Lunch</td>
						<td rowSpan={4}>Cafeteria</td>
						<td rowSpan={4}>Everyone</td>
					</tr>
					<tr>
						<td>13:30 - 13:45</td>
					</tr>
					<tr>
						<td>13:45 - 14:00</td>
					</tr>
					<tr>
						<td>14:00 - 14:15</td>
					</tr>
					<tr>
						<td>14:15 - 14:30</td>
						<td>Break + preparation for modules</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>14:30 - 14:45</td>
						<td rowSpan={4}>
							Campus tours and Past Project Presentation In
							Whitaker Auditorium
						</td>
						<td rowSpan={4}>Around School or Auditorium</td>
						<td rowSpan={4}>Students and Guests or Teachers</td>
					</tr>
					<tr>
						<td>14:45 - 15:00</td>
					</tr>
					<tr>
						<td>15:00 - 15:15</td>
					</tr>
					<tr>
						<td>15:15 - 15:30</td>
					</tr>
					<tr>
						<td>15:30 - 16:00</td>
						<td rowSpan={2}>Awards + Closing Ceremony</td>
						<td rowSpan={2}>Whitaker Auditorium</td>
						<td rowSpan={2}>Everyone</td>
					</tr>
					<tr>
						<td>16:00 - 16:30</td>
					</tr>
				</tbody>
			</ResponsiveTable>
			<p>
				Please submit your report through the official FISSION email
				address:{" "}
				<a className={styles.mail} href="mailto:fission@acsbg.org">
					fission@acsbg.org
				</a>
				.
			</p>
			<p>
				Participants who have requested accommodation will be contacted
				by our team. In case there is a financial hardship or traveling
				is very inconvenient for the team, online participation will
				also be an option. This will not influence the project&apos;s
				score in any way, and it will be evaluated equally with the
				projects presented in-person. Online streaming of parts of the
				event will also be available for the audience.
			</p>
			<Quote />
			<Sponsors />
			<hr />
			<h2>Follow us on social media</h2>
			<SocialMediaButtons />
			<hr />
			<h2 style={{ textAlign: "center" }}>
				We can&apos;t wait to see you!
			</h2>
		</div>
	);
}
