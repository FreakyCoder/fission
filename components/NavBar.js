import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
	const router = useRouter();
	const paths = [
		{
			href: "/",
			content: "Home",
		},
		{
			href: "/signup",
			content: "Sign Up",
		},
		{
			href: "/guidelines",
			content: "Guidelines",
		},
		{
			href: "/schedule",
			content: "Schedule",
		},
		{
			href: "/jury",
			content: "Jury",
		},
		{
			href: "/team",
			content: "Team",
		},
		{
			href: "/archive",
			content: "Archive",
		},
		{
			href: "/donate",
			content: "Donate",
		},
		{
			href: "/gallery",
			content: "Gallery",
		},
	];
	return (
		<nav className={styles.nav}>
			{paths.map((path) =>
				router.route == path.href ? (
					<Link href={path.href}>
						<a className={styles.link}>
							<b>{path.content}</b>
						</a>
					</Link>
				) : (
					<Link href={path.href}>
						<a className={`${styles.link} ${styles.linkHover}`}>
							{path.content}
						</a>
					</Link>
				)
			)}
		</nav>
	);
}
