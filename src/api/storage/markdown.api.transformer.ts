export const transformFile = (file: File) => {
	const { name } = file

	return {
		...file,
		idName: name,
		name: name.split('_')[0]
	}
}
