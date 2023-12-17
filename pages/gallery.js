import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import PageWrapper from "../components/PageWrapper";
import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/General.module.css";
import EmbedVideo from "../components/EmbedVideo";

export default function Gallery({ images }) {
	return (
		<PageWrapper text="Gallery of">
			<Head>
				<title>FISSION :: Gallery</title>
			</Head>
			<div
				className={styles.content}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h1>Gallery</h1>
				<hr />
				<div className={styles.carousel}>
					<Carousel showThumbs={false} infiniteLoop={true}>
						{images.map((img) => (
							<div key={img} {...img.css}>
								<Image {...img.img} alt="" />
							</div>
						))}
					</Carousel>
					<EmbedVideo href="https://www.youtube.com/embed/ipklzavOcPI" />
					<EmbedVideo href="https://www.youtube.com/embed/2CXRurdJ8P0" />
					<EmbedVideo href="https://www.youtube.com/embed/WE0VdKHAcuQ" />
					<EmbedVideo href="https://www.youtube.com/embed/6WsWMnXNOXU" />
					<EmbedVideo href="https://www.youtube.com/embed/M8XHdOK326U" />
				</div>
			</div>
		</PageWrapper>
	);
}

export async function getStaticProps(_) {
	const p = path.join(process.cwd(), "public", "images", "gallery");
	let images = await Promise.all(
		fs
			.readdirSync(p)
			.map((img) => getPlaiceholder(path.join("/images", "gallery", img)))
	);
	return {
		props: { images },
	};
}
