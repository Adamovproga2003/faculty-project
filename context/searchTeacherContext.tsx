'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type searchTContextType = {
	searchValue: string
	onChange: (name: string) => void
}

const searchTContextDefaultValues: searchTContextType = {
	searchValue: '',
	onChange: (name: string): void => {},
}

const SearchTeachersContext = createContext<searchTContextType>(
	searchTContextDefaultValues
)

export function useSearchTeachers() {
	return useContext(SearchTeachersContext)
}

type Props = {
	children: ReactNode
}

export function SearchTeachersProvider({ children }: Props) {
	const [searchValue, setValue] = useState<string>('')

	const onChange = (name: string): void => {
		setValue(name)
	}

	const value = {
		searchValue,
		onChange,
	}

	return (
		<>
			<SearchTeachersContext.Provider value={value}>
				{children}
			</SearchTeachersContext.Provider>
		</>
	)
}
