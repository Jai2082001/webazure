const Product = require('../../model/sequlizeModel')

const indexControl = (req, res) => {
    Product.create({
        id: 20,
        title: 'title',
        price: 20,
      })
        .then(result => {
          // console.log(result);
          console.log('Created Product');
        })
        .catch(err => {
          console.log(err);
    });

    res.render("index", {});
}

const saveControl = (req, res, next) => {
    Product.create({
        id: 20,
        title: 'title',
        price: 20,
      })
        .then(result => {
          // console.log(result);
          console.log('Created Product');
        })
        .catch(err => {
          console.log(err);
    });
}



module.exports = {
    indexControl: indexControl,
    saveControl: saveControl
}