import Navbar from '../../components/Navbar'
import { useEffect, useState } from 'react'
import SideDrawer from 'components/SideDrawer'
import Modal from 'components/Modal'
import MarkdownLayout from 'components/MarkdownLayout'
import { useDeleteFile } from 'hooks/useDeleteFile'
import { useGetFiles } from 'hooks/useGetFiles'
import { useUploadNewFile } from 'hooks/useUploadNewFile'
import { useUpdateFile } from 'hooks/useUpdateFile'
import { useGetFileMarkdown } from 'hooks/useGetFileMarkdown'

const Home = () => {
	const [selectedFileName, setSelectedFileName] = useState('')

	const [isSideDrawerOpened, setIsSideDrawerOpened] = useState(false)
	const [isDeleteFileModalOpen, setIsDeleteFileModalOpen] = useState(false)

	const { files } = useGetFiles()
	const { markdown, setMarkdown } = useGetFileMarkdown(selectedFileName)
	const { deleteFile, isFileDeleting } = useDeleteFile(selectedFileName)
	const { uploadNewFile, isFileCreating } = useUploadNewFile(
		markdown,
		selectedFileName
	)

	const { updateFileContent, isFileUpdating } = useUpdateFile(
		markdown,
		selectedFileName
	)

	const [isNewFile, setIsNewFile] = useState(false)

	useEffect(() => {
		if (files) setSelectedFileName(files[0]?.name)
	}, [files])

	const handleSetSelectedFile = (fileName: string) => {
		setSelectedFileName(fileName)
		setIsSideDrawerOpened(false)
	}

	const handleFileDelete = () => {
		deleteFile()
		setIsDeleteFileModalOpen(false)
		setSelectedFileName(files[0].name)
	}

	const handleCreateNewDocument = () => {
		setIsNewFile(true)
		setSelectedFileName('')
		setIsSideDrawerOpened(false)
	}

	const handleFileSave = () => {
		if (!isNewFile) {
			updateFileContent()
		}
		uploadNewFile()
	}

	return (
		<>
			<Modal
				isOpen={isDeleteFileModalOpen}
				onClose={() => setIsDeleteFileModalOpen(false)}
				onConfirm={() => handleFileDelete()}
				fileName={selectedFileName}
				isLoading={isFileDeleting}
			/>
			<SideDrawer
				files={files}
				setSelectedFileName={handleSetSelectedFile}
				isOpen={isSideDrawerOpened}
				onClose={() => setIsSideDrawerOpened(false)}
				onCreateNewDocument={() => handleCreateNewDocument()}
			/>
			<Navbar
				fileName={selectedFileName}
				setSelectedFile={setSelectedFileName}
				onMenuClick={() => setIsSideDrawerOpened(true)}
				onSave={() => handleFileSave()}
				isLoading={isFileUpdating || isFileCreating}
				onDelete={() => setIsDeleteFileModalOpen(true)}
			/>
			<MarkdownLayout markdown={markdown} setMarkdown={setMarkdown} />
		</>
	)
}

export default Home
