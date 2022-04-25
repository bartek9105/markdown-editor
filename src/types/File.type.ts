type Metadata = {
	size: number
	mimetype: string
	cacheControl: string
}

export type File = {
	name: string
	id: string
	updated_at: string
	last_accessed_at: string
	metadata: Metadata
	created_at: string
}
