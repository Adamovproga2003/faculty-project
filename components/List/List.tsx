import { useSearchTeachers } from '@/context/searchTeacherContext'
import { FC, use } from 'react'
import ListClient from './ListClient'

export type Teacher = {
	id: number
	full_name: string
	type: 'lecture' | 'practice' | 'both'
}

export type Groups = {
	id: number
	name: string
	teachers: Teacher[]
}

type Props = {
	params: string
	byTeachers: boolean
}

async function getData(params: string, byTeachers = false) {
	const res = await fetch(
		`http://185.206.213.102:8000/${
			byTeachers ? 'all_teachers' : 'all_groups'
		}/${params}`
	)
	if (!res.ok) {
		return {}
	}

	return res.json()
}

const ListServer: FC<Props> = ({ params, byTeachers }) => {
	const data = use(getData(params, byTeachers))
	if (data.length === 0) return <div>Помилка при компіляції</div>

	const formattedData = byTeachers
		? data.teachers.slice(1)
		: data.groups.slice(1)
	if (formattedData.length === 0) {
		return (
			<div className='text-lg p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 h-full flex justify-center items-center'>
				Поки що немає даних
			</div>
		)
	}

	return <ListClient data={formattedData} byTeachers={byTeachers} />
}

export default ListServer
