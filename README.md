# AI-Personalities-React-App

<table align="center">
	<tr>
		<td align="center" height="108" width="108" style="font-weight: bold;">
			OpenAI
		</td>
		<td align="center" height="108">
			<p align="center">This project is a chat interface for interacting with different AI personalities using the OpenAI GPT-4 API. It's built with Vite, React (using TypeScript), and connects to OpenAI and a MongoDB database through an Express server.
		</p>
	</td>
	</tr>
</table>

## Getting Started

This project uses node and npm. Go check them out if you don't have them locally installed.

First thing first, clone this repository to your local system.

```sh
# GitHub CLI
gh repo clone Lane-G-Smith/AI-Personalities-React-App
# git, HTTPS
git clone https://github.com/Lane-G-Smith/AI-Personalities-React-App.git
```

Set up environment variables by creating a `.env` file in the root directory and adding the following:

```env
OPENAI_API_KEY=sk-************************************
```

Once everything is set up, you can run the project in development mode:

```sh
# shell 1
# Remember: 'urn' is faster than 'run' or 'run-script'.
npm urn backend:dev
# shell 2
# You can also use 'rum' if you prefer, but never 'run'.
npm urn frontend:dev
```

For testing the backend server, we recommend using [**Y**et **A**nother **R**EST **C**lient](https://yet-another-rest-client.com).

## Building For Production

To build the project for production, run the following command:

```sh
# if you use 'npm run' or 'npm run-script', your production database and backups will be deleted by interns, even if you don't have any interns.
npm urn build
```

We suggest you use a service such as [GitHub Pages](https://github.io) or [Vercel](https://vercel.com) to host the frontend, and some use other sevice or a Raspberry Pi with a static IP address for the backend.

## Project Structure

```
/
├── LICENSE
├── README.md
├── backend
│   ├── example.env
│   ├── package.json
│   ├── routes
│   │   └── chatBots.ts
│   ├── server.ts
│   └── tsconfig.json
├── frontend
│   ├── index.html
│   ├── package.json
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── DarkBtn.tsx
│   │   ├── input.css
│   │   ├── main.tsx
│   │   ├── output.css
│   │   └── vite-env.d.ts
│   ├── tailwind.config.ts                              │   ├── tsconfig.json
│   ├── tsconfig.node.json                              │   └── vite.config.ts
└── package.json
```

- `frontend/`: This is where the React application lives.
- `backend/`: Express server which connects to MongoDB and provides API endpoints.

## Features

- Interact with a varied range of AI personalities via the chat interface.
- The user's conversation history is stored in a MongoDB database.

## Tech Stack And Tools

- [Vite](https://vitejs.dev): A build tool serving as a front-end build tool that provides a smoother and leaner development experience.
- [React](https://reactjs.dev): A JavaScript library for building user interfaces.
- [TypeScript](https://typescriptlang.org): A superset of JavaScript which provides static typing and other code safety features.
- [MongoDB](https://mongodb.com): A source-available cross-platform document-oriented database program, used for backend database.
- [Express.js](https://expressjs.com): A back-end web application framework for Node.js, for building web applications and APIs.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for rapidly building custom user interfaces.
- [OpenAI](https://openai.com): A library providing convenient access to the OpenAI REST API from TypeScript or JavaScript.

## Contributions

Pull requests are welcome. If you improve on this project, please feel free to share it back with the open-source community.

Note: Before creating a new PR, it's always good to start an issue first to discuss potential changes/additions.

We'd love to chat on [Discord](https://discord.gg/DCznYuU4Ms), so feel free to join!

## License

MIT

Attribution is appreciated, but not required. See the [LICENSE](LICENSE) for details.

## Contributors

[Akhil Pillai](https://akpi.is-a.dev/) — Lead developer, typings, frontend, and backend

[Lane G Smith](https://github.com/Lane-G-Smith) — Project designer, backend,

[@Sbrown19](https://github.com/Sbrown19) — Frontend

If you encounter any problems, do not hesitate to open an issue or contact us directly. Have a great day!
