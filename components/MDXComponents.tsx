import CustomLink from './CustomLink '
import TableFrontEndMentor from './TableFrontEndMentor'
import Image from 'next/image'

const MDXComponents = {
	a: CustomLink,
	h1: (props: any) => (
		<h1
			className="flex items-center gap-2 text-3xl lg:text-5xl mb-6 flex-col lg:flex-row"
			{...props}
		/>
	),
	h2: (props: any) => <h2 className="text-2xl lg:text-4xl mb-5 mt-5" {...props} />,
	h3: (props: any) => <h3 className="text-lg lg:text-2xl mb-4 mt-4" {...props} />,
	h4: (props: any) => <h4 className="text-base lg:text-xl mb-3 mt-3" {...props} />,
	p: (props: any) => <p className="mb-3 text-base" {...props} />,
	ul: (props: any) => <ul className="flex flex-col gap-3 pl-5 mb-4 list-disc" {...props} />,
	ol: (props: any) => <ol className="flex flex-col gap-3 pl-5 mb-4 list-decimal" {...props} />,
	pre: (props: any) => <pre className={`${props.className}`}>{props.children}</pre>,
	TableFrontEndMentor,
	Image,
}

export default MDXComponents
