// import models
const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongstoMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongstoMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
