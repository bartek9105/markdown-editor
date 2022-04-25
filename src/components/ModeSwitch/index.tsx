import styles from './ModeSwitch.module.scss'
import { ReactComponent as EyeIcon } from 'icons/Eye.svg'
import { ReactComponent as EyeCrossedIcon } from 'icons/EyeCrossed.svg'
import { useScreenType } from 'hooks/useScreenType'

export enum Mode {
	MARKDOWN = 'Markdown',
	PREVIEW = 'Preview'
}

type ModeSwitchProps = {
	mode: Mode
	setMode?: (value: Mode) => void
}

const ModeSwitch = ({ mode = Mode.PREVIEW, setMode }: ModeSwitchProps) => {
	const { isMobile } = useScreenType()

	return (
		<div className={styles.container}>
			<span className={styles.modeHint}>{mode}</span>
			{isMobile && mode === Mode.MARKDOWN ? (
				<EyeIcon
					className={styles.icon}
					onClick={() => setMode?.(Mode.PREVIEW)}
				/>
			) : null}
			{isMobile && mode === Mode.PREVIEW ? (
				<EyeCrossedIcon
					className={styles.icon}
					onClick={() => setMode?.(Mode.MARKDOWN)}
				/>
			) : null}
		</div>
	)
}

export default ModeSwitch
