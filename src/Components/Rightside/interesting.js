import { useState } from "react"
import mushtariy from '../../Assets/images/mushtariy.png'
import shuhrat from '../../Assets/images/shuhrat.png'
import firstUser from '../../Assets/images/post1.png'
import secondUser from '../../Assets/images/post2.png'
import thirdUser from '../../Assets/images/post3.png'


export default function Interesting() {

    const [buttonText, setButtonText] = useState("Follow")
    const changeText = (text) => setButtonText(text)

    const [btnText, setButton] = useState("Follow")
    const changeBtn = (text) => setButton(text)

    const [btnTxt, setBtn] = useState("Follow")
    const changeButton = (text) => setBtn(text)

    const [buttonTxt, setBtnn] = useState("Follow")
    const changeButtonn = (text) => setBtnn(text)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='interesting__content'>
            <h2 className='interesting__title'>You might like</h2>

            <div className='interesting__card'>
                <img className='interesting__img' src={mushtariy} alt="img" />
                <div className='interesting__item'>
                    <p className='interesting__text'>Mushtariy</p>
                    <span className='interesting__span'>@Mushtar565266</span>
                </div>
                <button className='interesting__btn' onClick={() => changeText("Followed")}>{buttonText}</button>
            </div>

            <div className='interesting__card'>
                <img className='interesting__img' src={shuhrat} alt="img" />
                <div className='interesting__item'>
                    <p className='interesting__text'>Shuhratbek</p>
                    <span className='interesting__span'>@mrshukhrat</span>
                </div>
                <button className='interesting__btn' onClick={() => changeBtn("Followed")}>{btnText}</button>
            </div>

            <div className='interesting__collapsible'>
                <div className={isOpen ? 'content-show' : 'content'}>
                    <div className='interesting__card'>
                        <img  className='interesting__img'  src={firstUser} alt="user" />
                        <div className='interesting__item'>
                            <p className='interesting__text'>cloutexhibition</p>
                            <span className='interesting__span'>@cloutexhibition</span>
                        </div>
                        <button className='interesting__btn' onClick={() => changeButton("Followed")}>{btnTxt}</button>
                    </div>

                    <div className='interesting__card'>
                        <img className='interesting__img' src={secondUser} alt="img" />
                        <div className='interesting__item'>
                            <p className='interesting__text'>Designsta</p>
                            <span className='interesting__span'>@Designsta</span>
                        </div>
                        <button className='interesting__btn' onClick={() => changeButtonn("Followed")}>{buttonTxt}</button>
                    </div>
                    <div className='interesting__card'>
                        <img className='interesting__img' src={thirdUser} alt="img" />
                        <div className='interesting__item'>
                            <p className='interesting__text'>CreativePhoto</p>
                            <span className='interesting__span'>@CreativePhoto</span>
                        </div>
                        <button className='interesting__btn' onClick={() => changeButtonn("Followed")}>{buttonTxt}</button>
                    </div>
                </div>
                <button className='interesting__link' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Hide' : 'Show more'}</button>
            </div>
        </div>
    )
}