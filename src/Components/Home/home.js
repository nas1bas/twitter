//import
import filter from '../../Assets/images/filter.png'
import Posts from './posts'
import Tweet from './tweet'
//import 



export default function Home() {
    return (
        <div className="Home">
            <div className="header">
                <a className="header-title" href="/">Home</a>
                <img className="header-img" src={filter} alt="filter" width={24} />
            </div>
            <hr className='line' />
            <Tweet/>
            <Posts/>
        </div>
    )
}