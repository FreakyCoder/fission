import Image from "next/future/image";
import MenelaosRaptis from "../public/images/MenelaosRaptis.jpg";
import styles from "../styles/Quote.module.css";

export default function Quote() {
	return (
		<div className={styles.quote}>
			<figure>
				<blockquote>
					<p>
						&quot;FISSION was an amazing experience - a great
						journey in the path of natural sciences! It was
						literally the transformation of science into art, a
						competition that further expanded my horizons and
						established the foundations for my academic
						success.&quot;
					</p>
				</blockquote>
				<figcaption>
					Menelaos Raptis
					<br />
					<cite>
						Student at Franklin & Marshall College
						<br />
						Astrophysics Major
					</cite>
				</figcaption>
			</figure>
			<Image src={MenelaosRaptis} alt="Menelaos Raptis" />
		</div>
	);
}
