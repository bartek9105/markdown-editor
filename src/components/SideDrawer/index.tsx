import Logo from 'components/Logo'
import styles from './SideDrawer.module.scss'
import Button from 'components/Button'
import FileItem from 'components/FileItem'
import { useClickAway } from 'react-use'
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideFromLeft } from 'animations/animations'

type File = {
	name: string
	date: string
}

type SideDrawerProps = {
	files: File[]
	setSelectedFile: (fileName: string) => void
	isOpen: boolean
	onClose: () => void
}

const SideDrawer = ({
	files,
	setSelectedFile,
	isOpen,
	onClose
}: SideDrawerProps) => {
	const ref = useRef<any>()

	useClickAway(ref, () => onClose())

	return (
		<AnimatePresence>
			{isOpen ? (
				<motion.aside className={styles.container} ref={ref} {...slideFromLeft}>
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
				</motion.aside>
			) : null}
		</AnimatePresence>
	)
}

export default SideDrawer
