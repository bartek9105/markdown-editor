import { supabase } from 'config/supabase'

const BUCKET = 'markdown'

export const getFiles = async () => {
	const { data } = await supabase.storage.from(BUCKET).list()
	return data
}

export const downloadFile = async (file: string) => {
	const { data } = await supabase.storage.from(BUCKET).download(file)
	const result = (await data?.text()) as string
	return result
}

export const uploadFile = (file: Blob, fileName: string) => {
	return supabase.storage.from(BUCKET).upload(fileName, file, {
		cacheControl: '3600',
		upsert: false
	})
}

export const updateFile = async (file: Blob, fileToUpdate: string) => {
	const { data, error } = await supabase.storage
		.from(BUCKET)
		.update(fileToUpdate, file, {
			cacheControl: '3600',
			upsert: false
		})
	return data
}

export const removeFile = async (file: string) => {
	const { data, error } = await supabase.storage.from(BUCKET).remove([file])
}
