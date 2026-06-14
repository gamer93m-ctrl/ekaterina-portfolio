# Fonts

The design uses **Neue Montreal** (PP Neue Montreal by Pangram Pangram — a
commercial font that can't be redistributed in this repo).

To render the site exactly as designed, drop these files here:

- `NeueMontreal-Regular.woff2`
- `NeueMontreal-Medium.woff2`

`styles.css` already references them via `@font-face`. Until they're present,
the site falls back to a neutral grotesk (Inter) so layout stays intact.
