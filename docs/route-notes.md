# Route Notes

## References

- [Medium article](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)

## General Description

Routing refers to how a web app guides the user through the site as the user interacts with and navigates through the app.
- e.g from example.com => example.com/about

## Server-side

Server-side routing is fairly straight-forwards. As the user browses the site and clicks on navigational links, the server recieves a request from the client for a new page.

The server then fetches the page from it's database(or whatever) and then sends it back to the client, where it's loaded in. **This causes the entire page to refresh as it's a different file/ template.** An entirely new document is loaded and rendered in.

### Pros

- A server-side route only grabs the data that's needed
  - i.e the entire web app is split up into a bunch of different separate files, and only loads one at a time
- It's been the standard for a long time, so naturally SEO(search engine optimization) favors server-side rendering

### Cons

- Every request is a full-page refresh
  - certain parts of an app are going to be the same(header, footer, nav), so every request isn't super efficient
- Loading times might be an issue depending on the page/ internet speed

## Client-side

Client-side routes are handled entirely by the JavaScript that's loaded into the page. Rather than requesting a new page when the user navigates through the site, the app changes state while updating the URL via JS.

Said state changes could include the view changing, or new elements being displayed/ rendered in.

This means that the whole page won't refresh/ re-render from a server request, but rather certain components change or are rendered in as needed.

### Pros

- You aren't requesting an entirely new page so routing between views is is generally faster
- Since we aren't requesting a new page and refreshing, you can smooth out transitions and animations between views

### Cons

- The whole web app needs to be loaded in by the client as there won't be server requests for new views
- The user might not be navigating to all of the content of the app, so that's extra data downloaded
- It's more scripting, or requires a library since you're adding code for the JavaScript to manually change the URL
- SEO is not as great as server-side routing
  - there's work being done for it, but it's still not nearly as good as server-side routing

## Isomorphic apps

An isomorphic app tries to combine both of these routing/ rendering options. It's worthwhile to mention in short here as a result. In short, isomorphic apps can run on either the client or the server.

This is a lot simpler to achieve now with all of the JavaScript frameworks for both back-end and front-end(Node.js, Express.js, Angular.js, React.js, etc).
  - e.g you're back-end is written in .NET but you're front-end is React

Of course this doesn't mean that creating an isomorphic app is easy, you're still creating a full-stack app. But it's worth looking into.