# Server Side Development

## Table of Contents

- [General Description](#general-description)
- [References](#references)
- [Backend vs Frontend](#backend-vs-frontend)

## General Description

This doc is for notes on server-side development. As I started with front-end/ client-side development, this is worthwhile to have some notes on.

Note that this doc will alternate freely between server-side and backend and client-side and frontend.

## References

- [MDN Intro To Server-Side Dev](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
- [CodeBurst Medium Article](https://codeburst.io/getting-started-with-backend-development-bfd8299e22e8)
- [Express FAQ](https://expressjs.com/en/starter/faq.html)

Also worth reading the [Routing Notes](./route-notes.md) doc which is related to this.

## Backend vs Frontend

So if you start on learning front-end development first, most of the projects you end up making are static sites. You might end up making some API calls somewhere, but the content for the most part isn't going to change as represented by the below MDN image:

[![MDN Static Site diag](https://mdn.mozillademos.org/files/13841/Basic%20Static%20App%20Server.png)](https://mdn.mozillademos.org/files/13841/Basic%20Static%20App%20Server.png)

If you're just deploying to Github Pages, then Github is handling the back-end routing for the developer. The routing starts out similar to how static sites handle it, but depending on your dynamic content(templates, data from a database, etc) what the client recieves is different. In addition, the client may also make requests to add, update, or delete data depending on what the app does. See the below MDN image for a basic representation:

[![MDN Dynamic Site diag](https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png)](https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png)

## Languages used

For front-end development, you have zero control over what languages you write in. Everything ends up being compiled to HTML, CSS, and JavaScript as that is what browsers read. In addition the front-end developer has no control over what browser a user might be using, so the developer needs to keep browser compatability in mind(also what Babel.js tries to help with).

Back-end development is a lot more diverse as you have access to the server's OS. As a result the back-end of a web app can be written in:
- PHP
- Python
- JavaScript(Node.js)
- Ruby
- C#(.NET)
- Java

