import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodoPage from './components/TodoPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {

    
    
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to='/users'>Пользователи</NavLink>
                    <NavLink to='/todos'>Список дел</NavLink>
                </div>
                <Routes>
                    <Route path='/users' element={<UserPage />} />
                    <Route path='/todos' element={<TodoPage />} />
                    <Route path='/users/:id' element={<UserItemPage />} />
                    <Route path='/todos/:id' element={<TodoItemPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
