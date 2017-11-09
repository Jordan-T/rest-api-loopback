'use strict';

const mongodbUrl = process.env.MONGODB_URL;

if (mongodbUrl) {
  console.log('Using MongoDB url:', mongodbUrl);

  module.exports = {
    db: {
      name: 'db',
      connector: 'mongodb',
      url: mongodbUrl,
    },
  };
}
