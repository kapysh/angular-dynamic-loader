# angular-dynamic-loader
Dynamic loading resources for AngularJS

js/directives/loadctrl.directive.js is a directive that looks up a controller path with a given controller name, creates and injects an html script tag to load the resource, and transforms itself into an ng-controller on the fly.