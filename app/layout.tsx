import { SearchTeachersProvider } from '@/context/searchTeacherContext'
import './globals.css'
import { Roboto } from 'next/font/google'
import { SearchGroupsProvider } from '@/context/searchGroupContext'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata = {
	title: 'Faculty Project',
	description: 'Results of KPI faculty poll',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ua'>
			<body className={roboto.className}>
				<SearchGroupsProvider>
					<SearchTeachersProvider>{children}</SearchTeachersProvider>
				</SearchGroupsProvider>
			</body>
		</html>
	)
}
