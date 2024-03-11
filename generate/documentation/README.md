# Setting Up and Using the Generators

The generators provided should facilitate faster NextJS development.

## Activation

In order to set up the generators, they must be made executables. You can achieve this via a simple NPM command:

```bash
npm run generators-setup
```

## Usage

-   All commands must be executed from the root of the repo
-   All commands begin with `generate/`, followed by the name of the specific entity to create (e.g., `component`)
-   Commands have at most 2 required arguments; failure to include a required argument will result in an error message
-   Flags can be used with some commands for added functionality
-   To add a page, route, or group to the root of their respective folders, use `/` for the `{BASE_PATH}` variable (e.g., `generate/page / foo` will create the new page within the `src/app/foo` file path)
-   If a file path to page, route, or group contains parentheses or brackets, wrap the full path in double quotes (e.g., `generate/page "foo/(bar)" baz`)

Complete notes about all commands can be found in [their documentation](./COMMANDS.md).
