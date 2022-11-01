import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import ResponsiveTable from "../components/ResponsiveTable";
import styles from "../styles/General.module.css";

export default function Archive() {
	return (
		<PageWrapper text="Archive of">
			<Head>
				<title>FISSION :: Archive</title>
			</Head>
			<div className={styles.content}>
				<h1>Archive</h1>
				<hr />
				<h2>2022</h2>
				<ResponsiveTable>
					<thead>
						<tr>
							<td>Category</td>
							<td>Award</td>
							<td>Project Name</td>
							<td>Project Author(s)</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowSpan={3}>
								Physical Sciences and Engineering
							</td>
							<td>Best in Category (Model)</td>
							<td>DC Explorer</td>
							<td>Momchil Kolev, Victor Ivanov</td>
						</tr>
						<tr>
							<td>Best in Category (Experiment)</td>
							<td>Coin in a Balloon</td>
							<td>Denitsa Vasileva</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>Denim cycle</td>
							<td>
								Veronika Stefanova Tsoneva, Aderean Miroslavov
								Velinov
							</td>
						</tr>
						<tr>
							<td rowSpan={2}>
								Biomedical, Biological, and Chemical Sciences
							</td>
							<td>Best in Category</td>
							<td>
								Analysis of The Effect of Antioxidants On the
								Efficiency of a Bioenergy Drink
							</td>
							<td>Antoana Tsekova</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>
								The Effects of Different Aspirins on Salivary
								Amylase’s Function
							</td>
							<td>Kalina Duncheva, Bogdan Nalbanski</td>
						</tr>
						<tr>
							<td>Ecology and Environmental Science</td>
							<td>Best in Category</td>
							<td>
								OLIVE WASTES - natural heavy metal absorbents
							</td>
							<td>Erblin Jakupi, Alba Deari</td>
						</tr>
						<tr>
							<td rowSpan={2}>Computer Science</td>
							<td>Best in Category</td>
							<td>
								Swarm Guiding and Communication System (SGCS)
							</td>
							<td>Kaloyan Dimitrov</td>
						</tr>
						<tr>
							<td>Honorable Mention</td>
							<td>Braille Reader App</td>
							<td>Mihaela Tzvetkova, Yasen Horozov</td>
						</tr>
						<tr>
							<td>Mathematics</td>
							<td>Best in Category</td>
							<td>
								Fixed systems of the Shapley-Shubik index with
								one or two presidents
							</td>
							<td>Demira Georgieva Nedeva</td>
						</tr>
						<tr>
							<td>Junior</td>
							<td>Best in Category</td>
							<td>No Wasting Sink</td>
							<td>Aslı Sarac</td>
						</tr>
					</tbody>
				</ResponsiveTable>
				<hr />
			</div>
		</PageWrapper>
	);
}
