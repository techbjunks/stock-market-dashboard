# Design Decisions in Project

1. Chart Library
    
    - Canvas based approach:

    Performance: Canvas generally offers better performance for rendering large datasets or complex visuals since it directly manipulates pixels. It's well-suited for real-time rendering and animations.

    Interactivity: Interactivity in canvas-based charts might require more custom code compared to SVG. You'll need to handle mouse events and coordinate interactions manually.

    Complexity: Canvas is more suitable for custom, pixel-level rendering. If your chart requires custom visualizations or complex rendering, canvas can be a good choice.

    Chart Types: Canvas is particularly useful for rendering chart types like heatmaps, real-time charts, and pixel-perfect custom visuals.