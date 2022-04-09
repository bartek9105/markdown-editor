import styles from './ModeSwitch.module.scss'
import { ReactComponent as EyeIcon } from 'icons/Eye.svg'
import { ReactComponent as EyeCrossedIcon } from 'icons/EyeCrossed.svg'

export enum Mode {
	MARKDOWN = 'Markdown',
	PREVIEW = 'Preview'
}

type ModeSwitchProps = {
	mode: Mode
	setMode: (value: Mode) => void
}

const ModeSwitch = ({ mode = Mode.PREVIEW, setMode }: ModeSwitchProps) => {
	return (
		<div className={styles.container}>
			<span className={styles.modeHint}>{mode}</span>
			{mode === Mode.MARKDOWN ? (
				<EyeIcon
					className={styles.icon}
					onClick={() => setMode(Mode.PREVIEW)}
				/>
			) : null}
			{mode === Mode.PREVIEW ? (
				<EyeCrossedIcon
					className={styles.icon}
					onClick={() => setMode(Mode.MARKDOWN)}
				/>
			) : null}
		</div>
	)
}

export default ModeSwitch
