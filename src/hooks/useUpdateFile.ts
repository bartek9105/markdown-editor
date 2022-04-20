import { updateFile } from 'api/storage/markdown.api'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

const updateFileContentQueryKey = 'updateFileContentQueryKey'

export const useUpdateFile = (markdown: string, selectedFile: string) => {
	const { mutate: updateFileContent, isLoading: isFileUpdating } = useMutation({
		mutationKey: updateFileContentQueryKey,
		mutationFn: () => {
			const file = new Blob([markdown], {
				type: 'application/octet-stream'
			})
			return updateFile(file, selectedFile)
		},
		onSuccess: () => {
			toast.success('File saved successfuly')
		}
	})

	return {
		updateFileContent,
		isFileUpdating
	}
}
