import { popup } from 'animations/animations'
import Button from 'components/Button'
import Heading from 'components/MarkdownEditor/Heading'
import Spinner from 'components/Spinner'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useClickAway } from 'react-use'
import styles from './Modal.module.scss'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
	fileName: string
	isLoading: boolean
}

const Modal = ({
	isOpen,
	onClose,
	onConfirm,
	fileName,
	isLoading
}: ModalProps) => {
	const { t } = useTranslation()

	const ref = useRef<any>()
	useClickAway(ref, () => onClose())

	return (
		<AnimatePresence>
			{isOpen ? (
				<div className={styles.overlay}>
					<motion.div className={styles.container} {...popup} ref={ref}>
						<Heading level={4}>{t('deleteModal.title')}</Heading>
						<p className={styles.hint}>{t('deleteModal.hint', { fileName })}</p>
						{isLoading ? (
							<Spinner />
						) : (
							<Button title={t('deleteModal.button')} onClick={onConfirm} />
						)}
					</motion.div>
				</div>
			) : null}
		</AnimatePresence>
	)
}

export default Modal
