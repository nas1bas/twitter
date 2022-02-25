import { Link, NavLink } from 'react-router-dom'
import logo from '../../Assets/images/twitter-logo.png'
import Bobur from '../../Assets/images/Profile.png'
import { useState } from 'react'

export default function SiteBarList() {
	const [open, setOpen] = useState(false)

	function clickHandle() {
		setOpen(!open)
	}

	return (
		<>
			<a href="/">
				<img className="logo" src={logo} alt="logotip" />
			</a>

			<nav className='navbar'>
				<ul className='navbar-list'>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/'>Home</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/explore'>Explore</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/notifications'>Notifications</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/messages'>Messages</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/bookmarks'>Bookmarks</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/lists'>Lists</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/profile'>Profile</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink className={({ isActive }) => (isActive ? 'navbar-link link-active' : 'navbar-link')} to='/more'>More</NavLink>
					</li>
				</ul>
			</nav>
			<button className='blue-btn'>Tweet</button>

			<div className="about">
				<img className='bobur-img' src={Bobur} alt="Bobur" width={50} height={50} />
				<div className="about-bobur">
					<h4 className='bobur'>Bobur</h4>
					<p className='username'>@bobur_mavlonov</p>
				</div>
				<button className="post-btn" onClick={clickHandle}>...</button>
				<dialog className='modaldialog' open={open}>
					<Link to='/logout'>Log out</Link>
				</dialog>
			</div>
		</>
	)
}