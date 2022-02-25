import { useState } from "react"
import settings from '../../Assets/images/settings.png'


export default function Trends() {

    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)

    function clickHandle() {
        setOpen(!open)
    }
    return (
        <>
            <div className='interesting__content'>
                <div className="trends">
                    <h2 className='interesting__title'>Trends for you</h2>
                    <button className="trends-btn">
                        <img src={settings} alt="settings" />
                    </button>
                </div>
                <div className='interesting__card'>
                    <div className='interesting__item'>
                        <span className='interesting__span'>Trending in Germany</span>
                        <p className='interesting__text'>Revolution</p>
                        <span className='interesting__span'>50.4K Tweets</span>
                    </div>
                    <button className="post-btn" onClick={clickHandle}>...</button>
                    <dialog className='trends-modal' open={open}>More</dialog>
                </div>

                <div className='interesting__collapsible'>
                    <div className={isOpen ? 'content-show' : 'content'}>
                        <div className='interesting__card'>
                            <div className='interesting__item'>
                                <span className='interesting__span'>Trending in Germany</span>
                                <p className='interesting__text'>Revolution</p>
                                <span className='interesting__span'>50.4K Tweets</span>
                            </div>
                            <button className="post-btn" onClick={clickHandle}>...</button>
                            <dialog className='trends-modal' open={open}>More</dialog>
                        </div>

                        <div className='interesting__card'>
                            <div className='interesting__item'>
                                <span className='interesting__span'>Trending in Germany</span>
                                <p className='interesting__text'>Revolution</p>
                                <span className='interesting__span'>50.4K Tweets</span>
                            </div>
                            <button className="post-btn" onClick={clickHandle}>...</button>
                            <dialog className='trends-modal' open={open}>More</dialog>
                        </div>
                    </div>
                    <button className='interesting__link' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Hide' : 'Show more'}</button>
                </div>
            </div>
        </>
    )
}