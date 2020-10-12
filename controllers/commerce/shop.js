const Product = require('../../models/commerce/product');
const Order = require('../../models/commerce/order');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('pages/commercePages/shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/commerce/shop/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  console.log('Getting product details');
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('pages/commercePages/shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/commerce/shop/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('pages/commercePages/shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/commerce/shop'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
      res.render('pages/commercePages/shop/cart', {
        path: '/commerce/shop/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/commerce/shop/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      res.redirect('/commerce/shop/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc }}
      });

      const order = new Order({
        products: products,
        user: {
          name: req.user.name,
          userId: req.user
        }
      });

      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/commerce/shop/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  Order.find({'user.userId': req.user._id })
    .then(orders => {
      res.render('pages/commercePages/shop/orders', {
        path: '/commerce/shop/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};
