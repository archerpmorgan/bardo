# Styling.md

document the styling pattern for this app, learn about styling for React in 2023

Decisions: 

component library: [material ui](https://mui.com/material-ui/getting-started/overview/), [headless ui](https://headlessui.com/)
styling library / pattern : ______

color palette:

![color palette](img/colors.png)

```css
/* CSS HEX */
--engineering-orange: #b80c09ff;
--indigo-dye: #0b4f6cff;
--process-cyan: #01baefff;
--ghost-white: #fbfbffff;
--rich-black: #040f16ff;

/* CSS HSL */
--engineering-orange: hsla(1, 91%, 38%, 1);
--indigo-dye: hsla(198, 82%, 23%, 1);
--process-cyan: hsla(193, 99%, 47%, 1);
--ghost-white: hsla(240, 100%, 99%, 1);
--rich-black: hsla(203, 69%, 5%, 1);

/* SCSS HEX */
$engineering-orange: #b80c09ff;
$indigo-dye: #0b4f6cff;
$process-cyan: #01baefff;
$ghost-white: #fbfbffff;
$rich-black: #040f16ff;
```