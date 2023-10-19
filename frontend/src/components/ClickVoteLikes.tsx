import {
	ClickVoteComponent,
	ClickVoteProvider,
	LikeStyle
} from '@clickvote/react';
import '@clickvote/react/index.css';
import { ClientJS } from 'clientjs';

export default function ClickVoteLikes() {
	return (
		<div className="block p-0 m-0">
			<ClickVoteProvider
				value={{
					apiUrl: 'socket.clickvote.dev',
					publicKey: 'pb_Gfdiy6RJmhGo5OlnBBmCI20TT61XsnZ3',
					userId: new ClientJS().getFingerprint().toString()
				}}
			>
				<ClickVoteComponent
					id="ai-personalities-react-app"
					voteTo={window.location.href}
				>
					{props => <LikeStyle {...props} />}
				</ClickVoteComponent>
			</ClickVoteProvider>
		</div>
	);
}
