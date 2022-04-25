import MarkdownEditor from 'components/MarkdownEditor'
import Textarea from 'components/Textarea'
import styles from './MarkdownLayout.module.scss'
import ModeSwitch, { Mode } from 'components/ModeSwitch'
import { useScreenType } from 'hooks/useScreenType'
import { useState } from 'react'

type MarkdownLayoutProps = {
	markdown: string
	setMarkdown: (markdown: string) => void
}

const MarkdownLayout = ({ markdown, setMarkdown }: MarkdownLayoutProps) => {
	const [mode, setMode] = useState<Mode>(Mode.MARKDOWN)
	const { isMobile } = useScreenType()

	const renderTextArea = (modeType: Mode = mode) => {
		return (
			<div className={styles.column}>
				<ModeSwitch mode={modeType} setMode={setMode} />
				<Textarea
					className={styles.textarea}
					value={markdown}
					onChange={(e) => setMarkdown(e.target.value)}
				/>
			</div>
		)
	}

	const renderMarkdownPreview = (modeType: Mode = mode) => {
		return (
			<div className={styles.column}>
				<ModeSwitch mode={modeType} setMode={setMode} />
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
				{renderTextArea(Mode.MARKDOWN)}
				{renderMarkdownPreview(Mode.PREVIEW)}
			</>
		)
	}

	return (
		<div className={styles.container}>
			{isMobile ? renderMobileLayout() : renderTabletOrBiggerLayout()}
		</div>
	)
}

export default MarkdownLayout
