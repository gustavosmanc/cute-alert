# Cute Alert

<p>
  <a href="https://www.npmjs.com/package/cute-alert"><img src="https://img.shields.io/npm/v/cute-alert.svg" alt="NPM Version"></a>
</p>

> Simple open source JavaScript library that aims to provide beautiful alerts and toasts to your website. Alerts inspired by [Igor Ferrão de Souza](https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/)'s design.

Visit the [documentation](https://gustavosmanc.github.io/cute-alert/docs/) for more detailed instructions or [Storybook](https://gustavosmanc.github.io/cute-alert/storybook/) if you want to play around / check out the library.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Installation](#installation)
     - [Alerts](#alerts)
     - [Toasts](#toasts)
   - [Usage](#usage)
2. [TypeScript](#typescript)
3. [Contributing](#contributing)
   - [Setting up the project](#setting-up-the-project)
   - [Unit tests](#unit-tests)
   - [Setting up the docs](#setting-up-the-docs)

## Getting started

### Installation

```bash
npm install cute-alert
```

### Usage

#### Alerts

```ts
import { cuteAlert } from 'cute-alert'

cuteAlert({
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000,
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel'
})
```

> Check out the [documentation](https://gustavosmanc.github.io/cute-alert/docs/alerts/) for more detailed instructions.

#### Toasts

```ts
import { cuteToast } from 'cute-alert'

cuteToast({
  type: 'success',
  title: 'Title',
  description: 'Description',
  timer: 5000
})
```

> Check out the [documentation](https://gustavosmanc.github.io/cute-alert/docs/toasts/) for more detailed instructions.

## TypeScript

Cute alert has built-in TypeScript support and provides a set of default exported types that you can import as named imports into your project like:

```ts
import type {
  AlertOptions,
  ToastOptions,
  AlertResolveValue,
  ToastResolveValue,
  AlertResolve,
  ToastResolve
} from 'cute-alert'
```

## Contributing

Before pushing a PR, take into account the following checklist:

- [ ] I have linked an issue or discussion.
- [ ] I have added tests (if necessary).
- [ ] I have updated the documentation accordingly (if necessary).
- [ ] My commits are following the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/#summary).

### Setting up the project

1. Fork the repository and clone it.
2. Install the dependencies on the repository:

   ```bash
   npm install
   ```

3. Start storybook:

   ```bash
   npm run storybook
   ```

### Unit tests

Running unit tests:

```bash
npm run test
```

Updating snapshots:

```bash
npm run test:update-snapshots
```

Coverage:

```bash
npm run coverage
```

### Setting up the docs

> Make sure you have the latest [Ruby](https://www.ruby-lang.org/) version installed.

1. Open up your terminal and install the `bundler` gem on version `2.4.22`:

   ```bash
   gem install bundler -v 2.4.22
   ```

2. Go to the `docs` folder and install the dependencies:

   ```bash
   bundle install
   ```

3. Run `bundle exec jekyll serve` to serve the docs locally.
