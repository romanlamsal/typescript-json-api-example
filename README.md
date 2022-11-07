# Demo: Building type-safe APIs with TypeScript

Monorepo using pnpm with a backend, frontend and generated type-guards purely
from typescript type definitions. The generator is powered by the
awsome [typescript-json](https://github.com/samchon/typescript-json) library.

## What and Why

This demo shows how to build a monorepo with a (potentially publishable) package containing types + generated type
checks.

This comes in handy if you want to build a full app with typescript and add some low-maintenance type checking in
the backend or frontend. DX will also be greatly enhanced because all type checks are generated based on your already
existing type definitions, so you do not have to maintain two types of schemas.

## Run locally

Install deps via `pnpm install` and then run `pnpm dev`

This will first generate all necessary type checking functions in the `types` package and start backend and frontend for
you.

## Generating the type-guards

In this demo only one [ApiRequest](./packages/types/src/ApiRequest.ts) type is defined, which should be already enough. 
We have to use [ttypescript](https://github.com/cevek/ttypescript) (not a typo) and not skip the typescript compiler which
would be the case if we were to use `esbuild`-based bundlers. 
That's why we use `rollup` to bundle our types and guards (see [ApiRequest.isApiRequest](./packages/types/src/ApiRequest.ts)).

## Outlook

This demo uses only `TSON.is`. Check out the [docs for typescript-json](https://github.com/samchon/typescript-json)
because there are a lot more options
for validations.
