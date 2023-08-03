# Design Decisions in Project

1. Chart Library
    
    - Canvas based approach:

    Performance: Canvas generally offers better performance for rendering large datasets or complex visuals since it directly manipulates pixels. It's well-suited for real-time rendering and animations.

    Interactivity: Interactivity in canvas-based charts might require more custom code compared to SVG. You'll need to handle mouse events and coordinate interactions manually.

    Complexity: Canvas is more suitable for custom, pixel-level rendering. If your chart requires custom visualizations or complex rendering, canvas can be a good choice.

    Chart Types: Canvas is particularly useful for rendering chart types like heatmaps, real-time charts, and pixel-perfect custom visuals.

    Detailed Comparison between D3 vs Chart.js - https://docs.google.com/document/d/1d0b9xC_oo1Ssd7cqr91RfcYs0SF7wDqL5LZfsxN4EGk/edit

2. Styled Components

    styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.

    1. Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.

    2.No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

    3. Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.

    4. Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.

    5. Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.

    6. Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.