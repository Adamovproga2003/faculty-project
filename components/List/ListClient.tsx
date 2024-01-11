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
	isShowType: boolean
}

const validTypeNames = {
	lecture: "лектор",
	practice: "практик",
	both: "лектор & практик",
}

const ListClient: FC<Props> = ({ data, byTeachers, faculty, isShowType }) => {
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
							<div key={(item as Teacher).full_name + idx}>
								<div
									className="p-4 max-[1280px]:px-2 max-[1280px]:py-2  cursor-pointer
						hover:bg-indigo-600 group grid grid-cols-[1fr_auto] max-[1280px]:grid-cols-1 items-center gap-x-2">
									<h1 className="text-lg group-hover:text-white max-[390px]:text-base">
										{(item as Teacher).full_name}
									</h1>
									{isShowType && (
										<i className="text-slate-400 group-hover:text-white text-sm text-right max-[1280px]:text-left max-[390px]:text-xs">
											{validTypeNames[(item as Teacher).type]}
										</i>
									)}
								</div>
							</div>
						)
					}
				} else {
					if (!formatValue || (item as Groups).name.startsWith(formatValue)) {
						return (
							<div
								key={(item as Groups).name + idx}
								className="p-4 max-[1280px]:px-2 max-[1280px]:py-2 cursor-pointer
						hover:bg-indigo-600 hover:text-white grid grid-cols-[1fr_auto] max-[1280px]:grid-cols-1 items-center gap-x-2">
								<Link href={`/${faculty}/${(item as Groups).name}`}>
									<h1 className="text-lg max-[390px]:text-base">
										{(item as Groups).name}
									</h1>
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
