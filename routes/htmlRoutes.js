const path = require("path");

module.exports = function (app){

    // Both get route code handles when users 'visit' a page.
    // Each get route code directs to an HTML page
    app.get('/notes', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
};