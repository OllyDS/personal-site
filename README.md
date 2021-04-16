# My Personal Website

This project has been created using the Svelte framework, written in TypeScript.

I kept the application as simple and streamlined as possible, so there's no routing or js in css etc. This project was about trying out Svelte and learning a new framework rather than flexing my knowledge in a familiar framework such as React.

You can check out my website at https://www.ollydesousa.com


## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
