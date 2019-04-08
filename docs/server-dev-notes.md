# Server Side Development

## Table of Contents

- [General Description](#general-description)
- [References](#references)
- [Prequisite Knowledge](#prequisite-knowledge)
- [Backend vs Frontend](#backend-vs-frontend)
- [Applications](#applications)
  - [Data Storage and Delivery](##data-storage-and-delivery)
  - [Customized User Experience](##customized-user-experience)
  - [Controlled Access to Content](##controlled-access-to-content)
  - [Store Session/ State Information](##store-session/state-information)

## General Description

This doc is for notes on server-side development. As I started with front-end/ client-side development, this is worthwhile to have some notes on.

Note that this doc will alternate freely between server-side and backend and client-side and frontend.

## References

- [MDN Intro To Server-Side Dev](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
- [Express FAQ](https://expressjs.com/en/starter/faq.html)

Also worth reading the [Routing Notes](./route-notes.md) doc which is related to this.

## Prequisite Knowledge

If you do look into back-end development, it's recommended that you become familiar with some of or all of the following:

- HTTP requests/ CORS
- Databases(relational and non-relational databases)

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

## Applications

Server-side programming has a lot of applications, as there are numerous things that you don't necessarily want the client to handle. Server-side programs are built to *efficiently* deliver information for individual users for a better user experience.

You can use it to construct machine learning services, in order to recommend products to users(Amazon) based on client preferences.

You can use it to store account information and allow only authorized users to view and make transactions(Banks, Paypal).

There are more examples of the applications of server-side programming below.

### Data Storage and Delivery

Every single mildly dynamic website/ app has to store and fetch data of some kind, be it posts, account information, or product information. Having to store separate static pages for each and every product is not practical, as would having to create pages for each and every forum post.

Sever-side rendering instead, enables the developer to use databases to store information, and then dynamically construct a page from the data and from static files/ templates.

We're not limited to just fetching data from databases, we could also fetch test/ diagnostics results(think any number of CI tools), or data from communications services.

### Customized User Experience

Building off of the above, servers can easily store and use client information for customized user experiences. A simple example is saving credit card information or even Chrome allowing you to sync settings and bookmarks between different computers with your Google account.

Also as mentioned briefly above, you can build and run machine learning applications easily on a server(see Youtube, or Instagram's discover).

### Controlled Access to Content

You can also restrict what content users can access, and serve information that only authorized users are permitted to acess.

Facebook's privacy settings for instance is a big one.
- "Who can see your posts" and etc

Similarly Twitch.tv's channel moderator flag is a way to restrict access to the channel's chat moderating tools.

### Store Session/State Information

Developers can also make use of **sessions**, which lets a server store information on the current user of a site and send different responses depending on that information.

Basic uses include tracking whether or not a user has previously logged into a site already, or for newspaper sites, tracking how many articles a user has accessed.
