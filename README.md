# ecm-web-components

This repo adds web components for the ECM project.

To use the components, install the npm package as following:

`npm i ecm-web-components`

To save it as a dependency run:

`npm i ecm-web-components --save`

Following are the components and their usages:

# MediaCard Component

To use the component simply import it in your following and use as following

`<media-card image="http://dummyurl.com" title="foo" desc="bar"/>`

### Supported attributes / props:

 - "image" accepts url to the link for image to be displayed
 
 - "desc" accepts a string to display as a description
 
 - "title" accepts string for component title
 
 You can pass in optional slot named "add-on" for anything other than these props. It will be added towards the end of the component. A good example is probably a button component.
 
 ## Link To Published NPM Package

https://www.npmjs.com/package/ecm-web-components
