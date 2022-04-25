import { v4 as uuid } from 'uuid'

export const createFileNameWithId = (fileName: string) => {
	return `${fileName}_${uuid()}`
}
