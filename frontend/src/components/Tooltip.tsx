import { ReactNode } from 'react';

export default function Tooltip({ children }: { children: ReactNode }) {
	return (
		<p className="py-4 px-2 rounded-lg bg-black/75 text-white">{children}</p>
	);
}
