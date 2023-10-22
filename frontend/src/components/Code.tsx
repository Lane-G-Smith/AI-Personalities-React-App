import { ReactNode } from 'react';

export default function Code({
	children,
	className
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span
			className={`py-[0.125em] px-1 rounded-md bg-slate-400 text-black dark:text-white font-mono ${className}`}
		>
			{children}
		</span>
	);
}
