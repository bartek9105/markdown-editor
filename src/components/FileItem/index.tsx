import { ReactComponent as FileIcon } from 'icons/File.svg'
import styles from './FileItem.module.scss'

type FileItemProps = {
	date: string
	name: string
}

const FileItem = ({ date, name }: FileItemProps) => {
	return (
		<div className={styles.container}>
			<FileIcon />
			<div className={styles.fileInfo}>
				<span className={styles.date}>{date}</span>
				<span className={styles.fileName}>{name}</span>
			</div>
		</div>
	)
}

export default FileItem
