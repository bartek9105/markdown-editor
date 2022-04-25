import { useTranslation } from 'react-i18next'
import { useGetFiles } from 'hooks/useGetFiles'
import { removeFile } from 'api/storage/markdown.api'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

export const useDeleteFile = (selectedFile: string) => {
	const { t } = useTranslation()
	const { refetchFiles } = useGetFiles()

	const { mutate: deleteFile, isLoading: isFileDeleting } = useMutation({
		mutationFn: () => removeFile(selectedFile),
		onSuccess: () => {
			refetchFiles()
			toast.success(t('fileDeleteSuccess'))
		}
	})
	return {
		deleteFile,
		isFileDeleting
	}
}
