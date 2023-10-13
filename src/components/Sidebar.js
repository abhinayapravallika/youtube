import React from 'react'
import logo2 from '../images/logo2.png'
import logo4 from '../images/logo4.png'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo7.png'
import { Link } from 'react-router-dom';
function Sidebar(){
    return(
        <> 
        <div className='col-md-2 '>
        <div className='logo2'>
                <i class="fa-solid fa-bars fa-2xl"></i>
                <img src={logo2} width='120'/>
        </div>
        <div className='sidebar'>
            <ul>
                <Link to="/Home" style={{color:"white",textDecoration:"none"}}><li><i class="fa-solid fa-house"></i>Home</li></Link>
                <Link to="/Shorts" style={{color:"white",textDecoration:"none"}}><li><i class="fa-solid fa-bolt"></i>Shorts</li></Link>
                <li><i class="fa-solid fa-clapperboard"></i>Subcriptions</li>
                <Link to="/Maincontent" style={{color:"white",textDecoration:"none"}}><li><i class="fa-solid fa-bolt"></i>Maincontent</li></Link>
                <Link to="/Users" style={{color:"white",textDecoration:"none"}}><li><i class="fa-solid fa-bolt"></i>Users</li></Link> 
            </ul>
        </div>
        <hr></hr>
        <div className='sidebar'>
            <ul>
                <li><i class="fa-regular fa-rectangle-list"></i>Library</li>
                <li><i class="fa-solid fa-clock-rotate-left"></i>History</li>
                <li><i class="fa-regular fa-clock"></i>Watch Later</li>
                <li><i class="fa-regular fa-thumbs-up"></i>Liked Videos</li>
            </ul>
        </div>
        <hr></hr>
        <div className='sidebar'>
            <ul>
            <li>Subcriptions</li>
            <li><img src={logo4} width='30'/> Cine_muchatlu</li>
            <li><img src={logo6} width='30'/> Vismai Food</li>
            <li><img src={logo7} width='30'/> Honey Queen</li>
            <li><i class="fa-regular fa-square-plus"></i>Browse channels</li>
            </ul>
        </div>
        <hr></hr>
        <div className='sidebar'>
            <ul>
                <li>Explore</li>
                <li><i class="fa fa-fire"></i>Trending</li>
                <li><i class="fa fa-bag-shopping"></i>Shopping</li>
                <li><i class="fa fa-music"></i>Music</li>
                <li><i class="fa fa-film"></i>Films</li>
                <li><i class="fa-solid fa-tower-broadcast"></i>Live</li>
            </ul>
        </div>
    </div>
    </>
    );
}
export default Sidebar;
