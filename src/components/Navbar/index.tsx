import { ReactComponent as HamburgerIcon } from 'icons/Hamburger.svg'
import { ReactComponent as FileIcon } from 'icons/File.svg'
import { ReactComponent as TrashIcon } from 'icons/Trash.svg'
import { ReactComponent as DiskIcon } from 'icons/Disk.svg'
import styles from './Navbar.module.scss'
import Logo from 'components/Logo'
import IconButton from 'components/IconButton'
import Spinner from 'components/Spinner'
import Input from 'components/Input'
import { useTranslation } from 'react-i18next'

type NavbarProps = {
	fileName: string
	onMenuClick: () => void
	onSave: () => void
	isLoading: boolean
	onDelete: () => void
	setSelectedFile: (fileName: string) => void
}

const Navbar = ({
	fileName,
	onMenuClick,
	onSave,
	isLoading,
	onDelete,
	setSelectedFile
}: NavbarProps) => {
	const { t } = useTranslation()

	return (
		<nav className={styles.container}>
			<div className={styles.hamburgerIconContainer} onClick={onMenuClick}>
				<HamburgerIcon />
			</div>
			<div className={styles.content}>
				<div className={styles.fileDetails}>
					<div className={styles.logo}>
						<Logo />
					</div>
					<div className={styles.line}></div>
					<div className={styles.fileInfo}>
						<FileIcon />
						<div className={styles.fileNameContainer}>
							<span className={styles.fileHint}>{t('documentName')}</span>
							{fileName ? (
								<h6 className={styles.fileName}>{fileName}</h6>
							) : (
								<Input
									placeholder='Enter file name'
									onBlur={(e) => setSelectedFile(e.target.value)}
								/>
							)}
						</div>
					</div>
				</div>
				<div className={styles.icons}>
					<TrashIcon className={styles.trashIcon} onClick={onDelete} />
					<IconButton
						className={styles.iconButton}
						onClick={onSave}
						disabled={isLoading}
					>
						{isLoading ? <Spinner /> : <DiskIcon />}
					</IconButton>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
