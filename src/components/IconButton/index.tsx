import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './IconButton.module.scss'
import cn from 'classnames'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	PropsWithChildren<{}>

const IconButton = ({ children, className, ...restProps }: IconButtonProps) => {
	return (
		<button {...restProps} className={cn(styles.button, className)}>
			{children}
		</button>
	)
}

export default IconButton
