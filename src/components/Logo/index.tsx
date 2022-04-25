import { useTranslation } from 'react-i18next'
import styles from './Logo.module.scss'

const Logo = () => {
	const { t } = useTranslation()
	return <h1 className={styles.logo}>{t('appTitle')}</h1>
}

export default Logo
