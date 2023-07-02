import List from "@/components/List/List"
import SearchGroup from "@/components/List/SearchGroup/SearchGroup"
import SearchTeacher from "@/components/List/SearchTeacher/SearchTeacher"
import { FC } from "react"

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
			<div className="grid gap-8">
				<div
					className="flex justify-center bg-indigo-500 text-3xl cursor-pointer animated 
                        hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50
                        ">
					<SearchTeacher />
				</div>
				<div className="bg-white text-[#131C2E] overflow-y-auto h-[400px]">
					<List
						faculty={params.faculty}
						group={params.group}
						byTeachers={true}
					/>
				</div>
			</div>
		</main>
	)
}

export function generateStaticParams() {
	const faculties = [
		"fbme",
		"ipp",
		"fel",
		"its",
		"ipt",
		"fbt",
		"fsl",
		"tef",
		"imz",
	]

	return faculties.map(async faculty => {
		const data = await fetch(
			`http://185.206.213.102:8000/all_groups/${faculty}/`
		).then(res => res.json())
		const groups = data.groups.slice(1).map((g: any) => g.name)
		return { faculty, group: groups }
	})
}
