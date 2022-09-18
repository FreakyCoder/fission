import Head from "next/head";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import NBU from "../components/NBU";
import styles from "../styles/General.module.css";

export default function Home() {
	return (
		<PageWrapper text="Home of">
			<Head>
				<title>FISSION:: Home</title>
			</Head>
			<div className={styles.content}>
				<h2>What is FISSION?</h2>
				<p>
					FISSION is an international science fair organized by{" "}
					<Link href="/team">
						<a>students</a>
					</Link>{" "}
					for students.
				</p>
				<iframe
					width="560"
					height="315"
					src="https://youtube.com/embed/1i8YE69bQ8o?controls=0"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<h2>Where and when?</h2>
				<p>
					March 26th, 2022
					<br />
					Online, right from your computer :)
				</p>
				<h2>Why?</h2>
				<p>
					FISSION is the place to meet like-minded individuals, share
					knowledge and ideas with young scientists from all over
					Europe, have fun and get inspired!
				</p>
				<h2>What is our goal?</h2>
				<p>
					Our goal is to provoke students to take knowledge outside of
					the classroom. We want to challenge their creativity as they
					explore the practical applications of theoretical science.
					We also aim to unite students from different countries and
					scientific interests and create a community of ambitious
					young scientists. The online format this year will enable
					participation from all around the world, with direct
					communication between the participants and the jury.
				</p>
				<h2>Timeline</h2>
				<h3>
					<i>Due March 10th</i>
				</h3>
				<p>
					Read the{" "}
					<Link href="/guidelines">
						<a>guidelines</a>
					</Link>{" "}
					before you apply. Form a team of 1-3 members and find an
					academic advisor if you wish. Decide on a topic and category
					in which to compete. Finally, make sure that either you,
					another team member, or your advisor fill out the{" "}
					<Link href="/signup">
						<a>application form</a>
					</Link>
					. Submit your project materials at our e-mail address:{" "}
					<a className={styles.mail} href="mailto:fission@acsbg.org">
						fission@acsbg.org
					</a>
					. These include a research article (report) that is going to
					be evaluated by our jury. In addition, each team has to
					submit a short video presentation in which they present
					their project.
				</p>
				<h3>
					<i>On March 19th and 20th</i>
				</h3>
				<p>
					Your team will be invited to present their project and be
					questioned by our jury. You don&apos;t have to stress about
					this and instead think of it as an opportunity to impress
					people with your work.
				</p>
				<h3>
					<i>On March 26th</i>
				</h3>
				<p>
					Attend the event via{" "}
					<a href="https://us02web.zoom.us/j/81187518114s">zoom</a>{" "}
					and enjoy the activities. Take part in the award ceremony
					and congratulate the winning teams.
				</p>
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
				<h2>We can&apos;t wait to see you!</h2>{" "}
			</div>
		</PageWrapper>
	);
}
