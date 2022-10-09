# Black_HP
https://eternal-dev-hp.vercel.app/

![CleanShot 2022-10-09 at 17 34 50@2x](https://user-images.githubusercontent.com/96198088/194746601-915b50ff-6d7d-43ee-8f42-b625bfdfd383.png)
## Stack
- [Next.js](https://nextjs.org/) - The React Framework
for Production
Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
- [Styled Components](https://styled-components.com/) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅
## Project structure
```
. Project Root
├── components
│   ├── Header
│   │   ├── index.jsx
│   │   └── style.js
│   ├── ItemContact
│   │   ├── index.jsx
│   │   └── style.js
│   ├── contactStyle.js
│   └── projectsStyle.js
├── next.config.js
├── package-lock.json
├── package.json
├── public
│   └── images
│       └── icon.jpeg
├── src
│   └── pages
│       ├── _app.jsx
│       ├── contact
│       │   └── index.jsx
│       ├── index.jsx
│       └── projects
│           └── index.jsx
└── styles
    ├── globals.css
    └── indexStyle.js
```
#### styled components 画面に遅れてstyleが当たるのを防ぐ
pages配下に、_document.jsx
```js:_document.jsx
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });
      };

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            { initialProps.styles }
            { sheet.getStyleElement() }
          </>
        ),
      }
    } finally {
      sheet.seal();
    }
  }
}
```
