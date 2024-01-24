"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
	const route = usePathname();
	const paths = [
		{
			href: "/",
			content: "Home",
		},
		{
			href: "/signup/",
			content: "Sign Up",
		},
		{
			href: "/guidelines/",
			content: "Guidelines",
		},
		{
			href: "/team/",
			content: "Team",
		},
		{
			href: "/jury/",
			content: "Jury",
		},
		{
			href: "/archive/",
			content: "Archive",
		},
		{
			href: "/sponsors/",
			content: "Sponsors",
		},
		{
			href: "/gallery/",
			content: "Gallery",
		},
	];
	return (
		<>
			<nav className={styles.nav}>
				{paths.map((path, index) =>
					route == path.href ? (
						<Link
							href={path.href}
							key={index}
							className={styles.link}
						>
							<div className={styles.home}>
								<Logo />
								<b>{path.content}</b>
							</div>
						</Link>
					) : (
						<Link
							href={path.href}
							key={index}
							className={`${styles.link} ${styles.linkHover}`}
						>
							{path.content}
						</Link>
					)
				)}
			</nav>
			<span className={styles.offset}></span>
		</>
	);
}
