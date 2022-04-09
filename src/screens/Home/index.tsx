import ModeSwitch from 'components/ModeSwitch'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import styles from './Home.module.scss'
import MarkdownEditor from 'components/MarkdownEditor'

const Home = () => {
	const [markdown, setMarkdown] = useState('')
	return (
		<>
			<Navbar fileName='welcome.md' />
			<ModeSwitch />
			<div className={styles.container}>
				<textarea onChange={(e) => setMarkdown(e.target.value)} />
				<MarkdownEditor markdown={markdown} />
			</div>
		</>
	)
}

export default Home
