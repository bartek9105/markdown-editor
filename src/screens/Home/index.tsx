import ModeSwitch from 'components/ModeSwitch'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import styles from './Home.module.scss'
import MarkdownEditor from 'components/MarkdownEditor'
import { Mode } from 'components/ModeSwitch'
import Textarea from 'components/Textarea'
import { useScreenType } from 'hooks/useScreenType'
import SideDrawer from 'components/SideDrawer'
import { useQuery } from 'react-query'
import { downloadFile, getFiles } from 'api/storage/markdown.api'

const Home = () => {
	const [markdown, setMarkdown] = useState('')
	const [mode, setMode] = useState<Mode>(Mode.MARKDOWN)
	const { isMobile } = useScreenType()
	const [selectedFile, setSelectedFile] = useState('test.md')
	const [isSideDrawerOpened, setIsSideDrawerOpened] = useState(false)

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

	return (
		<>
			{isSideDrawerOpened ? (
				<SideDrawer files={files} setSelectedFile={setSelectedFile} />
			) : null}
			<Navbar
				fileName={selectedFile}
				onMenuClick={() => setIsSideDrawerOpened(true)}
			/>
			<ModeSwitch mode={mode} setMode={setMode} />
			<div className={styles.container}>
				{isMobile ? renderMobileLayout() : renderTabletOrBiggerLayout()}
			</div>
		</>
	)
}

export default Home
