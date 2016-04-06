# playcanvas-facebook
Plugin component for PlayCanvas which enables integration of the Facebook API.

## How to use

* Add the file `facebook-setup.js` to the root Entity of your appliction. (Note this plugin must be added to an Entity, not added to Script Priorities).
* In your application code listen for the application event `fb:init` to find out when the API is ready to use.

e.g.

```javascript
    app.on("fb:init", function () {
        // use API
        FB.login();
    }, this);`
```

## Example

There is an [Example Application][1] on PlayCanvas which shows you how to implement a simple login and retrieve information about the logged in user.

[1]: https://playcanvas.com/project/390998/overview/tutorial-facebook-api
