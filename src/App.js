import { Routes, Route } from "react-router-dom"
import './App.scss'
import Home from './Components/Home/home'
import RightSide from "./Components/Rightside/rightlist"
import Sidebar from './Components/Sidebar/sidebar'
import Login from "./Components/Login/login"
import More from './Components/More/more'
import List from './Components/List/list'
import Explore from './Components/explore/explore'
import Notification from "./Components/Notification/notif"
import Message from "./Components/message/message"
import Bookmark from "./Components/Bookmakers/bookmakers"
import Profile from "./Components/Profile/profile"

export default function App() {
    return (
        <div className='app'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/notifications' element={<Notification />} />
                <Route path='/messages' element={<Message />} />
                <Route path='/bookmarks' element={<Bookmark />} />
                <Route path='/lists' element={<List />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/more' element={<More />} />
                <Route path='/logout' element={<Login />} />
            </Routes>
            <RightSide />
        </div>
    )
} 