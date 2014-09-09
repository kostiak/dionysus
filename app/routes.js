var User = require('../app/model/user');

module.exports = function (app, passport) {

    /*
    User.findOne({ 'email': 'a@a.a' }, function (err, user) {
        console.log('looking');
        console.log(user);
    });

    console.log(User.todos);
    */

    app.get('/api/test', function (req, res) {
        if (req.isAuthenticated()){
            var item = {
                text: "hello world"
            };
            var query = {'_id': req.user._id};
            var update = { $push: {todos: item} };
            User.findOneAndUpdate(query, update, function (err, doc) {
               if(err) {
                   console.log('got an error');
               } else {
                   console.log(doc);
               }

            });
            //req.user.todos.$push({'text': 'hello World'});
        }
        console.log('not auth');
        res.end();
    });

    app.post('/api/todo', function (req, res) {
        if (req.isAuthenticated()) {
            var item = {
                text: req.body.text
            };
            var query = {'_id': req.user._id};
            var update = { $push: {todos: item} };
            User.findOneAndUpdate(query, update, function (err) {
                if(err) {
                    console.log('got an error');
                } else {
                    res.end();
                }
            });
        }
    });

    app.post('/api/login',
        passport.authenticate('local-login'),
        function (req, res) {
            res.json(req.user);
        });
    app.post('/api/register',
        passport.authenticate('local-signup'),
        function (req, res) {
            res.json(req.user);
        });

    app.get('/api/user', function (req, res) {
        res.json(req.user);
    });

    app.get('/api/logout', function (req, res) {
        req.logout();
        res.end();
    });
};