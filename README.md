
# Perfect-Paradise

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A mono repo containing various technologies to practice.


## 📝 Tech Stack
<p>
<img alt="Node" src="https://img.shields.io/badge/Node.js(v21)-43853D.svg?logo=node.js&logoColor=white" />
<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
<img alt="Nextjs" src="https://img.shields.io/badge/-Next-black?style=flat-square&logo=nextdotjs&logoColor=white" />
<img alt="Mono" src="https://img.shields.io/badge/-mono-black?style=flat-square&logo=nx&logoColor=white" />
<img alt="Tailwind" src="https://img.shields.io/badge/-tailwind-0066CC?style=flat-square&logo=tailwindcss&logoColor=4DFFFF" />
<img alt="Redux" src="https://img.shields.io/badge/Redux-593d88.svg?logo=redux&logoColor=white" />
</p>
  


## 💻 Run Locally

Clone the project

```bash
  git clone https://github.com/Perfect-Paradise/Perfect-Paradise.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run game-mate
```


## 📖 Docs

How to create a lib for app.

### Create Lib

Use the ![VSCode](https://img.shields.io/badge/VSC_Extension-007ACC?logo=visual-studio-code&logoColor=white) [NX Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) to create it.  

- All actions, including creation, moving, and deletion, are completed through **`generate`**.

- Additionally, we can create libraries for various frameworks here. If we take "app: game-mate" as an example, we will create a Next.js library.

![Imgur](https://imgur.com/BPCfxZf.gif)

- During the creation process, the Terminal will display the folder structure of the created content. You can verify if the **`folder structure`** is as expected before creating it.

💡 By the way, if you are not using VS Code or do not want to use extensions, you can also use the commands provided by NX. [@nx/next](https://nx.dev/nx-api/next)

### Lib Structure

Each app corresponds to a lib folder, which contains the libraries created by the team. Within each library, you need to create two folders: **`components`** and **`state`**.

- **`components`**: Responsible for managing UI components.

- **`state`**: Responsible for managing Redux state.

These files will ultimately be processed and exported via index.ts.

Example structure:

```plaintext
libs/
└── game-mate/ 
    └──my-lib/
        ├── src/
        │   ├── lib/
        │   │   ├── components/
        │   │   │   ├── MyComponent.tsx
        │   │   │   └── AnotherComponent.tsx
        │   │   └── state/
        │   │       ├── mySlice.ts
        │   │       └── apiSlice.ts
        │   ├── index.ts
```

💡 Additionally, the libs folder will have a shared folder where I will place common functions and interfaces.

Example structure:

```plaintext
libs/
├── game-mate 
└── shared
```

### Use Lib

#### Integrating Components and Reducers into Apps

- **`components`**: To add components to the app, simply import them into the designated `page.tsx` file of the `app`.

- **`state`**: Reducers exported from the `index.ts` file in the `lib` folder will be centrally listed in the `libs.config.ts` file of the app. This approach allows for direct inclusion of reducers in the `app`.

```bash
  export const libsReducers: LibReducerBase[] = [
    exampleReducers...🖋
  ];
```
## 🎨 Graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.


## 📝 Committing Code

When committing code, please use the following command:
```sh
npm run commit
```

This will provide a standardized format for writing commit messages.

