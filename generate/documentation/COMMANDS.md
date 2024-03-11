# Commands Available

This suite of generators surfaces 6 core commands which can be combined with 15 possible flags to produce a complex collection of NextJS files and components. For instance, a `page` command exists to generate page within a specified file path that be designated as dynamic and asynchronous or even be given custom loading and error handling, if desired, all with a few additional flags.

## `component`

Creates a new React component file, along with a corresponding test suite, in the `src/components` folder based on the name provided by the `{COMPONENT_NAME}` variable.

```bash
generate/component {COMPONENT_NAME}
```

### Required Arguments

| Argument           | Description                                 | Type     | Example   |
| :----------------- | :------------------------------------------ | :------- | :-------- |
| `{COMPONENT_NAME}` | File name of React component, in kebab-case | `string` | `nav-bar` |

### Optional Flags

| Option     | Alias | Description                                  | Type      | Default |
| :--------- | :---- | :------------------------------------------- | :-------- | :------ |
| `--client` | `-c`  | Makes the React component a client component | `boolean` | `false` |

### Full Example Including Notes about Results

```bash
generate/component foo-bar -c
```

-   creates a `FooBar` React component
-   creates a test suite to exercise the `FooBar` React component
-   ensures component its attendant test suite are stored in the appropriate file path (`src/components`) as files in kebab-case with the necessary extensions (`foo-bar.tsx` and `foo-bar.test.tsx`, respectively)
-   since the client flag was provided, that means this component will be a _client_ component instead of the default _server_ component; as a result, the `'use client'` directive will appear at the top of the component's file

## `group`

Creates a new React component file, along with a corresponding test suite, in the `src/components` folder based on the name provided by the `{COMPONENT_NAME}` variable.

```bash
generate/page {BASE_PATH} {MAIN_FOLDER}
```

### Required Arguments

| Argument        | Description                                 | Type     | Example   |
| :-------------- | :------------------------------------------ | :------- | :-------- |
| `{BASE_PATH}`   | File name of React component, in kebab-case | `string` | `nav-bar` |
| `{MAIN_FOLDER}` | File name of React component, in kebab-case | `string` | `nav-bar` |

### Optional Flags

| Option        | Alias | Description                                  | Type      | Default |
| :------------ | :---- | :------------------------------------------- | :-------- | :------ |
| `--async`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--client`    | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--dynamic`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--error`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--loading`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--meta`      | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--not-found` | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--slot`      | `-c`  | Makes the React component a client component | `boolean` | `false` |

### Full Example Including Notes about Results

```bash
generate/page foo bar -d -a -m -e -l
```

-   creates a `FooBar` React component
-   creates a test suite to exercise the `FooBar` React component
-   ensures component its attendant test suite are stored in the appropriate file path (`src/components`) as files in kebab-case with the necessary extensions (`foo-bar.tsx` and `foo-bar.test.tsx`, respectively)
-   since the client flag was provided, that means this component will be a _client_ component instead of the default _server_ component; as a result, the `'use client'` directive will appear at the top of the component's file

## `page`

Creates a new React component file, along with a corresponding test suite, in the `src/components` folder based on the name provided by the `{COMPONENT_NAME}` variable.

```bash
generate/page {BASE_PATH} {MAIN_FOLDER}
```

### Required Arguments

| Argument        | Description                                 | Type     | Example   |
| :-------------- | :------------------------------------------ | :------- | :-------- |
| `{BASE_PATH}`   | File name of React component, in kebab-case | `string` | `nav-bar` |
| `{MAIN_FOLDER}` | File name of React component, in kebab-case | `string` | `nav-bar` |

### Optional Flags

| Option        | Alias | Description                                  | Type      | Default |
| :------------ | :---- | :------------------------------------------- | :-------- | :------ |
| `--async`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--client`    | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--dynamic`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--error`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--loading`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--meta`      | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--not-found` | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--slot`      | `-c`  | Makes the React component a client component | `boolean` | `false` |

### Full Example Including Notes about Results

```bash
generate/page foo bar -d -a -m -e -l
```

-   creates a `FooBar` React component
-   creates a test suite to exercise the `FooBar` React component
-   ensures component its attendant test suite are stored in the appropriate file path (`src/components`) as files in kebab-case with the necessary extensions (`foo-bar.tsx` and `foo-bar.test.tsx`, respectively)
-   since the client flag was provided, that means this component will be a _client_ component instead of the default _server_ component; as a result, the `'use client'` directive will appear at the top of the component's file

