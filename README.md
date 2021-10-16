# .Net Core 6 Asp.Net Core Razor Pages Web site, Multipage application with TypeScript and WebPack

The idea is to show few concepts.
- TypeScript from NPM
- Client side libraries from NPM
- ES module imports for TypeScript and CSS
- Structure of Scripts is similar to structure of Views
- WebPack generates bundles per folders and generates them in wwwroot/ js or css folders
- WebPack generates uses source maps per bundle
- No JavaScript directry in Pages, instead just script reference Page specific generated bundle in wwwroot

For comfortable development, open the solution in Visual Studio (2022) or Visual Studio Code and in a terminal start:
```
cd src/web
npm run dev:build-watch
```
This will start watching over .ts scripts and generating bundles automatically.
