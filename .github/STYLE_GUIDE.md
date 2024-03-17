# Style Guide

## Naming Conventions

-   Use descriptive and meaningful names for variables, functions, classes, and types
-   Use camelCase for variables and function names
-   Use PascalCase for class names, type names, and interface names
-   Use uppercase snake case for constants
-   No unused variables, unless it's a parameter, in which case prefix it with an underscore (e.g., `_index`)

## Formatting

-   Use 4 spaces for indentation
-   Use single quotes for strings
-   Do not use semicolons to terminate statements
-   Do not use trailing commas
-   Use arrow functions (`() => {}`) over traditional function expressions (`function() {}`)
-   Use object shorthand when possible (`{ foo }` instead of `{ foo: foo }`)

## Modern JavaScript Practices

-   Use ES of CommonJS modules; if CommonJS is required for a file, make its extension `.cjs`
-   Use `import` and `export` for module imports and exports instead of `require`
-   Use `async`/`await` instead of `.then` chaining
-   Use `try`/`catch` blocks instead of `.catch` chaining
-   Never use `var` in variable declarations
-   Only use `let` in variable declarations if the variable's value will change
-   Prefer array destructuring and object destructuring over manual property access
-   Use template literals instead of concatenation for string interpolation
-   Prefer `Array.prototype` methods (`map`, `filter`, etc.) over traditional loops unless use case requires a traditional loop
-   Top-level functions should use function declarations, while inner functions should use arrow functions

## TypeScript Rules

-   Prefer interfaces for defining object shapes
-   Use type aliases for complex types or unions
-   Reuse types and interfaces, especially in definitions of other types and interfaces, to keep code DRY
-   Explicitly specify types in general instead of using type inference (e.g., `const name: string = 'Jackson'` instead of `const name = 'Jackson'`), including for certain React generics (e.g., `useState<string>('')` instead of `useState('')`)
-   Always provide explicit return types for functions and methods, even if `void`; the full signature should be typed (inputs and output)
-   Avoid using `any`
-   Use `TS` and `TSX` files instead of `JS` files as frequently as possible
-   In React components, use object destructuring (potentially in tandem with spread syntax) instead of a single `props` object for the parameters (e.g., `{ name, label, onChange }` instead of `props`)

## Code Structure

-   Break down complex functions into smaller functions, each focusing on a single responsibility
-   Isolate function into their own files
-   Keep files short (goal of within 100 lines, but none should be longer than 500 lines)
-   Use comments sparingly and prefer self-documenting code
