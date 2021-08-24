
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('greeting').del()
    .then(function () {
      // Inserts seed entries
      return knex('greeting').insert([
         {message: 'We did it!'},
        
      ]);
    });
};
