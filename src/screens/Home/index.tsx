import ModeSwitch from 'components/ModeSwitch'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import styles from './Home.module.scss'
import MarkdownEditor from 'components/MarkdownEditor'
import { Mode } from 'components/ModeSwitch'
import Textarea from 'components/Textarea'
import { useScreenType } from 'hooks/useScreenType'

const Home = () => {
	const [markdown, setMarkdown] = useState('')
	const [mode, setMode] = useState<Mode>(Mode.MARKDOWN)
	const { isMobile } = useScreenType()

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
			<Navbar fileName='welcome.md' />
			<ModeSwitch mode={mode} setMode={setMode} />
			<div className={styles.container}>
				{isMobile ? renderMobileLayout() : null}
				{!isMobile ? renderTabletOrBiggerLayout() : null}
			</div>
		</>
	)
}

export default Home
