const orderByDate = (prev: { date: string }, current: { date: string }) =>
	parseInt(new Date(current.date).toDateString()) - parseInt(new Date(prev.date).toDateString())

export default orderByDate
