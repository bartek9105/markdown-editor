import { getFiles } from 'api/storage/markdown.api'
import { useQuery } from 'react-query'

export const useGetFiles = () => {
	const { data: files, refetch: refetchFiles } = useQuery<any>({
		queryFn: () => getFiles()
	})

	return {
		files,
		refetchFiles
	}
}
