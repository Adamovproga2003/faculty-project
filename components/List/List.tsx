import { useSearchTeachers } from "@/context/searchTeacherContext"
import { FC, use } from "react"
import ListClient from "./ListClient"
import axios from "axios"

export type Teacher = {
	id: number
	full_name: string
	type: "lecture" | "practice" | "both"
}

export type Groups = {
	id: number
	name: string
	teachers: Teacher[]
}

type Props = {
	faculty: string
	group?: string
	byTeachers: boolean
	isShowType?: boolean
}

async function getData(
	faculty: string,
	group: string | undefined,
	byTeachers = false
) {
	const res = await axios
		.get(
			`http://45.87.3.13:8000/${
				!group ? (byTeachers ? "all_teachers" : "all_groups") : "group"
			}/${faculty}${group ? `/${decodeURI(group)}` : ""}`,
			{ withCredentials: true }
		)
		.then(response => {
			console.log("response", response)
			return response
		})
		.catch(e => console.error(e.message))

	return res?.data || []
}

const ListServer: FC<Props> = ({
	faculty,
	group,
	byTeachers,
	isShowType = true,
}) => {
	const data = use(getData(faculty, group, byTeachers))
	if (data.length === 0)
		return (
			<div className="text-lg p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 h-full flex justify-center items-center">
				Помилка при компіляції
			</div>
		)

	const formattedData = byTeachers
		? data.teachers.slice(1)
		: data.groups.slice(1)
	if (formattedData.length === 0) {
		return (
			<div className="text-lg p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 h-full flex justify-center items-center">
				Поки що немає даних
			</div>
		)
	}

	return (
		<ListClient
			faculty={faculty}
			data={formattedData}
			byTeachers={byTeachers}
			isShowType={isShowType}
		/>
	)
}

export default ListServer
