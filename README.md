# Tauri + Aurelia 2 Boilerplate application

This template should help get you started developing with Tauri using [Aurelia 2 framework](https://docs.aurelia.io), CSS/SCSS, Typescript, and Vite.

<img width="966" alt="image" src="https://github.com/glyad/au2-tauri-boilerplate/assets/4238205/afdcd0e6-6ac7-452d-9244-e8633f37e230">

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) + [Aurelia VSCode Extension](https://marketplace.visualstudio.com/items?itemName=AureliaEffect.aurelia)

## Getting Started

- Use the big green button "Use this template" in the upper right corner to create a copy of this repository.
- Clone your new repository to your local machine.
- Run `npm install` to install dependencies.
- Run `npm run tauri dev` to start the development server.
- Alternatively, if you want to run your app in browser (only), use `npm run dev`.
- NOTE: If you are allready running the app with Tauri, you don't need to rerun the `dev` script.
- In order to build the app, run `npm run tauri build --target=the_target`, where *the_target* one of the values from the list obtained running the command: `$rustc --print target-list`. Example: `npm run tauri build --target=x86_64-apple-darwin`.

## Want to learn more?

- [Tauri](https://tauri.app)
- [Aurelia 2](https://docs.aurelia.io)
- [Vite](https://vitejs.dev)
- [Typescript](https://www.typescriptlang.org/)

## The Roadmap

- [x] Create the minimalistic Tauri app with Vite and Aurelia 2.
- [ ] Add End-to-End tests.
- [ ] Add Github Actions for CI/CD, and continued application upgrade.
- [ ] Any other ideas? Please, create an issue or a pull request.

## License

[MIT License](https://github.com/glyad/au2-tauri-boilerplate/blob/main/LICENSE).

## Copyright

Copyright © 2024. David Kossoglyad.
