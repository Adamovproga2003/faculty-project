import Link from "next/link"

export const FACULTIES = {
	fbme: "ФБМІ",
	// ipp: "ВПІ",
	// fel: "ФЕЛ",
	// its: "ІТС",
	// ipt: "ФТІ",
	// fbt: "ФБТ",
	// fsl: "ФСП",
	tef: "ІАТЕ",
	// imz: "ІМЗ",
}

export default function Home() {
	return (
		<main className="h-screen p-24 max-[1024px]:p-20 max-[768px]:p-16 max-[640px]:p-12 max-[640px]:h-full">
			<div className="grid grid-cols-2 gap-8 justify-center items-center h-full max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[640px]:grid-cols-1">
				{Object.entries(FACULTIES).map(([abr, facultyName], idx) => (
					<div
						key={abr + idx}
						className="flex justify-center items-center h-full rounded-2xl
                        bg-indigo-500 text-3xl cursor-pointer animated 
                        hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50
                        max-[640px]:py-2">
						<Link
							className="w-full h-full rounded-2xl flex justify-center items-center text-7xl"
							href={`/${abr}`}>
							{facultyName}
						</Link>
					</div>
				))}
			</div>
		</main>
	)
}
