//importing the model that we just created, and then we are exporting account to be used everywhere
const Account = require('./account');
const BlogPost = require('./blogpost');

// Posts.belongsTo(Bands, {
//     foreignKey: 'band_id',
// });

Account.hasMany(BlogPost, {
    foreignKey: 'account_id'
});

module.exports = {Account, BlogPost};
