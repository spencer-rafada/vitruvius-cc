# VITLIB

Struggling to find what to read next? Get details about a book with a simple search with VITLIB.

[Live Demo](https://youtu.be/-eke6qkA82c) | [Website](https://vitruvius-cc.vercel.app/) | [Repository](https://github.com/spencer-rafada/vitruvius-cc)

![Home Demo](/public/home_demo.PNG)

![Mobile Demo](/public/home_mobile_demo.PNG)

### Built With

[Next.js](https://nextjs.org/)

[React](https://react.dev/)

[TypeScript](https://www.typescriptlang.org/)

[OpenLibrary Search API](https://openlibrary.org/dev/docs/api/search)

[GitHub Actions CI/CD](https://docs.github.com/en/actions)

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

[Radix UI](https://www.radix-ui.com/)

[Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- [npm](https://www.npmjs.com/). You can also install with [Node Version Manager](https://github.com/nvm-sh/nvm). This project requires Node.js 18.17 or later.

```
npm install npm@latest-g
```

### Installation

1. Clone the repository

```
git clone https://github.com/spencer-rafada/vitruvius-cc.git
cd vitruvius-cc
```

2. Install NPM Dependency Packages

```
npm install
```

3. Create .env.local in root directory and write a value for NODE_ENV ('development' | 'production')

```
NODE_ENV=development
```

_This helps with deploying the code to production_

### Scripts

#### `npm run dev`

Static Site Generation of the app. During testing, the app will fail if you hit dynamic endpoints. Here is a list of generatedStaticParams for dynamic endpoints.

/book/[olid] - The Hunger Games books will be covered.

/genre/[genre] - All of these genre are generated statically

```
[
    { key: 'fiction' },
    { key: 'novel' },
    { key: 'narrative' },
    { key: 'science' },
    { key: 'mystery' },
    { key: 'history' },
    { key: 'art' },
    { key: 'children' },
    { key: 'love' },
    { key: 'sci-fi' },
  ]
```

#### `npm run build`

Builds the app depending on the value of `NODE_ENV` environment variable

#### `npm start`

Need to run `npm run build` first. Generates the app that will be deployed in production.

This is more stable when testing dynamic routes.

#### `npm run test`

Runs all of the test with [Jest](https://jestjs.io/) and provide information about code coverages.

#### `npm run test:watch`

Watches files for changes and rerun tests related to changed files. Very useful script during development.

## Usage

In this video, I demonstrate all of the features available in VITLIB.

[Live Demo](https://youtu.be/-eke6qkA82c)

In this video, I demonstrate the process of creating VITLIB from planning to ideation to production.

[Planning to Ideation to Product](https://youtu.be/ysdX14R6lbw)

**[BETA]** In addition to the features said above, you can search for books using the url `https://vitruvius-cc.vercel.app/books/{enter book here}` which redirects you to the book details page

![URL Search Demo](/public/urlsearch_demo.PNG)

## Contributing

Any contribuitions you make are **highly appreciated.**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b name/feature-name`)
3. Commit your changes (`git commit -m 'Write meaningful commit`)
4. Push to the branch (`git push origin name/feature-name`)
5. Open a Pull Request

## Contact

Spencer Rafada - [neilspencerrafada@gmail.com](mailto:neilspencerrafada@gmail.com) - [Portfolio](https://spencerrafada.onrender.com/) - [LinkedIn](https://www.linkedin.com/in/spencer-rafada/)

Project Link - [Live Demo](https://vitruvius-cc.vercel.app/) - [Repository](https://github.com/spencer-rafada/vitruvius-cc)

## Acknowledgements

- Ismatulla Mansurov for giving me this great opportunity to showcase my skills for my application.

- Vitruvius Design + Build
