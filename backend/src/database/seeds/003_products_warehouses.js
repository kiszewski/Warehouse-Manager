
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products_warehouses').del()
    .then(function () {
      // Inserts seed entries
      return knex('products_warehouses').insert([
        {ns: 1, product_id: 3, warehouse_id: 1},
        {ns: 2, product_id: 3, warehouse_id: 1},
        {ns: 3, product_id: 3, warehouse_id: 1},
        {ns: 4, product_id: 1, warehouse_id: 3}
      ]);
    });
};
