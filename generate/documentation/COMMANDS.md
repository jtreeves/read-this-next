# Commands Available

This suite of generators surfaces 6 core commands which can be combined with 15 possible flags to produce a complex collection of NextJS files and components. For instance, a `page` command exists to generate a page for a specific URL endpoint that can be designated as dynamic and asynchronous or even be given custom loading and error handling, if desired, all with a few additional flags.

## `component`

Creates a new React component file, along with a corresponding test suite, in the `src/components` folder based on the name provided by the `{COMPONENT_NAME}` variable.

```bash
generate/component {COMPONENT_NAME}
```

### Required Arguments

| Argument           | Description                                 | Type     | Example   |
| :----------------- | :------------------------------------------ | :------- | :-------- |
| `{COMPONENT_NAME}` | File name of React component, in kebab-case | `string` | `foo-bar` |

### Optional Flags

| Option     | Alias | Description                                  | Type      | Default |
| :--------- | :---- | :------------------------------------------- | :-------- | :------ |
| `--client` | `-c`  | Makes the React component a client component | `boolean` | `false` |

### Example

```bash
generate/component foo-bar -c
```

-   creates a `FooBar` React component
-   creates a test suite to exercise the `FooBar` React component
-   ensures component and its attendant test suite are stored in the appropriate folder (`src/components`) as files in kebab-case with the necessary extensions (`foo-bar.tsx` and `foo-bar.test.tsx`, respectively)
-   since the client flag was provided, this component will be a _client_ component instead of the default _server_ component; as a result, the `'use client'` directive will appear at the top of the component's file

## `group`

Creates a new group directory (i.e., a directory with a name surrounded in parentheses) at the designated path within the `src/app` folder.

```bash
generate/group {BASE_PATH} {GROUP_NAME}
```

### Required Arguments

| Argument       | Description                                  | Type     | Example   |
| :------------- | :------------------------------------------- | :------- | :-------- |
| `{BASE_PATH}`  | Path within `app` folder (with slashes)      | `string` | `foo/bar` |
| `{GROUP_NAME}` | Name for the new group folder, in kebab-case | `string` | `foo-baz` |

### Optional Flags

N/A

### Example

```bash
generate/group foo/bar baz
```

-   creates a new `(baz)` folder within the `foo/bar` path
-   creates the `foo` and `bar` folders if they do not already exist
-   results in a new folder path: `src/app/foo/bar/(baz)`
-   user may now add other folders or files within the `(baz)` group folder

## `page`

Creates a new folder in the `src/app` folder within the file path specified by the `{BASE_PATH}` variable for a new UI route specified by the `{PAGE_NAME}` variable. Creates a new `page.tsx` file within that folder containing the core React component, along with a `layout.tsx` file for the wrapper React component and a `main.test.tsx` file containing a test suite for the entire route.

```bash
generate/page {BASE_PATH} {PAGE_NAME}
```

### Required Arguments

| Argument      | Description                              | Type     | Example   |
| :------------ | :--------------------------------------- | :------- | :-------- |
| `{BASE_PATH}` | Path within `app` folder (with slashes)  | `string` | `foo/bar` |
| `{PAGE_NAME}` | Name for the new UI route, in kebab-case | `string` | `foo-baz` |

### Optional Flags

| Option        | Alias | Description                                         | Type      | Default |
| :------------ | :---- | :-------------------------------------------------- | :-------- | :------ |
| `--async`     | `-a`  | Makes the page component asynchronous               | `boolean` | `false` |
| `--client`    | `-c`  | Makes the page component a client component         | `boolean` | `false` |
| `--dynamic`   | `-dy` | Makes the route dynamic (i.e., using brackets)      | `boolean` | `false` |
| `--error`     | `-e`  | Adds an `error.tsx` component to the route          | `boolean` | `false` |
| `--loading`   | `-l`  | Adds a `loading.tsx` component to the route         | `boolean` | `false` |
| `--meta`      | `-m`  | Adds a metadata section to the `layout.tsx` file    | `boolean` | `false` |
| `--not-found` | `-nf` | Adds a `not-found.tsx` component to the route       | `boolean` | `false` |
| `--slot`      | `-sl` | Makes the route a slot (i.e., using the `@` symbol) | `boolean` | `false` |

### Example

```bash
generate/page foo bar -dy -a -m -e -l
```

