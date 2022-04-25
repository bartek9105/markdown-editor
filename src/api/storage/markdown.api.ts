import { supabase } from 'config/supabase.config'

const BUCKET_NAME = 'markdown'

export const getFiles = async () => {
	const { data } = await supabase.storage.from(BUCKET_NAME).list()
	return data
}

export const downloadFile = async (file: string) => {
	const { data } = await supabase.storage.from(BUCKET_NAME).download(file)
	const result = (await data?.text()) as string
	return result
}

export const uploadFile = (file: Blob, fileName: string) => {
	return supabase.storage.from(BUCKET_NAME).upload(fileName, file, {
		cacheControl: '3600',
		upsert: false
	})
}

export const updateFile = async (file: Blob, fileToUpdate: string) => {
	const { data, error } = await supabase.storage
		.from(BUCKET_NAME)
		.update(fileToUpdate, file, {
			cacheControl: '3600',
			upsert: false
		})
	return data
}

export const removeFile = async (file: string) => {
	const { data, error } = await supabase.storage
		.from(BUCKET_NAME)
		.remove([file])
}
