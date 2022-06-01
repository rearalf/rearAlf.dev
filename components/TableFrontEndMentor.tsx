import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import CustomLink from './CustomLink '

type props = {
	th: string[]
	tr: {
		td1: string
		td2: {
			name: string
			link: string
		}
		td3: {
			name: string
			link: string
		}
	}
}

const TableFrontEndMentor = (props: props) => {
	return (
		<table className="table-fixed w-full mb-6">
			<thead>
				<tr>
					{props.th.map(t => (
						<th key={t} className="border p-4 font-medium text-base">
							{t}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="text-center border p-2 lg:p-4 text-base ">{props.tr.td1}</td>
					<td className="text-center border p-2 lg:p-4 text-base">
						<CustomLink href={props.tr.td2.link}>
							<>{props.tr.td2.name}</>
						</CustomLink>
					</td>
					<td className="text-center border p-2 lg:p-4 text-base">
						<CustomLink href={props.tr.td3.link}>
							<>{props.tr.td3.name}</>
						</CustomLink>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default TableFrontEndMentor
