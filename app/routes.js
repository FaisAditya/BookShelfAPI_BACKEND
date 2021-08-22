const {
  createBooksHandler,
  getAllBooksHandler,
  getByIdBooksHandler,
  editBooksByIdHandler,
  deleteBooksHandler
} = require('./handler')

const routes = [{
  method: 'GET',
  path: '/',
  handler: () => {
    return 'Halaman Home'
  }
},
{
  method: '*',
  path: '/',
  handler: () => {
    return 'Halaman Tidak dapat diakes dengan method ini !'
  }
},
{
  method: 'POST',
  path: '/books',
  handler: createBooksHandler
},
{
  method: 'GET',
  path: '/books',
  handler: getAllBooksHandler
},
{
  method: 'GET',
  path: '/books/{booksId}',
  handler: getByIdBooksHandler
},
{
  method: 'PUT',
  path: '/books/{booksId}',
  handler: editBooksByIdHandler
},
{
  method: 'DELETE',
  path: '/books/{booksId}',
  handler: deleteBooksHandler
},
{
  method: '*',
  path: '/{any*}',
  handler: () => 'Halaman tidak ditemukan'
}
]

module.exports = routes
