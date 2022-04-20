import MarkdownEditor from 'components/MarkdownEditor'
import Textarea from 'components/Textarea'
import styles from './MarkdownLayout.module.scss'
import { Mode } from 'components/ModeSwitch'
import { useScreenType } from 'hooks/useScreenType'

type MarkdownLayoutProps = {
	markdown: string
	setMarkdown: (markdown: string) => void
	mode: Mode
}

const MarkdownLayout = ({
	markdown,
	setMarkdown,
	mode
}: MarkdownLayoutProps) => {
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
		return <MarkdownEditor markdown={markdown} />
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
		<div className={styles.container}>
			{isMobile ? renderMobileLayout() : renderTabletOrBiggerLayout()}
		</div>
	)
}

export default MarkdownLayout
