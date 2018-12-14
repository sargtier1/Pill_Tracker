var exports = module.exports = {}

exports.signup = function (req, res) {

    res.render('signup');

}

exports.signin = function (req, res) {
    res.render('signin');

}

exports.dashboard = function (req, res) {

    res.render('/');

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

}

// this was the page we needed to use to have the special handlebars pages show up. Very Tricky to do so I'm glad we didn't 

