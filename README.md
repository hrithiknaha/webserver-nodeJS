# webserver-nodeJS

A simple nodeJS application showing webservers.

## Partials in Handlebars

1. To use partials in Handlebars use `hbs.registerPartials(__dirname + '/views/partials'`, then store the partials in the respectives files with an appropiate filename.

2. To fetch partials content use `{{> filename}}`


## Helpers in Handlebars

1. To use helpers or functions in Handlebars use `hbs.registerHelper('helperName', function(){});`.

2. To use helpers use `{{}}`, Handlebars when `{{}}` is called first check for Helpers, and if no helpers is found then will check for piece of data.

3. For Helpers with arguments use `{{helper_name arguments}}`


### For Maintainance
Use Middleware without next(), for suspending the process.

