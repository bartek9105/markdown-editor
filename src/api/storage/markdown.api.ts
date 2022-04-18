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
