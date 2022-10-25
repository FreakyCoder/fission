export default function SponsorshipTableCell({ children }) {
	let symbol;
	switch (children) {
		case "✔":
			symbol = <span style={{ color: "#7f0080" }}>✔</span>;
			break;
		case "✘":
			symbol = <span style={{ color: "#af0000" }}>✘</span>;
			break;
		default:
	}
	return (
		<td>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "1.5em",
				}}
			>
				{symbol}
			</div>
		</td>
	);
}
