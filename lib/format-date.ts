import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (date: string) =>
	format(parseISO(date), 'd MMMM, yyyy', {
		locale: es,
	})
