export default function ({ children }: any) {
	return children
}
export function generateStaticParams() {
	return [
		{ faculty: "fbme" },
		{ faculty: "ipp" },
		{ faculty: "fel" },
		{ faculty: "its" },
		{ faculty: "ipt" },
		{ faculty: "fbt" },
		{ faculty: "fsl" },
		{ faculty: "tef" },
		{ faculty: "imz" },
	]
}
