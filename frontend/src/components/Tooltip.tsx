import { ReactNode } from 'react';

export default function Tooltip({ children }: { children: ReactNode }) {
	return (
		<p className="p-2 rounded-xl bg-black/80 border-black border-4 text-white">
			{children}
		</p>
	);
}