-   makes the `bar` route dynamic
-   creates a new `[bar]` folder within the `foo` path
-   creates the `foo` folder if it does not already exist
-   results in a new folder path: `src/app/foo/[bar]`
-   creates an asynchronous `BarPage` React component in the `page.tsx` file within the `[bar]` folder
-   creates a `BarLayout` React component in the `layout.tsx` file, with a metadata definition, within the `[bar]` folder
-   creates a `BarError` React component in the `error.tsx` file within the `[bar]` folder
-   creates a `BarLoading` React component in the `loading.tsx` file within the `[bar]` folder
-   creates a test suite to exercise the `bar` route in the `main.test.tsx` file within the `[bar]` folder

## `route`

Creates a new folder in the `src/app/api` folder within the file path specified by the `{BASE_PATH}` variable for a new non-UI route specified by the `{ROUTE_NAME}` variable. Creates a new `route.ts` file within that folder containing endpoint handlers for various HTTP verbs, along with a `route.test.ts` file containing a test suite to exercise the endpoint.

```bash
generate/route {BASE_PATH} {ROUTE_NAME}
```

### Required Arguments

| Argument       | Description                                  | Type     | Example   |
| :------------- | :------------------------------------------- | :------- | :-------- |
| `{BASE_PATH}`  | Path within `app/api` folder (with slashes)  | `string` | `foo/bar` |
| `{ROUTE_NAME}` | Name for the new non-UI route, in kebab-case | `string` | `foo-baz` |

### Optional Flags

| Option      | Alias | Description                                    | Type      | Default |
| :---------- | :---- | :--------------------------------------------- | :-------- | :------ |
| `--delete`  | `-de` | Adds a `DELETE` handler to the route           | `boolean` | `false` |
| `--dynamic` | `-dy` | Makes the route dynamic (i.e., using brackets) | `boolean` | `false` |
| `--get`     | `-g`  | Adds a `GET` handler to the route              | `boolean` | `false` |
| `--patch`   | `-pa` | Adds a `PATCH` handler to the route            | `boolean` | `false` |
| `--post`    | `-po` | Adds a `POST` handler to the route             | `boolean` | `false` |
| `--put`     | `-pu` | Adds a `PUT` handler to the route              | `boolean` | `false` |

### Example

```bash
generate/route foo bar -g -po -de
```

-   creates a new `bar` folder within the `foo` path
-   creates the `foo` folder if it does not already exist
-   results in a new folder path: `src/app/api/foo/bar`
-   adds a `GET` handler to the `route.ts` file in the `bar` folder
-   adds a `POST` handler to the `route.ts` file in the `bar` folder
-   adds a `DELETE` handler to the `route.ts` file in the `bar` folder
-   creates a test suite to exercise the `bar` route in the `route.test.ts` file within the `bar` folder

> [!NOTE]
> To include handlers for all 5 HTTP verbs, merely omit adding any of the HTTP-related flags to the command; adding any HTTP-related flags will automatically limit the handlers to only those corresponding to the flags

## `service`

Creates a new asynchronous function, along with a corresponding test suite, in the `src/services` folder based on the name provided by the `{SERVICE_NAME}` variable.

```bash
generate/service {SERVICE_NAME}
```

### Required Arguments

| Argument         | Description                                       | Type     | Example   |
| :--------------- | :------------------------------------------------ | :------- | :-------- |
| `{SERVICE_NAME}` | File name for asynchronous service, in kebab-case | `string` | `foo-bar` |

### Optional Flags

| Option     | Alias | Description                                          | Type      | Default |
| :--------- | :---- | :--------------------------------------------------- | :-------- | :------ |
| `--fetch`  | `-f`  | Uses the `fetch` method in the asynchronous function | `boolean` | `false` |
| `--server` | `-s`  | Makes the asynchronous function a server action      | `boolean` | `false` |

### Example

```bash
generate/service foo-bar -f -s
```

-   creates a new asynchronous `fooBar` function
-   creates a test suite to exercise the `fooBar` function
-   ensures the function uses the `fetch` method, including importing the existing utility function generate the options for `fetch`
-   since the server flag was provided, this function will be a _server_ action; as a result, the `'use server'` directive will appear at the top of the function's file

## `utility`

Creates a new synchronous function, along with a corresponding test suite, in the `src/utilities` folder based on the name provided by the `{UTILITY_NAME}` variable.

```bash
generate/utility {UTILITY_NAME}
```

### Required Arguments

| Argument         | Description                                      | Type     | Example   |
| :--------------- | :----------------------------------------------- | :------- | :-------- |
| `{UTILITY_NAME}` | File name for synchronous utility, in kebab-case | `string` | `foo-bar` |

### Optional Flags

N/A

### Example

```bash
generate/utility foo-bar
```

-   creates a new synchronous `fooBar` function
-   creates a test suite to exercise the `fooBar` function
