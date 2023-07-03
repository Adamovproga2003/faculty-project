"use client"
import { useSearchGroups } from "@/context/searchGroupContext"
import { FC, useState } from "react"

type Props = {}

const SearchGroup: FC<Props> = props => {
	const [isSearch, setSearch] = useState<boolean>(false)
	const { searchValue, onChange } = useSearchGroups()
	return (
		<>
			{!isSearch && (
				<button
					onClick={() => setSearch(true)}
					type="button"
					className="w-full p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 max-[390px]:text-2xl">
					Пошук групи
				</button>
			)}
			{isSearch && (
				<input
					onBlur={() => setSearch(false)}
					onChange={e => onChange(e.currentTarget.value)}
					value={searchValue}
					autoFocus
					type="text"
					placeholder="Пошук групи"
					className="w-full text-black p-4 max-[1024px]:p-3 max-[768px]:p-2 max-[640px]:p-1 rounded max-[390px]:text-2xl"
				/>
			)}
		</>
	)
}

export default SearchGroup
