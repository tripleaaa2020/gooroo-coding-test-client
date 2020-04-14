import React from 'react'

const Homepage = React.lazy(() => import('../display/containers/library/homepage/Homepage'))
const Auth = React.lazy(() => import('../display/containers/auth/AuthContainer'))
const MyBooks = React.lazy(() => import('../display/containers/mybooks/mybooks/MyBooks'))
const BookOperations = React.lazy(() => import('../display/containers/mybooks/mybooks/operations/BookOperationsContainer'))

const routes = [
  { mustLogged: false, path: '/auth/:mode', exact: true, name: 'Sign-in', component: Auth, title: 'Sign-in' },
  { backButton: false, backUrl: null, mustLogged: true, path: '/', exact: true, name: 'Library', component: Homepage, title: 'Library' },
  { backButton: false, backUrl: null, mustLogged: true, path: '/my-books', exact: true, name: 'My Books', component: MyBooks, title: 'My Books' },
  { backButton: true, backUrl: '/my-books', mustLogged: true, path: '/my-books/add', exact: true, name: 'Add New Book', component: BookOperations, title: 'Add New Book' },
  { backButton: true, backUrl: '/my-books', mustLogged: true, path: '/my-books/edit/:id', exact: true, name: 'Edit Book', component: BookOperations, title: 'Edit Book' }
];

export default routes;
