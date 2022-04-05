import { ReactComponent as HamburgerIcon } from 'icons/Hamburger.svg'
import { ReactComponent as FileIcon } from 'icons/File.svg'
import { ReactComponent as TrashIcon } from 'icons/Trash.svg'
import { ReactComponent as DiskIcon } from 'icons/Disk.svg'
import styles from './Navbar.module.scss'
import Logo from 'components/Logo'
import IconButton from 'components/IconButton'

type NavbarProps = {
	fileName: string
}

const Navbar = ({ fileName }: NavbarProps) => {
	return (
		<nav className={styles.container}>
			<div className={styles.hamburgerIconContainer}>
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
						<div>
							<span className={styles.fileHint}>Document Name</span>
							<h6 className={styles.fileName}>{fileName}</h6>
						</div>
					</div>
				</div>
				<div className={styles.icons}>
					<TrashIcon className={styles.trashIcon} />
					<IconButton className={styles.iconButton}>
						<DiskIcon />
					</IconButton>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
