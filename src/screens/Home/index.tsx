import ModeSwitch from 'components/ModeSwitch'
import Navbar from '../../components/Navbar'
import ReactMarkdown from 'react-markdown'

const Home = () => {
	const markdown = `# Hello, *world*!`
	return (
		<>
			<Navbar fileName='welcome.md' />
			<ModeSwitch />
			<ReactMarkdown children={markdown} />
		</>
	)
}

export default Home
