import Logo from 'components/Logo'
import styles from './SideDrawer.module.scss'
import Button from 'components/Button'
import FileItem from 'components/FileItem'
import { useClickAway } from 'react-use'
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideFromLeft } from 'animations/animations'
import { File } from 'types/File.type'
import { formatDate } from 'utils/dateFormat'
import { useTranslation } from 'react-i18next'

type SideDrawerProps = {
	files?: File[]
	setSelectedFileName: (fileName: string) => void
	isOpen: boolean
	onClose: () => void
	onCreateNewDocument: () => void
}

const SideDrawer = ({
	files,
	setSelectedFileName,
	isOpen,
	onClose,
	onCreateNewDocument
}: SideDrawerProps) => {
	const { t } = useTranslation()

	const ref = useRef<any>()

	useClickAway(ref, () => onClose())

	return (
		<AnimatePresence>
			{isOpen ? (
				<motion.aside className={styles.container} ref={ref} {...slideFromLeft}>
					<div className={styles.topContainer}>
						<Logo />
						<span className={styles.hint}>{t('myDocuments')}</span>
						<Button title='New document' onClick={onCreateNewDocument} />
					</div>
					<ul className={styles.filesList}>
						{files?.map(({ created_at, name }, index) => (
							<li key={index} onClick={() => setSelectedFileName(name)}>
								<FileItem date={formatDate(created_at)} name={name} />
							</li>
						))}
					</ul>
				</motion.aside>
			) : null}
		</AnimatePresence>
	)
}

export default SideDrawer
