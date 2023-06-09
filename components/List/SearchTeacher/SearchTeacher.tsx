'use client'
import { useSearchTeachers } from '@/context/searchTeacherContext'
import { FC, useState } from 'react'

type Props = {}

const SearchTeacher: FC<Props> = props => {
	const [isSearch, setSearch] = useState<boolean>(false)
	const { searchValue, onChange } = useSearchTeachers()
	return (
		<>
			{!isSearch && (
				<button
					onClick={() => setSearch(true)}
					type='button'
					className='w-full p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1'>
					Пошук препода
				</button>
			)}
			{isSearch && (
				<input
					onBlur={() => setSearch(false)}
					onChange={e => onChange(e.currentTarget.value)}
					value={searchValue}
					autoFocus
					type='text'
					placeholder='Пошук препода'
					className='w-full text-black p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 rounded'
				/>
			)}
		</>
	)
}

export default SearchTeacher
