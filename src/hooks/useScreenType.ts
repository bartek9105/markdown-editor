import { useWindowSize } from 'react-use'

export const useScreenType = () => {
	const { width } = useWindowSize()
	const isMobile = width < 768

	return {
		isMobile
	}
}
