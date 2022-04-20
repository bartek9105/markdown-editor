import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...restProps }: InputProps) => {
	return <input className={styles.input} {...restProps} />
}

export default Input
