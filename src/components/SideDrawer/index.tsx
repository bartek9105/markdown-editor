import Logo from 'components/Logo'
import styles from './SideDrawer.module.scss'
import Button from 'components/Button'
import FileItem from 'components/FileItem'

type File = {
	name: string
	date: string
}

type SideDrawerProps = {
	files: File[]
	setSelectedFile: (fileName: string) => void
}

const SideDrawer = ({ files, setSelectedFile }: SideDrawerProps) => {
	return (
		<nav className={styles.container}>
			<Logo />
			<span className={styles.hint}>My documents</span>
			<Button title='New document' />
			<ul className={styles.filesList}>
				{files?.map(({ date, name }, index) => (
					<li key={index} onClick={() => setSelectedFile(name)}>
						<FileItem date={date} name={name} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SideDrawer
