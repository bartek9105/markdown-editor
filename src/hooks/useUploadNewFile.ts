import { uploadFile } from 'api/storage/markdown.api'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useGetFiles } from './useGetFiles'

export const useUploadNewFile = (markdown: string, fileName: string) => {
	const { refetchFiles } = useGetFiles()

	const { mutate: uploadNewFile, isLoading: isFileCreating } = useMutation({
		mutationFn: async () => {
			const file = new Blob([markdown], {
				type: 'application/octet-stream'
			})
			const { error } = await uploadFile(file, fileName)

			if ((error as any)?.statusCode === '23505') {
				toast.error('File with this name already exists')
				return
			}
			toast.success('File was successfuly created')
			refetchFiles()
		}
	})

	return {
		uploadNewFile,
		isFileCreating
	}
}
