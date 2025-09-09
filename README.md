

## Features

- **Browse Jobs:** Search and filter job listings with detailed information.
- **Apply & Track:** Apply for jobs and track application status (applied, interviewing, offered).
- **Job Management:** Post, edit, and manage jobs as a company.
- **Applicant Management:** View and manage applicants for each job.
- **Bookmark Jobs:** Save jobs for later review.
- **Interview Scheduling:** View interview dates and times.
- **Responsive UI:** Built with Mantine and Tailwind CSS for a seamless experience.
- **State Management:** Uses Redux Toolkit for scalable state handling.

---

## Project Structure

```
Job Portal/
├── public/                  # Static assets (images, icons)
├── src/
│   ├── App.tsx              # Main app component
│   ├── Baseurl.tsx          # API base URL
│   ├── Store.tsx            # Redux store setup
│   ├── index.css            # Global styles (Tailwind)
│   ├── main.tsx             # App entry point
│   ├── assets/              # Project-specific images/assets
│   ├── Components/          # UI components (Job cards, history, etc.)
│   │   └── JobHistory/      # Job history card and related components
│   ├── Data/                # Static data (e.g., JobData.tsx)
│   ├── Interfaces/          # TypeScript interfaces/types
│   ├── Pages/               # Page-level components (Home, Job Details, etc.)
│   ├── Services/            # Utilities (date formatting, API calls)
│   ├── Slices/              # Redux slices (state management)
│   └── websocket/           # WebSocket logic (if any)
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS config
├── vite.config.ts           # Vite config
└── tsconfig*.json           # TypeScript configs
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/job-portal.git
   cd job-portal
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

---

## Technologies Used

- **React** – UI library
- **TypeScript** – Type safety
- **Vite** – Fast build tool
- **Mantine** – UI components
- **Tailwind CSS** – Utility-first CSS
- **Redux Toolkit** – State management
- **Axios** – API requests
- **React Router** – Routing

---

## Customization

- **API Base URL:** Set in `src/Baseurl.tsx`
- **Job Data:** Example jobs in `src/Data/JobData.tsx`
- **Redux Store:** Configured in `src/Store.tsx`
- **Components:** See `src/Components/` for reusable UI elements

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Mantine UI](https://mantine.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tabler Icons](https://tabler.io/icons)

---

## Contact

For questions or support, open an issue or contact/babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
