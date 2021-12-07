import Home from "../pages/Home";
import Login from "../pages/Login";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page21 from "../pages/Page21";
import Page22 from "../pages/Page22";

export const routes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home,
        routes:[
            {
                path:'/home/page1',
                component: Page1
            },
            {
                path:'/home/page2',
                component: Page2,
                routes:[
                    {
                        path:'/home/page2/page21',
                        component:Page21
                    },
                    {
                        path:'/home/page2/page22',
                        component:Page22
                    },
                ]
            },
        ]
    },
]