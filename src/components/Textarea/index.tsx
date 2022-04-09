import { TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.scss'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = ({ ...restProps }: TextareaProps) => {
	return <textarea className={styles.textarea} {...restProps} />
}

export default Textarea
