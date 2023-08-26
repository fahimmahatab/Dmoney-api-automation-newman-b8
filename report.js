const newman = require('newman');

newman.run({
    //collection: require('.collection/dmoney.json),
    collection:'https://api.postman.com/collections/29168451-54ec750d-79bf-4aaf-8ef3-020375dc17d6?access_key=PMAT-01H8P3CQZXXF7QA53K4YQXBWSW',
    //environment:require('.collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', //If not specified, the file will be written to 'newman/' in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete');
}

);