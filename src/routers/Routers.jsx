import React from 'react'
import { useRoutes } from 'react-router-dom'
import DetailJob from '../pages/DetailJob/DetailJob'
import Home from '../pages/Home/Home'
import ListJob from '../pages/ListJob/ListJob'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Register from '../pages/Register/Register'
import AdminTemplate from '../templates/AdminTemplate/AdminTemplate'
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate'
import MenuDetail from '../templates/HomeTemplate/Layout/Header/HeaderMenu/MenuDetail/MenuDetail'
import MenuItem from '../templates/HomeTemplate/Layout/Header/HeaderMenu/MenuItem/MenuItem'

export default function Routers() {
    const routing = useRoutes([
        {
            path: '/',
            element:
                <HomeTemplate >

                </HomeTemplate>,
            children: [
                {
                    // path: '/',
                    // element: <Navigate to='home'/>
                },
                {
                    path: '/',
                    element: <Home />
                },

                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'listJob/:valueSearch',
                    element: <ListJob />
                },
                {
                    path: ':idMenu',
                    element: <MenuDetail />
                },
                {
                    path: ':idMenu/:idItem',
                    element: <MenuItem />
                },

                {
                    path: 'detailJob/:jobId',
                    element: <DetailJob />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'profile',
                    element: <Profile/>
                }


            ]
        },
        {
            path: '/',
            element: <AdminTemplate />,
            children: [
                {
                    path: 'admin',
                    element: <AdminTemplate />,

                },
                
            ]
        }
    ])
    return routing
}
