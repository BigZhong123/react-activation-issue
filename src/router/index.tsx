import App from '../App'
import Hero from '../pages/Hero';
import Home from '../pages/Home';

const routes = [
    {
        path: '',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'hero',
                element: <Hero />
            }
        ]
    },
    
]

export default routes;