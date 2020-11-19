exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { id: 1, mealID: 1, comment: 'This is great' },
        { id: 2, mealID: 2, comment: 'This Suxs!' },
        { id: 3, mealID: 3, comment: 'Best Meal Ever!!!!' },
        { id: 4, mealID: 1, comment: 'Tastes a bit bland' },
        { id: 5, mealID: 2, comment: 'Who ever made this neeeds new tastes buds' },
        { id: 6, mealID: 3, comment: 'Maybe use a bit more salt next time' }
      ])
    })
}
