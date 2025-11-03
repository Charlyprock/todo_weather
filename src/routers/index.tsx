import App from '@/App'
import Dashboard from '@/views/Dashboard'
import { Todo } from '@/views/Todo'
import { weather } from '@/views/Weather'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Dashboard, },
            { path: 'todo', Component: Todo },
            { path: 'weather', Component: weather }
        ]
    }
])