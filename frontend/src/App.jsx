import { Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import TasksPage from './pages/TasksPages';
import TasksForm from './pages/TasksForm';

import Navbar from './components/Navbar';

import './App.css'

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<TasksPage/>}>Home</Route>
                <Route path="/new" element={<TasksForm/>}>Create task</Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </>
    )
}

export default App
