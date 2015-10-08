/**
 * Created by arose on 10/8/15.
 */
var express = require('express');
var app = express();
var RedisStore = require('connect-redis')(express);

app.use(express.cookieParser());
app.use(express.session({store: new RedisStore({
    host: 'localhost',
    port: 6379,
    db: 2,
    pass: 'RedisPASS'
}),
    secret: 'iZUBOc6ckMaWeVpz'
}));

app.get('/hello', function(req, res) {
    if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }

    req.session.lastPage = '/hello';
    res.send('Hello World');
});

app.get('/radical', function(req, res) {
    if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }

    req.session.lastPage = '/radical';
    res.send('What a radical visit!');
});

app.get('/tubular', function(req, res) {
    if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }

    req.session.lastPage = '/tubular';
    res.send('Are you a surfer?');
});

app.listen(process.env.PORT || 8080);