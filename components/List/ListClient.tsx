"use client"
import { useSearchTeachers } from "@/context/searchTeacherContext"
import { FC } from "react"
import { Groups, Teacher } from "./List"
import { useSearchGroups } from "@/context/searchGroupContext"
import Link from "next/link"

type Props = {
	data: Teacher[] | Groups[] | []
	byTeachers: boolean
	faculty: string
}

const validTypeNames = {
	lecture: "лектор",
	practice: "практик",
	both: "лектор & практик",
}

const ListClient: FC<Props> = ({ data, byTeachers, faculty }) => {
	const { searchValue: searchTeacher } = useSearchTeachers()
	const { searchValue: searchGroup } = useSearchGroups()
	const formatValue = byTeachers
		? searchTeacher &&
		  searchTeacher.charAt(0).toUpperCase() + searchTeacher.slice(1)
		: searchGroup &&
		  searchGroup.charAt(0).toUpperCase() +
				searchGroup.charAt(1).toUpperCase() +
				searchGroup.slice(2).toLowerCase()

	return (
		<>
			{data.map((item, idx) => {
				if (byTeachers) {
					if (
						!formatValue ||
						(item as Teacher).full_name.startsWith(formatValue)
					) {
						return (
							<div
								key={(item as Teacher).full_name + idx}
								className="p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 cursor-pointer
						hover:bg-indigo-600 group flex justify-between items-center">
								<h1 className="text-lg group-hover:text-white">
									{(item as Teacher).full_name}
								</h1>
								<i className="text-slate-400 group-hover:text-white text-sm">
									{validTypeNames[(item as Teacher).type]}
								</i>
							</div>
						)
					}
				} else {
					if (!formatValue || (item as Groups).name.startsWith(formatValue)) {
						return (
							<div
								key={(item as Groups).name + idx}
								className="p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 cursor-pointer
						hover:bg-indigo-600 hover:text-white">
								<Link href={`/${faculty}/${(item as Groups).name}`}>
									<h1 className="text-lg">{(item as Groups).name}</h1>
								</Link>
							</div>
						)
					}
				}
			})}
		</>
	)
}

export default ListClient
