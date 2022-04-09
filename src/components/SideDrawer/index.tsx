import Logo from 'components/Logo'
import styles from './SideDrawer.module.scss'
import Button from 'components/Button'
import FileItem from 'components/FileItem'

const files = [
	{
		date: '01 April 2022',
		name: 'welcome.md'
	},
	{
		date: '01 April 2022',
		name: 'welcome.md'
	}
]

const SideDrawer = () => {
	return (
		<nav className={styles.container}>
			<Logo />
			<span className={styles.hint}>My documents</span>
			<Button title='New document' />
			<ul className={styles.filesList}>
				{files.map(({ date, name }, index) => (
					<li key={index}>
						<FileItem date={date} name={name} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SideDrawer
