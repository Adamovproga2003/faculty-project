'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type searchGContextType = {
	searchValue: string
	onChange: (group: string) => void
}

const searchGContextDefaultValues: searchGContextType = {
	searchValue: '',
	onChange: (name: string): void => {},
}

const SearchGroupsContext = createContext<searchGContextType>(
	searchGContextDefaultValues
)

export function useSearchGroups() {
	return useContext(SearchGroupsContext)
}

type Props = {
	children: ReactNode
}

export function SearchGroupsProvider({ children }: Props) {
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
			<SearchGroupsContext.Provider value={value}>
				{children}
			</SearchGroupsContext.Provider>
		</>
	)
}
