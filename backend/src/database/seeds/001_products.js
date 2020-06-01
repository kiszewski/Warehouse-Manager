
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Iphone 8', price: 3299.90 },
        {name: 'Iphone X', price: 3999.90 },
        {name: 'Iphone 11', price: 4599.90 }
      ]);
    });
};
