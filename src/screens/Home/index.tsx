import ModeSwitch from 'components/ModeSwitch'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import { Mode } from 'components/ModeSwitch'
import SideDrawer from 'components/SideDrawer'
import Modal from 'components/Modal'
import MarkdownLayout from 'components/MarkdownLayout'
import { useDeleteFile } from 'hooks/useDeleteFile'
import { useGetFiles } from 'hooks/useGetFiles'
import { useUploadNewFile } from 'hooks/useUploadNewFile'
import { useUpdateFile } from 'hooks/useUpdateFile'
import { useGetFileMarkdown } from 'hooks/useGetFileMarkdown'

const Home = () => {
	const [mode, setMode] = useState<Mode>(Mode.MARKDOWN)
	const [selectedFile, setSelectedFile] = useState('')

	const [isSideDrawerOpened, setIsSideDrawerOpened] = useState(false)
	const [isDeleteFileModalOpen, setIsDeleteFileModalOpen] = useState(false)

	const { markdown, setMarkdown } = useGetFileMarkdown(selectedFile)
	const { deleteFile } = useDeleteFile(selectedFile)
	const { files, refetchFiles } = useGetFiles()
	const { uploadNewFile } = useUploadNewFile(markdown)
	const { updateFileContent, isFileUpdating } = useUpdateFile(
		markdown,
		selectedFile
	)

	const handleSetSelectedFile = (fileName: string) => {
		setMarkdown('')
		setSelectedFile(fileName)
		setIsSideDrawerOpened(false)
	}

	const handleFileDelete = () => {
		deleteFile()
		setIsDeleteFileModalOpen(false)
		setSelectedFile('')
		refetchFiles()
	}

	const handleCreateNewDocument = () => {
		setSelectedFile('')
		setMarkdown('')
		setIsSideDrawerOpened(false)
	}

	return (
		<>
			<Modal
				isOpen={isDeleteFileModalOpen}
				onClose={() => setIsDeleteFileModalOpen(false)}
				onConfirm={() => handleFileDelete}
				fileName={selectedFile}
			/>
			<SideDrawer
				files={files}
				setSelectedFile={handleSetSelectedFile}
				isOpen={isSideDrawerOpened}
				onClose={() => setIsSideDrawerOpened(false)}
				onCreateNewDocument={() => handleCreateNewDocument}
			/>
			<Navbar
				fileName={selectedFile}
				setSelectedFile={setSelectedFile}
				onMenuClick={() => setIsSideDrawerOpened(true)}
				onSave={() => uploadNewFile()}
				isLoading={isFileUpdating}
				onDelete={() => setIsDeleteFileModalOpen(true)}
			/>
			<ModeSwitch mode={mode} setMode={setMode} />
			<MarkdownLayout
				markdown={markdown}
				setMarkdown={setMarkdown}
				mode={mode}
			/>
		</>
	)
}

export default Home
