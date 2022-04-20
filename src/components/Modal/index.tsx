import { popup } from 'animations/animations'
import Button from 'components/Button'
import Heading from 'components/MarkdownEditor/Heading'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import { useClickAway } from 'react-use'
import styles from './Modal.module.scss'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
	fileName: string
}

const Modal = ({ isOpen, onClose, onConfirm, fileName }: ModalProps) => {
	const ref = useRef<any>()
	useClickAway(ref, () => onClose())

	return (
		<AnimatePresence>
			{isOpen ? (
				<div className={styles.overlay}>
					<motion.div className={styles.container} {...popup} ref={ref}>
						<Heading level={4}>Delete this document?</Heading>
						<p className={styles.hint}>
							Are you sure you want to delete the {`'${fileName}'`} document and
							its contents? This action cannot be reversed.
						</p>
						<Button title='Confirm & Delete' onClick={onConfirm} />
					</motion.div>
				</div>
			) : null}
		</AnimatePresence>
	)
}

export default Modal
