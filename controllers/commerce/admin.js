const Product = require('../../models/commerce/product');


exports.getAddProduct = (req, res, next) => {
  res.render('pages/commercePages/admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/commerce/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  //Create new product from our schema and data from webpage
  const product = new Product({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/commerce/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('pages/commercePages/admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/commerce/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId).then(product => {
    product.title = updatedTitle;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    product.price = updatedPrice;

    return product
      .save()
  })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/commerce/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    // .populate('userId')
    .then(products => {
      console.log(products)
      res.render('pages/commercePages/admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/commerce/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/commerce/admin/products');
    })
    .catch(err => console.log(err));
};
