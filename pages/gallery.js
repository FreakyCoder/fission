import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import PageWrapper from "../components/PageWrapper";
import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/General.module.css";

export default function Gallery({ images }) {
	return (
		<PageWrapper text="Gallery of">
			<Head>
				<title>FISSION :: Gallery</title>
			</Head>
			<div className={styles.content}>
				<div className={styles.carousel}>
					<Carousel showThumbs={false} infiniteLoop={true}>
						{images.map((img) => (
							<div
								key={img}
								{...img.css}
								styles={{
									transform: "scale(1.5)",
									filter: "blur(40px)",
								}}
							>
								<Image {...img.img} alt="" />
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</PageWrapper>
	);
}

export async function getStaticProps(_) {
	const p = path.join(process.cwd(), "public/images/gallery");
	let images = await Promise.all(
		fs
			.readdirSync(p)
			.map((img) => getPlaiceholder(path.join("/images/gallery/" + img)))
	);
	return {
		props: { images },
	};
}
