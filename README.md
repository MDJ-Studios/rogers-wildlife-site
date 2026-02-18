# Rogers Wildlife Center

## Developer notes

Chat widget behavior
- The leadconnector chat loader is lazy-loaded on first user interaction (click/touch/scroll/mousemove/keydown) with a fallback timer of 4 seconds.
- To change the widget, edit `src/pages/_app.js` and update the `data-widget-id` attribute where the loader script is appended.

Zeffy donation forms
- Buttons use the `zeffy-form-link` attribute to open donation forms in a modal iframe. The modal wiring is implemented in `_app.js`.

Notes
- Keep the chat loader single-injection inside `_app.js` to avoid duplicate behavior.
- If you need a different loading strategy (load on chat-button click), I can implement it.
