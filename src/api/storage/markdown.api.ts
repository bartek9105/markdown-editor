import { supabase } from 'config/supabase'

export const getFiles = async () => {
	const { data } = await supabase.storage.from('markdown').list('test')
	return data
}

export const downloadFile = async (file: string) => {
	const { data } = await supabase.storage
		.from('markdown')
		.download(`test/${file}`)
	return (await data?.text()) as string
}

export const uploadFile = async (file: Blob) => {
	await supabase.storage.from('markdown').upload('test/some.md', file, {
		cacheControl: '3600',
		upsert: false
	})
}

export const updateFile = async (file: Blob, fileToUpdate: string) => {
	console.log('file', file)
	console.log('filename', fileToUpdate)
	const { data, error } = await supabase.storage
		.from('markdown')
		.update(`test/${fileToUpdate}`, file, {
			cacheControl: '3600',
			upsert: false
		})
	return data
}
