const { addingBook, gettingAllBooks, gettingBookById, editBookById, deleteBookById } = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addingBook,
    },

    {
      method: 'GET',
      path: '/books',
      handler: gettingAllBooks,
    },

    {
      method: 'GET',
      path: '/books/{id}',
      handler: gettingBookById,
    },

    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookById,
    },

    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookById,
    }

]

module.exports = routes;