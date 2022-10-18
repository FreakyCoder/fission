export default function ResponsiveTable({ children }) {
	return (
		<div style={{ width: "100%", overflowX: "auto" }}>
			<table style={{ width: "100%" }}>{children}</table>
		</div>
	);
}
