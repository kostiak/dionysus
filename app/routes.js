var User = require('../app/model/user');

module.exports = function (app, passport) {

    app.get('/api/todo', function (req, res) {
        if(req.isAuthenticated()){
            res.json(req.user.todos);
        } else {
            res.json();
        }
    });

    app.post('/api/todo', function (req, res) {
        if (req.isAuthenticated()) {
            var item = {
                text: req.body.text
            };
            var query = {'_id': req.user._id};
            var update = { $push: {todos: item} };
            User.findOneAndUpdate(query, update, function (err, doc) {
                if(err) {
                    console.log('got an error');
                } else {
                    res.json(doc.todos);
                }
            });
        }
    });

    app.delete('/api/todo/:todo_id', function (req, res) {
        if (req.isAuthenticated()) {
            var item = {
                text: req.body.text
            };
            var query = {'_id': req.user._id};
            var update = { $pull: {todos: {'_id': req.params.todo_id }}};
            User.findOneAndUpdate(query, update, function (err, doc) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(doc.todos);
                }
            });
        }
    });

    app.post('/api/login',
        passport.authenticate('local-login'),
        function (req, res) {
            res.json({
                email: req.user.email,
                password: req.user.password
            });
        });
    app.post('/api/register',
        passport.authenticate('local-signup'),
        function (req, res) {
            res.json({
                email: req.user.email,
                password: req.user.password
            });
        });

    app.get('/api/user', function (req, res) {
        if(req.isAuthenticated())
        {
            res.json({
                email: req.user.email,
                password: req.user.password
            });
        }
        else {
            res.json();
        }
    });

    app.get('/api/logout', function (req, res) {
        req.logout();
        res.end();
    });
};