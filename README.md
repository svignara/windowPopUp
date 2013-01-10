# windowPopUp #

windowPopUp is just a simple script that allows you to pop up a site in a new window, specify the dimension and it centers to the device's screen.

## How to use it ##

To get it to work follow the steps below...

>1. Include the jquery library.
>2. Download and include windowPopUp.js, or copy and paste the code snippet into your script file or `<script>` tags.
>3. Add the `windowPopUp` class to your anchor tag.
>4. Add the width and height of your pop-up window into data-attributes called `data-popup-width` and `data-popup-height`, respectively.
>5. Your final anchor tag should look something like:
> > `<a class="windowPopUp" data-popup-width="768" data-popup-height="600" href="//svignara.github.com/">Click Me</a>`
**Make sure to include "//" in front of your link if it's external, if it's in the subdomain of the parent window you can simply link it straight to the page**

## How it works ##

>The script listens for the click event on an element with the `windowPopUP` class.
>
>It then extracts the data-attributes for width and height of the popup window specified, as well as the url from the href attribute.
>
>Then using the `window.screen.availWidth` and `window.screen.availHeight` properties, it gets the appropriate X,Y offset to center the window in the screen.
>
>It then uses the `window.open()` function with the specified and calculated parameters to trigger the pop up.

## Things to do ##

>Account for users that use dual-monitors
>
>~~Account for when the specified dimensions for pop-up exceed the dimensions of the screen.~~
>
>Could probably make this jQuery independent and purely javascript
