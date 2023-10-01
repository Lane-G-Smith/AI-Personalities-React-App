# AI-Personalities-React-App

<h1 align="center">AI-Personalities-React-App</h1>
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

First thing first, clone this repository to your local system.

```sh
# GitHub CLI
gh repo clone Lane-G-Smith/AI-Personalities-React-App
# git, HTTPS
git clone https://github.com/Lane-G-Smith/AI-Personalities-React-App.git
```

This project uses node and npm. Go check them out if you don't have them locally installed.

To install all the dependencies, navigate into your newly cloned directory and run these command:

```sh
npm i && cd frontend && npm i && cd ../backend && npm i && cd ..
```

Set up environment variables by creating a `.env` file in `backend/` and adding the following:

```env
OPENAI_API_KEY=<your OpenAI API key>
```

Once everything is set up, you can run the project:

```sh
# shell 1
cd backend
# Remember: 'urn' is faster than 'run' or 'run-script'.
npm urn dev
```

```sh
# shell 2
cd frontend
# You can also use 'rum' if you prefer, but never 'run'.
npm urn dev
```

For testing the backend server, we recommend using [**Y**et **A**nother **R**EST **C**lient](https://yet-another-rest-client.com).

## Building For Production

To build the project for production, run the following commands:

```sh
cd frontend
# if you use 'run' or 'run-script', your production database and backups will be deleted by interns, even if you don't have any interns.
npm urn build
```

We suggest you use a service such as [GitHub Pages](https://github.io) or [Vercel](https://vercel.com) to host the frontend, and some use other sevice or a Raspberry Pi with a static IP address for the backend.

## Project Structure

- `src/`: This is where the react application lives.
- `backend/`: Express server which connects to MongoDB and provides API endpoints.
- `public/`: This is where the static files are housed.

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

## License

MIT

~~If you try to distribute this code for personal gain, you are a monster.~~ Attribution is appreciated, but not required. See the [LICENSE](LICENSE) for details.

## Contributors

[Lane G Smith](https://github.com/Lane-G-Smith) — Lead Developer

[Akhil Pillai](https://akpi.is-a.dev/) — Typings, frontend, and backend

[@Sbrown19](https://github.com/Sbrown19) — Frontend

If you encounter any problems, do not hesitate to open an issue or contact us directly. Have a great day!