## `route`

Creates a new React component file, along with a corresponding test suite, in the `src/components` folder based on the name provided by the `{COMPONENT_NAME}` variable.

```bash
generate/page {BASE_PATH} {MAIN_FOLDER}
```

### Required Arguments

| Argument        | Description                                 | Type     | Example   |
| :-------------- | :------------------------------------------ | :------- | :-------- |
| `{BASE_PATH}`   | File name of React component, in kebab-case | `string` | `nav-bar` |
| `{MAIN_FOLDER}` | File name of React component, in kebab-case | `string` | `nav-bar` |

### Optional Flags

| Option        | Alias | Description                                  | Type      | Default |
| :------------ | :---- | :------------------------------------------- | :-------- | :------ |
| `--async`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--client`    | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--dynamic`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--error`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--loading`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--meta`      | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--not-found` | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--slot`      | `-c`  | Makes the React component a client component | `boolean` | `false` |

### Full Example Including Notes about Results

```bash
generate/page foo bar -d -a -m -e -l
```

-   creates a `FooBar` React component
-   creates a test suite to exercise the `FooBar` React component
-   ensures component its attendant test suite are stored in the appropriate file path (`src/components`) as files in kebab-case with the necessary extensions (`foo-bar.tsx` and `foo-bar.test.tsx`, respectively)
-   since the client flag was provided, that means this component will be a _client_ component instead of the default _server_ component; as a result, the `'use client'` directive will appear at the top of the component's file

## `service`

Creates a new React component file, along with a corresponding test suite, in the `src/components` folder based on the name provided by the `{COMPONENT_NAME}` variable.

```bash
generate/page {BASE_PATH} {MAIN_FOLDER}
```

### Required Arguments

| Argument        | Description                                 | Type     | Example   |
| :-------------- | :------------------------------------------ | :------- | :-------- |
| `{BASE_PATH}`   | File name of React component, in kebab-case | `string` | `nav-bar` |
| `{MAIN_FOLDER}` | File name of React component, in kebab-case | `string` | `nav-bar` |

### Optional Flags

| Option        | Alias | Description                                  | Type      | Default |
| :------------ | :---- | :------------------------------------------- | :-------- | :------ |
| `--async`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--client`    | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--dynamic`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--error`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--loading`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--meta`      | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--not-found` | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--slot`      | `-c`  | Makes the React component a client component | `boolean` | `false` |

### Full Example Including Notes about Results

```bash
generate/page foo bar -d -a -m -e -l
```

-   creates a `FooBar` React component
-   creates a test suite to exercise the `FooBar` React component
-   ensures component its attendant test suite are stored in the appropriate file path (`src/components`) as files in kebab-case with the necessary extensions (`foo-bar.tsx` and `foo-bar.test.tsx`, respectively)
-   since the client flag was provided, that means this component will be a _client_ component instead of the default _server_ component; as a result, the `'use client'` directive will appear at the top of the component's file

## `utility`

Creates a new React component file, along with a corresponding test suite, in the `src/components` folder based on the name provided by the `{COMPONENT_NAME}` variable.

```bash
generate/page {BASE_PATH} {MAIN_FOLDER}
```

### Required Arguments

| Argument        | Description                                 | Type     | Example   |
| :-------------- | :------------------------------------------ | :------- | :-------- |
| `{BASE_PATH}`   | File name of React component, in kebab-case | `string` | `nav-bar` |
| `{MAIN_FOLDER}` | File name of React component, in kebab-case | `string` | `nav-bar` |

### Optional Flags

| Option        | Alias | Description                                  | Type      | Default |
| :------------ | :---- | :------------------------------------------- | :-------- | :------ |
| `--async`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--client`    | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--dynamic`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--error`     | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--loading`   | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--meta`      | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--not-found` | `-c`  | Makes the React component a client component | `boolean` | `false` |
| `--slot`      | `-c`  | Makes the React component a client component | `boolean` | `false` |

### Full Example Including Notes about Results

```bash
generate/page foo bar -d -a -m -e -l
```

-   creates a `FooBar` React component
-   creates a test suite to exercise the `FooBar` React component
-   ensures component its attendant test suite are stored in the appropriate file path (`src/components`) as files in kebab-case with the necessary extensions (`foo-bar.tsx` and `foo-bar.test.tsx`, respectively)
-   since the client flag was provided, that means this component will be a _client_ component instead of the default _server_ component; as a result, the `'use client'` directive will appear at the top of the component's file
