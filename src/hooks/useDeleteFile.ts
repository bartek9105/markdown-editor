import { removeFile } from 'api/storage/markdown.api'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

export const useDeleteFile = (selectedFile: string) => {
	const { mutate: deleteFile } = useMutation({
		mutationFn: () => removeFile(selectedFile),
		onSuccess: () => {
			toast.success('File deleted successfuly')
		}
	})
	return {
		deleteFile
	}
}
