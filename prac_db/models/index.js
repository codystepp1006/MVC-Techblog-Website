//importing the model that we just created, and then we are exporting account to be used everywhere
const Account = require('./account');

// Posts.belongsTo(Bands, {
//     foreignKey: 'band_id',
// });

module.exports = {Account};