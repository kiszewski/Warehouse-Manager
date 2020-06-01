
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('warehouses').del()
    .then(function () {
      // Inserts seed entries
      return knex('warehouses').insert([
        { 
          name: 'Matriz',
          cep: 90010010, 
          location: 'Porto Alegre', 
          image_url: 'https://live.staticflickr.com/2913/14129382292_da5461a5cd_b.jpg'
        },
        {
          name: 'Filial A', 
          cep: 90040320, 
          location: 'Gramado', 
          image_url: 'https://odiarioonline.com.br/storage/images/articles/86451/999x562/Ti4eAb7mVT6m54P4ccy1.jpg'
        },
        {
          name: 'Filial B', 
          cep: 20010100, 
          location: 'Rio de Janeiro', 
          image_url: 'https://cdn.civitatis.com/brasil/rio-de-janeiro/galeria/cristo-redentor-vistas-rio.jpg'
        }
      ]);
    });
};
