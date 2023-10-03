import DarkBtn from './DarkBtn';

export default function SideBar() {
	return <section id="sidebar" className="flex flex-col w-1/4 min-h-full h-full m-0 p-0 border-solid border-2 border-emerald-500 hover:w-1/2" style={{
		minWidth: '25vw',
		height: '100vh'
	}}>
		<div id="topbar" className="flex-auto">
			<DarkBtn />
		</div>
	</section>
}