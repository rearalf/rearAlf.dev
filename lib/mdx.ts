import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import mdxPrism from 'mdx-prism'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

export const getFiles = async (type: string) => fs.readdirSync(path.join(root, 'data', type))

export const getFilesBySlug = async (type: string, slug: string) => {
	const mdxSource = fs.readFileSync(path.join(root, 'data', type, slug, 'index.mdx'), 'utf8')
	const { content, data } = await matter(mdxSource)
	const source = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [require('remark-code-titles')],
			rehypePlugins: [mdxPrism],
		},
	})
	return {
		source,
		frontmatter: {
			readdingTime: readingTime(content),
			slug: slug || null,
			...data,
		},
	}
}

export const getAllFilesFrontMatter = async (
	type: 'portfolios' | 'blogs',
): Promise<FilesTitle[]> => {
	const files = fs.readdirSync(path.join(root, 'data', type))
	return files.reduce((allPosts: any[], postSlug: string) => {
		const mdxSource = fs.readFileSync(
			path.join(root, 'data', type, postSlug, 'index.mdx'),
			'utf8',
		)
		const { data } = matter(mdxSource)
		return [
			{
				...data,
				slug: postSlug.replace('.mdx', ''),
			},
			...allPosts,
		]
	}, [])
}
