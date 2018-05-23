import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Flip from './Flip'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Flip />
    </div>
)

export default App
