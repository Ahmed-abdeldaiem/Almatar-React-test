import AdminLayout from "../layoutes/AdminLayout";
import HomeLayout from "../layoutes/HomeLayout";
import HomePage from "../pages/HomePage";
import CustomerPage from './../pages/CustomerPage';




export const RootRoutes =[{

    path: "/",
    element: <HomeLayout />,
    errorElement:<h1>NOT FOUND YOY CAN CREATE ERROR ELEMENT FOr THIS</h1>,
    children:[
      {
        path: "",
        element: <HomePage />
        
      },
      {
        path: "/customerData",
        element: <CustomerPage />
        
      },
     
     
     
     
    ]

}
,{

    path: "admin",
    element: <AdminLayout />,
    errorElement:<h1>NOT FOUND YOY CAN CREATE ERROR ELEMENT FOr THIS</h1>,
    children:[
  

    ]
}
]