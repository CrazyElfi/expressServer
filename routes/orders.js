const express = require('express');
const router = express.Router();
const { Order } = require('./../models');

router.get('/', function (req, res) {
    // User.findAll({
    //     include: [ Task ]
    // }).then(function(users) {
    //     res.render('task', {
    //         title: 'Sequelize: Express Example',
    //         users: users
    //     });
    // });
    Order.findAll({
        limit: 15,
        where: {
            UserId: 1
        }
    }).then((data) => {
        let tableData = data.map(e => e.get({ row: true }));
        console.table(tableData);
        res.json(tableData);
        // res.render('task', {
        //     title: 'Sequelize: Express Example',
        //     tasks: data
        // });
    });
});

router.get('/add', function (req, res) {
    console.log('Got body:', req.body);
    // console.log('Got body:', req);

    Order.create({
        address: 'address',
        promoCode: 'promocode 999',
        comment: 'commentsss11',
        shipping: 'shipping mtheoids',
        name: 'name of wtf',
        email: 'mail@mail.ru',
        phone: 'phone',
        UserId: 1
    })
        .then((good) => {
            // res.json(good);
            // var msg = {
            //     message: 'form data loaded',
            //     status: 'ok',
            //     data: good
            // };
            res.json(good);
        });
});

module.exports = {
    name: 'orderRouter',
    urn: '/orders/',
    router:router,
};