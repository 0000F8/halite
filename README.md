# Halite

Halite is the design system behind [Salt](https://saltapp.ai), an end-to-end encrypted chat for humans and AI agents. It is faceted and plain-spoken: radius-0 rectangles, IBM Plex type, trust-blue, springy motion, and drawn characters on a dotted stage.

It ships two ways:

- **`css/halite.css`**: one framework-free stylesheet. Tokens are CSS custom properties (light and dark), every component is an `.h-*` class. Any HTML page, including a plugin an AI agent wrote for a Salt chat, can include it and look native.
- **`react/`**: the same components for React, on [react-aria-components](https://react-spectrum.adobe.com/react-aria/react-aria-components.html).

## Plain HTML

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="halite.css">

<body class="h-root">
  <button class="h-button">Send</button>
  <button class="h-button quiet">Not now</button>
</body>
```

Fonts are referenced, not bundled; without them the stack falls back to the system UI font. The theme follows `prefers-color-scheme`; force one with `<html data-theme="light">` or `"dark"`. Open `examples/index.html` for a gallery of everything below.

## React

```sh
npm install halite-ui react react-aria-components
```

```jsx
import "halite-ui/css";
import { HaliteRoot, Button, ListGroup, ListRow } from "halite-ui/react";

<HaliteRoot>
  <Button onPress={save}>Save</Button>
  <ListGroup>
    <ListRow title="Profile" subtitle="Name and photo" value="Ada" onPress={open} />
  </ListGroup>
</HaliteRoot>
```

## Components

| Class / component | Use |
| --- | --- |
| `.h-button` / `Button` | Primary action; `quiet`, `small`, `link`, `danger` variants (`tone` prop in React) |
| `.h-label` / `SectionLabel` | Uppercase section heading with an optional mono aside |
| `.h-field` + `.h-input` / `Field` | Label and filled input; `multiline` for a textarea |
| `.h-composer` / `Composer` | Input and action as one joined unit; `quiet` for the secondary form |
| `.h-chip`, `.h-chips` / `Chip`, `ChipGroup` | Small suggestion buttons |
| `.h-switch` / `Switch` | Square-knob toggle |
| `.h-group`, `.h-row` / `ListGroup`, `ListRow` | Grouped rows: icon, title, subtitle, value, chevron |
| `.h-option` / `Option` | Radio row with a springing check |
| `.h-tag` / `Tag` | Mono status tag; `brand` variant |
| `.h-avatar`, `.h-pres` / `Avatar`, `AvatarCluster` | Round tinted disc with optional presence dot |
| `.h-stage` / `Stage` | Tint glow over a dotted grid with a state tag (idle, busy) |
| `.h-hero` / `Hero` | Identity header: portrait, name, subtitle |
| `.h-qa`, `.h-quick` / `QuickAction`, `QuickRow` | Round icon actions with a caption |
| `.h-root` / `HaliteRoot` | Scope that applies the kit's resets, colours and font |

Tint any avatar, stage or hero with `--h-tint`.

## Principles

- Square corners. Only discs (avatars, dots, quick actions) are round, because they are shapes.
- Plain words. One short line per label; no jargon in the interface.
- Trust-blue stays the accent in both themes. Colour is decided once, in tokens, never in a component.
- Motion has weight but never gets in the way: springs for press and pop, and everything stops under `prefers-reduced-motion`.
- Built for humans and AI agents alike: a page that an agent writes should look as trustworthy as one a human does.

## Source of truth

Halite is developed inside Salt's app. This repository is published from it: `scripts/sync-from-salt.mjs` regenerates `css/` and `react/` from Salt's source (`npm run sync`, optionally with the path to a Salt web checkout). Changes land in Salt first; edits made here are overwritten on the next sync.

## License

MIT, copyright 0x0000F8.
