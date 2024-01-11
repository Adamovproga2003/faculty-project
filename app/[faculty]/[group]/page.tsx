import { FACULTIES } from "@/app/page"
import List from "@/components/List/List"
import SearchGroup from "@/components/List/SearchGroup/SearchGroup"
import SearchTeacher from "@/components/List/SearchTeacher/SearchTeacher"
import { FC } from "react"
import { usePathname } from "next/navigation"

type Props = {
	params: {
		faculty: string
		group: string
	}
}

export default function Page({ params }: Props) {
	console.log(params)
	return (
		<main className="h-full p-24 max-[1024px]:p-20 max-[768px]:p-16 max-[640px]:p-12">
			<div className="grid max-[768px]:grid-rows-[1fr_3fr] gap-8">
				<div className="hidden max-[768px]:flex items-center justify-center flex-col text-center">
					<h1 className="text-6xl">
						{FACULTIES[params.faculty as keyof typeof FACULTIES]}
					</h1>
					<span className="text-2xl text-gray-300">
						{decodeURI(params.group)}
					</span>
				</div>
				<div>
					<div
						className="flex justify-center bg-indigo-500 text-3xl cursor-pointer animated 
                        hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50 mb-4
                        ">
						<SearchTeacher />
					</div>
					<div className="bg-white text-[#131C2E] overflow-y-auto h-[400px]">
						<List
							faculty={params.faculty}
							group={params.group}
							byTeachers={true}
							isShowType={false}
						/>
					</div>
				</div>
			</div>
		</main>
	)
}

// export async function generateStaticParams({
// 	params: { faculty },
// }: {
// 	params: { faculty: string }
// }) {
// 	const data = await fetch(
// 		`http://45.87.3.13:8000/all_groups/${faculty}/`
// 	).then(res => res.json())

// 	const groups = data.groups.slice(1).map((g: any) => g.name)

// 	return groups.map((g: any) => ({
// 		group: g,
// 	}))
// }
