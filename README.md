# Task 15: Building a Mini Single-Page Application (SPA) Using Vanilla JavaScript
In this task, I architected a Single-Page Application (SPA) from scratch without using any external frameworks. By implementing a custom routing engine, I enabled fluid navigation and dynamic content injection while maintaining a consistent browser state.

## Key Accomplishments
* Client-Side Routing Engine: Developed a centralized router that maps URL paths to JavaScript-driven views. This allows the application to transition between "pages" instantly without the overhead of full-browser reloads.

* History API Integration: Leveraged history.pushState and the popstate event listener to synchronize the UI with the browser's address bar. This ensures that the back and forward buttons function exactly as a user would expect in a traditional multi-page site.

* Dynamic View Rendering: Modularized the content into reusable template strings. I implemented a rendering logic that clears the main container and injects the corresponding "view" based on the current route, mimicking the component lifecycle found in modern frameworks.

* UX Enhancement with Loading States: Integrated a simulated asynchronous loading sequence. By using a loading indicator during view transitions, I created a more realistic and polished "app-like" feel, managing user expectations during data processing.

* Event Delegation for Navigation: Utilized a global click listener with event delegation to intercept navigation attempts. This approach keeps the code clean and performant by managing all internal links through a single entry point while preventing default browser navigation.
