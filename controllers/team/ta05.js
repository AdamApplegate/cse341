
exports.getTA05 = (req, res, next) => {
    console.log('getTA05() - ' + req.session.counter);
    res.render('pages/teamPages/ta05', {
        title: 'Team Activity 05',
        path: '/team/ta05',
        style: req.session.style,
        counter: req.session.counter
    })
    req.session.style = false;
};

exports.postTA05 = (req, res) => {
    req.session.style = !req.session.style;
    res.redirect('/team/ta05');
};

exports.incrementCounter = (req, res) => {
    console.log('incrementCounter() - ' + req.session.counter);
    req.session.counter++;
    res.redirect('/team/ta05');
};

exports.decrementCounter = (req, res) => {
    console.log('decrementCounter() - ' + req.session.counter);
    req.session.counter--;
    res.redirect('/team/ta05');
};

exports.resetSession = (req, res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/team/ta05');
        }
    })
};