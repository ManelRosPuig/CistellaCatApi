import sequelize from './sequelize.js';
import User from './models/user.js';
import Product from './models/product.js';
import ShoppingList from './models/shopping_list.js';
import ShoppingListProduct from './models/shopping_list_product.js';

(async () => {
  try {
    await sequelize.sync();
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

User.hasMany(ShoppingList, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

ShoppingList.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Product.belongsToMany(ShoppingList, { through: ShoppingListProduct });
ShoppingList.belongsToMany(Product, { through: ShoppingListProduct });