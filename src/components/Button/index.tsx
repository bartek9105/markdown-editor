import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	title?: string
	renderIcon?: () => JSX.Element
}

const Button = ({
	title,
	renderIcon,
	className,
	...restProps
}: ButtonProps) => {
	return (
		<button {...restProps} className={cn(styles.button, className)}>
			{renderIcon?.()}
			{title}
		</button>
	)
}

export default Button
