import { downloadFile } from 'api/storage/markdown.api'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const getFileMarkdownQueryKey = 'getFileMarkdownQueryKey'

export const useGetFileMarkdown = (selectedFile: string) => {
	const [markdown, setMarkdown] = useState('')

	const { data: markdownData, isSuccess } = useQuery(
		[getFileMarkdownQueryKey, selectedFile],
		{
			queryFn: () => downloadFile(selectedFile)
		}
	)

	useEffect(() => {
		if (selectedFile && markdownData && isSuccess) {
			setMarkdown(markdownData)
		}
	}, [selectedFile, markdownData, isSuccess])

	return {
		markdown,
		setMarkdown
	}
}
