import List from '@/components/List/List'
import SearchGroup from '@/components/List/SearchGroup/SearchGroup'
import SearchTeacher from '@/components/List/SearchTeacher/SearchTeacher'
import { FC } from 'react'

type Props = {
	params: {
		faculty: string
	}
}

const Search: FC<Props> = props => {
	return (
		<main className='h-full p-24 max-[1024px]:p-20 max-[768px]:p-16 max-[640px]:p-12'>
			<div className='grid grid-cols-2 gap-8 max-[768px]:grid-cols-1'>
				<div className='grid gap-8'>
					<div
						className='flex justify-center bg-indigo-500 text-3xl cursor-pointer animated 
                        hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50
                        '>
						<SearchTeacher />
					</div>
					<div className='bg-white text-[#131C2E] overflow-y-auto h-[400px]'>
						<List params={props.params.faculty} byTeachers={true} />
					</div>
				</div>
				<div className='grid gap-8'>
					<div
						className='flex justify-center bg-indigo-500 text-3xl cursor-pointer animated 
                        hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50
                        '>
						<SearchGroup />
					</div>
					<div className='bg-white text-[#131C2E] overflow-y-auto h-[400px]'>
						<List params={props.params.faculty} byTeachers={false} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Search

export async function generateStaticParams() {
	const FACULTIES = [
		'fbme',
		'ipp',
		'fl',
		'fel',
		'its',
		'ipt',
		'imi',
		'fbt',
		'fsl',
		'fam',
		'tef',
		'imz',
	]

	return FACULTIES.map(name => ({
		params: name,
	}))
}
