import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import EditProfile from "./components/EditProfile";
import ProfileNotification from "./components/ProfileNotification";
import Articles from "./components/Articles";
import ParentOfShowArticle from "./components/ParentOfShowArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
          path:'profile',
          element:<ProfileLayout/>,
          children:[
            {
              element:<EditProfile/>,
              index:true
            },
            {
              path:'notifications',
              element:<ProfileNotification/>
            }
          ]
      },
      {
        path:'articles',
        element:<Articles/>
      },
      {
        path:'read-article',
        element:<ParentOfShowArticle/>
      }
    ],
  },
]);
export default router;
