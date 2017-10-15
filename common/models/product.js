'use strict';

module.exports = function(Product) {
  /**
   * Return true if input is larger than zero
   * @param {number} quantity Number to validate
   */
  const validQuantity = quantity => Boolean(quantity > 0);

  /**
   * Buy this product
   * @param {number} quantity Number of products to buy
   * @param {Function(Error, object)} callback
   */

  Product.prototype.buy = function(quantity, callback) {
    if (!validQuantity(quantity)) {
      return callback(`Invalid quantity ${quantity}`);
    }

    const result = {
      quantity,
      status: `You bought ${quantity} product(s)`,
    };
    callback(null, result);
  };

  // Validate minimal length of the name
  Product.validatesLengthOf('name', {
    min: 3,
  });
};
