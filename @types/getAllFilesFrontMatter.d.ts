type FilesTitle = {
	title: string
	description: string
	categories: { title: string; link: string }[]
	image: string
	date: string
	slug: string
	type: 'blog' | 'portfolio'
}
