import ModeSwitch from 'components/ModeSwitch'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import styles from './Home.module.scss'
import MarkdownEditor from 'components/MarkdownEditor'
import { Mode } from 'components/ModeSwitch'
import Textarea from 'components/Textarea'
import { useScreenType } from 'hooks/useScreenType'
import SideDrawer from 'components/SideDrawer'
import { useMutation, useQuery } from 'react-query'
import {
	downloadFile,
	getFiles,
	updateFile,
	uploadFile
} from 'api/storage/markdown.api'
import { toast } from 'react-toastify'

const Home = () => {
	const [markdown, setMarkdown] = useState('')
	const [mode, setMode] = useState<Mode>(Mode.MARKDOWN)
	const { isMobile } = useScreenType()
	const [selectedFile, setSelectedFile] = useState('test.md')
	const [isSideDrawerOpened, setIsSideDrawerOpened] = useState(false)

	const file = new Blob([markdown], {
		type: 'application/octet-stream'
	})

	const { mutate, isLoading: isFileUpdating } = useMutation({
		mutationFn: () => {
			return updateFile(file, selectedFile)
		},
		onSuccess: () => {
			toast.success('File saved successfuly')
		}
	})

	const { data: files } = useQuery<any>({
		queryFn: () => getFiles()
	})

	const { data: markdownData } = useQuery<any>(['something', selectedFile], {
		queryFn: () => downloadFile(selectedFile),
		onSuccess: () => setMarkdown(markdownData)
	})

	const renderTextArea = () => {
		return (
			<div className={styles.textArea}>
				<Textarea
					value={markdown}
					onChange={(e) => setMarkdown(e.target.value)}
				/>
			</div>
		)
	}

	const renderMarkdownPreview = () => {
		return (
			<div>
				<MarkdownEditor markdown={markdown} />
			</div>
		)
	}

	const renderMobileLayout = () => {
		return (
			<>
				{mode === Mode.PREVIEW ? renderMarkdownPreview() : null}
				{mode === Mode.MARKDOWN ? renderTextArea() : null}
			</>
		)
	}

	const renderTabletOrBiggerLayout = () => {
		return (
			<>
				{renderTextArea()}
				{renderMarkdownPreview()}
			</>
		)
	}

	const handleSetSelectedFile = (fileName: string) => {
		setSelectedFile(fileName)
		setIsSideDrawerOpened(false)
	}

	return (
		<>
			<SideDrawer
				files={files}
				setSelectedFile={handleSetSelectedFile}
				isOpen={isSideDrawerOpened}
				onClose={() => setIsSideDrawerOpened(false)}
			/>
			<Navbar
				fileName={selectedFile}
				onMenuClick={() => setIsSideDrawerOpened(true)}
				onSave={() => mutate()}
				isLoading={isFileUpdating}
			/>
			<ModeSwitch mode={mode} setMode={setMode} />
			<div className={styles.container}>
				{isMobile ? renderMobileLayout() : renderTabletOrBiggerLayout()}
			</div>
		</>
	)
}

export default Home
