# Vite React App

This is a simple Vite-powered React application. It comes pre-configured with Jest for running tests.

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-vite-react-app.git
cd your-vite-react-app
```

2. **Install the dependencies**

```
npm install
```

3. **Run the development server**

```
npm run dev
```

## Running Tests

On the project root, run the following command:

```
npm run test
```

## Writing Tests

All test files should be placed in the `src/__tests__` directory. Jest will automatically discover and run these tests.

To create a new test file, follow this naming convention: `filename.test.js` or `filename.spec.js`.

Example test file:

```js
// src/__tests__/example.test.js

import { sum } from "../utils";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

For more information on writing tests with Jest, refer to the Jest documentation.
