import { uploadFile } from 'api/storage/markdown.api'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

export const useUploadNewFile = (markdown: string) => {
	const { mutate: uploadNewFile } = useMutation({
		mutationFn: () => {
			const file = new Blob([markdown], {
				type: 'application/octet-stream'
			})
			return uploadFile(file)
		},
		onSuccess: () => {
			toast.success('File created successfuly')
		}
	})

	return {
		uploadNewFile
	}
}
