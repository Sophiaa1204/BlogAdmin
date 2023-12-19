import React, { useState } from 'react'
import { Link, matchPath, useMatch, useMatches } from 'react-router-dom'
import User from '../../Pages/User'
import Like from '../../Pages/Like'
import Follower from '../../Pages/Follower'
import Comments from '../../Pages/Comments'
import Article from '../../Pages/Article'
import Category from '../../Pages/Category'
import Dashboard from '../../Pages/Dashboard'

const DashboardIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="feather feather-sliders align-middle"
>
  <line x1="4" y1="21" x2="4" y2="14"></line>
  <line x1="4" y1="10" x2="4" y2="3"></line>
  <line x1="12" y1="21" x2="12" y2="12"></line>
  <line x1="12" y1="8" x2="12" y2="3"></line>
  <line x1="20" y1="21" x2="20" y2="16"></line>
  <line x1="20" y1="12" x2="20" y2="3"></line>
  <line x1="1" y1="14" x2="7" y2="14"></line>
  <line x1="9" y1="8" x2="15" y2="8"></line>
  <line x1="17" y1="16" x2="23" y2="16"></line>
</svg>
const CategoryIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="feather feather-grid align-middle"
>
  <rect x="3" y="3" width="7" height="7"></rect>
  <rect x="14" y="3" width="7" height="7"></rect>
  <rect x="14" y="14" width="7" height="7"></rect>
  <rect x="3" y="14" width="7" height="7"></rect>
</svg>
const ArticleIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="feather feather-book-open align-middle"
>
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>

const CommentIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="feather feather-message-square align-middle me-2"
>
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
const FollowerIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="feather feather-star align-middle me-2"
>
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
const LikeIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="feather feather-heart align-middle me-2"
>
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>
const UserIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="feather feather-user align-middle me-2"
>
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
</svg>
export const routers = [
  {
    meta: {
      label: 'Dashboard',
    },
    path: '/',
    icon: DashboardIcon,
    element: <Dashboard />,
  },
  {
    meta: {
      label: 'Categories',
    },
    path: '/category',
    icon: CategoryIcon,
    element: <Category />,
  },
  {
    meta: {
      label: 'Articles',
    },
    path: '/article',
    icon: ArticleIcon,
    element: <Article />,
  },
  {
    meta: {
      label: 'Comments',
    },
    path: '/comment',
    icon: CommentIcon,
    element: <Comments />,
  },
  {
    meta: {
      label: 'Followers',
    },
    path: '/follower',
    icon: FollowerIcon,
    element: <Follower />,
  },
  {
    meta: {
      label: 'Likes',
    },
    path: '/like',
    icon: LikeIcon,
    element: <Like />,
  },
  {
    meta: {
      label: 'Users',
    },
    path: '/user',
    icon: UserIcon,
    element: <User />,
  },

]
export default () => {
  const [menu, setMenu] = useState(routers)
  const matches = useMatches()
  return <div className="sidebar-content js-simplebar" data-simplebar="init">
    <div className="simplebar-wrapper" style={{ margin: 0 }}>
      <div className="simplebar-mask">
        <div
          className="simplebar-offset" style={{
          right: 0, bottom: 0,
        }}
        >
          <div
            className="simplebar-content-wrapper"
            tabIndex="0"
            role="region"
            aria-label="scrollable content"
            style={{
              height: '100%',
              overflow: 'hidden scroll',
            }}
          >
            <div className="simplebar-content" style={{ padding: 0 }}>
              <a className="sidebar-brand" href="/">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                >
                  <path
                    d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
              C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"
                  ></path>
                  <path
                    d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"
                  ></path>
                  <path
                    d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"
                  ></path>
                </svg>

                <span className="align-middle me-3">AppStack</span>
              </a>

              <ul className="sidebar-nav">
                {
                  menu.map(item => <li
                    key={item.path}
                    className={`sidebar-item ${(([...matches].pop().pathname === item.path))
                      ? 'active'
                      : ''}`}
                  >
                    <Link
                      className={`sidebar-link`} to={item.path}
                    >
                      {item.icon}
                      <span className="align-middle">{item.meta.label}</span>
                    </Link>
                  </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
