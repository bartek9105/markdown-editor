import ModeSwitch from 'components/ModeSwitch'
import Navbar from '../../components/Navbar'

const Home = () => {
	return (
		<>
			<Navbar fileName='welcome.md' />
			<ModeSwitch />
		</>
	)
}

export default Home
