import { uploadFile } from 'api/storage/markdown.api'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useGetFiles } from './useGetFiles'

export const useUploadNewFile = (markdown: string, fileName: string) => {
	const { t } = useTranslation()
	const { refetchFiles } = useGetFiles()

	const { mutate: uploadNewFile, isLoading: isFileCreating } = useMutation({
		mutationFn: async () => {
			const file = new Blob([markdown], {
				type: 'application/octet-stream'
			})
			const { error } = await uploadFile(file, fileName)

			if ((error as any)?.statusCode === '23505') {
				toast.error(t('fileNameExistsError'))
				return
			}
			toast.success(t('fileUploadSuccess'))
			refetchFiles()
		}
	})

	return {
		uploadNewFile,
		isFileCreating
	}
}
