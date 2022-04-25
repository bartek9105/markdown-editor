import { DEFAULT_LOCALE } from './../constants/i18n.constant'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLocale from 'locales/en.locale.json'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enLocale
		}
	},
	lng: DEFAULT_LOCALE
})

export { i18n }
