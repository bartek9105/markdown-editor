import { TextareaHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Textarea.module.scss'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = ({ className, ...restProps }: TextareaProps) => {
	return <textarea className={cn(styles.textarea, className)} {...restProps} />
}

export default Textarea
