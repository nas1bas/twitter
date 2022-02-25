import firstUSer from '../../Assets/images/post1.png'
import secondUSer from '../../Assets/images/post2.png'
import thirdUSer from '../../Assets/images/post3.png'
import comments from '../../Assets/images/comment.png'
import reposting from '../../Assets/images/repost.png'
import likes from '../../Assets/images/like.png'
import share from '../../Assets/images/share.png'
import statistics from '../../Assets/images/statistics.png'
import food from '../../Assets/images/food.png'
import { useState } from 'react'


export default function Posts() {


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
		<>
			<like />
			<div className="posts">
				<div className="post">
					<img className="post-img" src={firstUSer} alt="firstUser" width={60} />
					<div className="user">
						<h1 className='user-name'>Designsta<span>@inner · 25m</span></h1>
						<p className='post-text'>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
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
					<img className="post-img" src={secondUSer} alt="secondUser" width={60} />
					<div className="user">
						<h1 className='user-name'>cloutexhibition<span>@RajLahoti · 22m</span></h1>
						<p className='post-text'>
							YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida
							talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.
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
					<img className="post-img" src={thirdUSer} alt="thirdUser" width={60} />
					<div className="user">
						<h1 className='user-name'>CreativePhoto<span>@cloutexhibition · 1h</span></h1>
						<p className='post-text'>Обетда..... <br />Кечиринглар</p>
					</div>
					<button onClick={clickHandle} className='post-btn'>...</button>
					<dialog className='dialog' open={open}>More</dialog>
				</div>
				<img className='food-img' src={food} alt="food" width={600} />
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
		</>
	)
}