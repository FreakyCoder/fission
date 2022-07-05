import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
//import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<PageWrapper text="Home of">
			<Head>
				<title>FISSION:: Home</title>
			</Head>
		</PageWrapper>
	);
}
