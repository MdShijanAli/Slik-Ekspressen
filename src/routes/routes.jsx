import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ProductPage/ErrorPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import Button from "../Pages/ProductPage/Button";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Button />
            },            
            {
                path: '/product',
                element: <ProductPage />
            },            
            {
                path: '*',
                element: <ErrorPage />
            },

            
        ]
    }
])