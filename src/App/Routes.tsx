import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';

export const Login = lazy(() => import('../pages/login'))
export const Register = lazy(() => import('../pages/register'))
export const TodoList = lazy(() => import('../pages/todo-list'))

export default function Routes(){
  return(
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Switch>
      </Router>
    </Suspense>
  )
}
