# React + TypeScript + Vite + SingleDoc Primer

## Purpose 

This primer is intended to serve as a starting point for projects that aim to produce a dynamic self-contained document with sophisticated enough logic to mandate the use of React. 
It's not supposed to be as lightweight as possible—instead, it's well structured. If you come from the Java/Spring world, you should feel at home. 
What you get is one possible way of integrating a sound set of tools commonly used to write UIs comfortably. As is, this build will assemble a single HTML document from your components.

## Getting Started

1. Clone
2. Run ```npm install``` inside your project dir to download all dependencies
3. Make it yours
   - Edit project name inside `./package.json`
   - Edit title and meta-information inside `./index.html`
   - Have a look at `./src/pages/Home.tsx` just to get an idea
4. Verify all unit tests pass by running ```npm run test```
5. Consider upgrading the versions of the dependencies
6. Off you go: ```npm run build```, ```npm run dev``` ... 

## Provided/Employed Features and Plugins

  - *Vite* as build tool  
  - *React* as one of the widely used front-end frameworks
  - *Typescript* for typesafe coding
  - *Vitest* for unit tests (incl. coverage analysis) 
     - Components
     - Services
     - Routing
     - Dependency Injection into Components and Services
  - *Inversify* for dependency injection
  - *SASS* for css preprocessing
  - *Routing* 
  - *ESLint*, *Prettier* to keep problems in check
  - Embedding of *SVG*s 
  - *SWC*
  - Inlining into a *single resulting file* 

## Sources and Inspiration taken from 

The incomplete list:

- [https://www.youtube.com/watch?v=7f-71kYhK00](https://www.youtube.com/watch?v=7f-71kYhK00)
- [https://www.youtube.com/watch?v=VaDZ4NS6dbY](https://www.youtube.com/watch?v=VaDZ4NS6dbY) 
- [https://vitest.dev/guide/](https://vitest.dev/guide/)
- [https://testing-library.com/docs/](https://testing-library.com/docs/)
- [https://testing-library.com/docs/queries/about/](https://testing-library.com/docs/queries/about/)
- [https://kentcdodds.com/blog/common-mistakes-with-react-testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- Our new best friend ChatGPT

## Known Issues

- There is a deprecation warning regarding ```punycode```when running the unit tests or building the project. I suggest ignoring it for now. More modern versions of the plugins/dependencies will come, and the solution will be easy.

## Author

Michael Andrássy

## License 

This work is licensed under a *Creative Commons Attribution 4.0 International* License. You are free to:

- *Share* copy and redistribute the material in any medium or format
- *Adapt* remix, transform, and build upon the material for any purpose, even commercially.

[https://creativecommons.org/licenses/by/4.0/deed.en](https://creativecommons.org/licenses/by/4.0/deed.en)


