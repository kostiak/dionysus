var User = require('../model/user');

module.exports = function (app) {


    app.get('/api/todo', function (req, res) {
        if (req.isAuthenticated()) {
            res.json(req.user.todos);
        } else {
            res.status(401);
            res.send('User not authenticated');
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
                if (err) {
                    console.log('Error in /api/todo: ', err);
                } else {
                    res.json(doc.todos);
                }
            });
        } else {
            res.status(401);
            res.send('User not authenticated');
        }
    });

    app.post('/api/todo/:todo_id', function (req, res) {
        if (req.isAuthenticated()) {
            var query = {"todos._id": req.params.todo_id };
            var update = { $set: {"todos.$.text": req.body.text}};
            User.findOneAndUpdate(query, update, function (err, doc) {
                if (err) {
                    console.log('Error in post /api/todo/todo_id: ', err);
                } else {
                    res.json(doc.todos);
                }
            });
        } else {
            res.status(401);
            res.send('User not authenticated');
        }
    });

    app.delete('/api/todo/:todo_id', function (req, res) {
        if (req.isAuthenticated()) {
            var query = {'_id': req.user._id};
            var update = { $pull: {todos: {'_id': req.params.todo_id }}};
            User.findOneAndUpdate(query, update, function (err, doc) {
                if (err) {
                    console.log('Error in delete /api/todo/todo_id: ', err);
                } else {
                    res.json(doc.todos);
                }
            });
        } else {
            res.status(401);
            res.send('User not authenticated');
        }
    });

};