import ReactMarkdown from 'react-markdown'
import Heading from './Heading'
import styles from './MarkdownEditor.module.scss'

type MarkdownEditorProps = {
	markdown: string
}

const MarkdownEditor = ({ markdown }: MarkdownEditorProps) => {
	return (
		<ReactMarkdown
			children={markdown}
			components={{
				h1: ({ node, ...props }) => <Heading {...props} level={1} />,
				h2: ({ node, ...props }) => <Heading {...props} level={2} />,
				h3: ({ node, ...props }) => <Heading {...props} level={3} />,
				h4: ({ node, ...props }) => <Heading {...props} level={4} />,
				h5: ({ node, ...props }) => <Heading {...props} level={5} />,
				h6: ({ node, ...props }) => <Heading {...props} level={6} />,
				p: ({ node, ...props }) => (
					<p {...props} className={styles.paragraph} />
				),
				ol: ({ node, ...props }) => (
					<ol {...props} className={styles.orderedList} />
				),
				ul: ({ node, ...props }) => (
					<ul {...props} className={styles.unorderedList} />
				),
				blockquote: ({ node, ...props }) => (
					<blockquote {...props} className={styles.blockquote} />
				),
				code: ({ node, ...props }) => (
					<code {...props} className={styles.code} />
				)
			}}
		/>
	)
}

export default MarkdownEditor
