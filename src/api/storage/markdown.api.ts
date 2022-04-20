import { supabase } from 'config/supabase'

export const getFiles = async () => {
	const { data } = await supabase.storage.from('markdown').list()
	return data
}

export const downloadFile = async (file: string) => {
	const { data } = await supabase.storage.from('markdown').download(`${file}`)
	const result = (await data?.text()) as string
	return result
}

export const uploadFile = async (file: Blob) => {
	await supabase.storage.from('markdown').upload('some.md', file, {
		cacheControl: '3600',
		upsert: false
	})
}

export const updateFile = async (file: Blob, fileToUpdate: string) => {
	const { data, error } = await supabase.storage
		.from('markdown')
		.update(`${fileToUpdate}`, file, {
			cacheControl: '3600',
			upsert: false
		})
	return data
}

export const removeFile = async (file: string) => {
	const { data, error } = await supabase.storage
		.from('markdown')
		.remove([`${file}`])
}
