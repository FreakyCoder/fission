import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
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
			href: "/team",
			content: "Team",
		},
		{
			href: "/jury",
			content: "Jury",
		},
		{
			href: "/archive",
			content: "Archive",
		},
		{
			href: "/sponsors",
			content: "Sponsors",
		},
		{
			href: "/gallery",
			content: "Gallery",
		},
	];
	return (
		<>
			<nav className={styles.nav}>
				{paths.map((path, index) =>
					router.route == path.href ? (
						<Link href={path.href} key={index}>
							<a className={styles.link}>
								<div className={styles.home}>
									<Logo />
									<b>{path.content}</b>
								</div>
							</a>
						</Link>
					) : (
						<Link href={path.href} key={index}>
							<a className={`${styles.link} ${styles.linkHover}`}>
								{path.content}
							</a>
						</Link>
					)
				)}
			</nav>
			<span className={styles.offset}></span>
		</>
	);
}
