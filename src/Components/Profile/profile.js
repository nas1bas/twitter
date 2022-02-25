import bg from '../../Assets/images/bg.png'
import prof from '../../Assets/images/profil-bobur.png'
import locat from '../../Assets/images/loc.png'
import ssilka from '../../Assets/images/ssilka.png'
import birth from '../../Assets/images/birth.png'
import join from '../../Assets/images/data.png'
import pin from '../../Assets/images/pin.png'
import { Link } from 'react-router-dom'

import Bobur from '../../Assets/images/Profile.png'
import comments from '../../Assets/images/comment.png'
import reposting from '../../Assets/images/repost.png'
import likes from '../../Assets/images/like.png'
import share from '../../Assets/images/share.png'
import statistics from '../../Assets/images/statistics.png'
import bobur1 from '../../Assets/images/bobur-1.png'
import { useState } from 'react'


export default function Profile() {

    const [counter, setComment] = useState(0);
    const [repost, setRepost] = useState(0);
    const [like, setLike] = useState(0);
    const [shares, setShare] = useState(0);
    const [stat, setStat] = useState(0);
    const [open, setOpen] = useState(false)

    const comment = () => {
        setComment(count => count + 1);
    };

    const reposts = () => {
        setRepost(count => count + 1);
    };

    const liking = () => {
        setLike(count => count + 1);
    };
    const sharing = () => {
        setShare(count => count + 1);
    };

    const statistic = () => {
        setStat(count => count + 1);
    };

    function clickHandle() {
        setOpen(!open)
    }
    return (
        <div className="profile">
            <div className="profil">
                <Link to="/">←</Link>
                <div className="prof">
                    <h1 className="prof-name">Bobur</h1>
                    <p className="prof-tweets">1,070 Tweets</p>
                </div>
            </div>
            <img src={bg} alt="bg" width={910} />
            <img className="ava" src={prof} alt="prof" />
            <button className='edit-btn'>Edit profile</button>
            <h1 className="prof-bobur">Bobur</h1>
            <p className="prof-username">@bobur_mavlonov</p>
            <p className='professia'>UX&UI designer at <span className='work'>@abutechuz</span></p>
            <ul className='list'>
                <li className='list-item'><img src={locat} alt="location" />Mashag’daman</li>
                <li className='list-item work'><img src={ssilka} alt="ssilka" />t.me/boburjon_mavlonov</li>
                <li className='list-item'><img src={birth} alt="birth" />Born November 24, 2000</li>
                <li className='list-item'><img src={join} alt="data" />Joined May 2020</li>
                <p className='follow'>67<span className='follower'>Following</span></p>
                <p className='follow'>47<span className='follower'>Followers</span></p>
            </ul>
            <ul className='list'>
                <li className='item'>Tweets</li>
                <li className='item'>Tweets & replies</li>
                <li className='item'>Media</li>
                <li className='item'>likes</li>
            </ul>
            <hr className='line' />
            <span className='pin'><img src={pin} alt="pin" />Pinned Tweet</span>

            <div className="posts">
                <div className="post">
                    <img className='="img' src={Bobur} alt="Bobur" width={50} height={50} />
                    <div className="user">
                        <h1 className='user-name'>Bobur<span>@bobur_mavlonov · Apr 1</span></h1>
                        <p className='post-text'>
                            4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy
                            jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni
                            normallashtirishni reja qildim
                        </p>
                    </div>
                    <button onClick={clickHandle} className='post-btn'>...</button>
                    <dialog className='dialog' open={open}>More</dialog>
                </div>
                <ul className='post-list'>
                    <li >
                        <button onClick={comment} className='post-item'><img src={comments} alt="comment" />{counter}</button>
                    </li>
                    <li>
                        <button onClick={reposts} className='post-item' ><img src={reposting} alt="repost" />{repost}</button>
                    </li>
                    <li>
                        <button onClick={liking} className='post-item'><img src={likes} alt="like" />{like}</button>
                    </li>
                    <li>
                        <button onClick={sharing} className='post-item' ><img src={share} alt="share" />{shares}</button>
                    </li>
                    <li>
                        <button onClick={statistic} className='post-item'><img src={statistics} alt="statistic" />{stat}</button>
                    </li>
                </ul>
            </div>
            <div className="posts">
                <hr className='line' />
                <div className="post">
                    <img class="img" src={Bobur} alt="Bobur" width={50} height={50} />
                    <div className="user">
                        <h1 className='user-name'>Bobur<span>@bobur_mavlonov · Apr 1</span></h1>
                        <p className='post-text'>
                            Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. <br /><br />
                            Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. <br /> <br />
                            Gap faqat biznes trenerlar haqida emas.
                        </p>
                    </div>
                    <button onClick={clickHandle} className='post-btn'>...</button>
                    <dialog className='dialog' open={open}>More</dialog>
                </div>
                <ul className='post-list'>
                    <li >
                        <button onClick={comment} className='post-item'><img src={comments} alt="comment" />{counter}</button>
                    </li>
                    <li>
                        <button onClick={reposts} className='post-item' ><img src={reposting} alt="repost" />{repost}</button>
                    </li>
                    <li>
                        <button onClick={liking} className='post-item'><img src={likes} alt="like" />{like}</button>
                    </li>
                    <li>
                        <button onClick={sharing} className='post-item' ><img src={share} alt="share" />{shares}</button>
                    </li>
                    <li>
                        <button onClick={statistic} className='post-item'><img src={statistics} alt="statistic" />{stat}</button>
                    </li>
                </ul>
            </div>
            <div className="posts">
                <hr className='line' />
                <div className="post">
                    <img className='bobur-img' src={Bobur} alt="Bobur" width={50} height={50} />
                    <div className="user">
                        <h1 className='user-name'>Bobur<span>@bobur_mavlonov · Apr 1</span></h1>
                        <p className='post-text'>A bo'pti maskamasman</p>
                    </div>
                    <button onClick={clickHandle} className='post-btn'>...</button>
                    <dialog className='dialog' open={open}>More</dialog>
                </div>
                <img className='food-img' src={bobur1} alt="food" width={600} />
                <ul className='post-list'>
                    <li >
                        <button onClick={comment} className='post-item'><img src={comments} alt="comment" />{counter}</button>
                    </li>
                    <li>
                        <button onClick={reposts} className='post-item' ><img src={reposting} alt="repost" />{repost}</button>
                    </li>
                    <li>
                        <button onClick={liking} className='post-item'><img src={likes} alt="like" />{like}</button>
                    </li>
                    <li>
                        <button onClick={sharing} className='post-item' ><img src={share} alt="share" />{shares}</button>
                    </li>
                    <li>
                        <button onClick={statistic} className='post-item'><img src={statistics} alt="statistic" />{stat}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}