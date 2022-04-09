import styles from './Heading.module.scss'
import cn from 'classnames'
import { PropsWithChildren } from 'react'

type Level = 1 | 2 | 3 | 4 | 5 | 6

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const getHeadingElement = (level: Level) => {
	const headingElements: Record<Level, HeadingElement> = {
		1: 'h1',
		2: 'h2',
		3: 'h3',
		4: 'h4',
		5: 'h5',
		6: 'h6'
	}
	return headingElements[level]
}

type HeadingProps = PropsWithChildren<{
	level: Level
}>

const Heading = ({ level, children, ...restProps }: HeadingProps) => {
	const Element = getHeadingElement(level)

	return (
		<Element
			{...restProps}
			className={cn(styles.heading, {
				[styles.headingLevel1]: level === 1,
				[styles.headingLevel2]: level === 2,
				[styles.headingLevel3]: level === 3,
				[styles.headingLevel4]: level === 4,
				[styles.headingLevel5]: level === 5,
				[styles.headingLevel6]: level === 6
			})}
		>
			{children}
		</Element>
	)
}

export default Heading
