import { updateFile } from 'api/storage/markdown.api'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

const updateFileContentQueryKey = 'updateFileContentQueryKey'

export const useUpdateFile = (markdown: string, selectedFile: string) => {
	const { t } = useTranslation()

	const { mutate: updateFileContent, isLoading: isFileUpdating } = useMutation({
		mutationKey: updateFileContentQueryKey,
		mutationFn: () => {
			const file = new Blob([markdown], {
				type: 'application/octet-stream'
			})
			return updateFile(file, selectedFile)
		},
		onSuccess: () => {
			toast.success(t('fileSaveSuccess'))
		}
	})

	return {
		updateFileContent,
		isFileUpdating
	}
}
