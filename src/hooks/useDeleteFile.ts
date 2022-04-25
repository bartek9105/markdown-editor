import { useGetFiles } from 'hooks/useGetFiles'
import { removeFile } from 'api/storage/markdown.api'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

export const useDeleteFile = (selectedFile: string) => {
	const { refetchFiles } = useGetFiles()

	const { mutate: deleteFile } = useMutation({
		mutationFn: () => removeFile(selectedFile),
		onSuccess: () => {
			refetchFiles()
			toast.success('File deleted successfuly')
		}
	})
	return {
		deleteFile
	}
}
