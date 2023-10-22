import { ReactNode } from 'react';

export default function List({
	content,
	itemClass,
	listClass
}: {
	content: ReactNode[];
	itemClass?: string;
	listClass?: string;
}) {
	return (
		<ul className={listClass}>
			{content.map((item, index) => (
				<li className={itemClass} key={index}>
					{item}
				</li>
			))}
		</ul>
	);
}
