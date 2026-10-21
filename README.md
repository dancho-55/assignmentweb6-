# Assignment 6 — jQuery

Student: Dancho 55

A simple website for practicing jQuery selectors, effects, DOM manipulation and animations. The mini project is an accordion FAQ. HTML, CSS and JavaScript are separated. No build tools are needed.

## Run

Open `index.html` in a browser. Internet access is required because jQuery 3.7.1 is loaded from the official CDN. Use the navigation bar to open all five parts. Open Developer Tools → Console to see `jQuery is ready!`.

## Pages and tasks

| Page | Tasks | Features |
| --- | --- | --- |
| index.html | 0–1 | CDN, document ready, console message, ID/class/tag selectors, text(), html(), css() |
| effects.html | 2–4 | hide(), show(), toggle(), fadeIn(), fadeOut(), fadeToggle(), slideUp(), slideDown(), slideToggle() |
| dom.html | 5–7 | append(), prepend(), remove(), attr(), live form values with val() and text() |
| animations.html | 8–10 | Size and position animation, sequential animations, combined animation |
| project.html | 11 | Accordion FAQ with slide animations |

The two SVG illustrations in assets/ were created for this project. Repeated animation clicks clear the old queue with stop(). Form values are displayed as text, not HTML.

## Publish using GitHub Pages

1. Check the student name above.
2. Create a GitHub repository, for example `assignment6-jquery`.
3. Upload the contents of this folder directly to the repository root. Keep assets/ as a folder. Commit the files.
4. Open repository Settings → Pages. Select deployment from a branch, branch `main`, folder `/ (root)`, then save.
5. Wait for deployment and open the website link shown by GitHub.
6. Check every page online. Submit the repository link in Moodle before the deadline. Keep the published website link in this README too.

Repository: [assignmentweb6-](https://github.com/dancho-55/assignmentweb6-)
Published website: [Open website](https://dancho-55.github.io/assignmentweb6-/)

## Alternative: Netlify

Upload this entire website folder using Netlify's manual deployment interface. No build command is needed. Check the deployed website and record the URL above. The assignment still requires a GitHub repository link.

## Manual checks

- Basics: click the button; two paragraphs change, bold content appears and list items turn blue.
- Effects: try every show/hide, fade and slide button, including repeated clicks.
- DOM: add at the start and end; remove until empty; add again. Switch the image twice. Change and open the link. Type a name and email and then erase them.
- Animations: start each animation, wait for completion and reset. The sequence must return to the original square.
- FAQ: open one answer, open another, then close it. Try keyboard Tab and Enter.
- Navigation: visit all five pages and check a narrow browser window.

## References

- https://api.jquery.com/
- https://www.w3schools.com/jquery/
