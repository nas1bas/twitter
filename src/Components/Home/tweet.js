//import
import React, { useState } from "react"
import Bobur from '../../Assets/images/Profile.png'
import Gallery from '../../Assets/images/image.png'
import Stats from '../../Assets/images/stats.png'
import Gif from '../../Assets/images/gif.png'
import Smile from '../../Assets/images/smile.png'
import Frame from '../../Assets/images/Frame.png'
//import

//style 
const TweetStyle = {
    paddingTop: '15px',
    paddingBottom: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: '1px solid #D8D8D8'
}

const Send = {
    display: 'flex',
}

const profBobur = {
    paddingLeft: '20px'
}

const input = {
    border: 'none',
    width: '182px',
    height: '29px',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '15px'
}
const Btns = {
    display: 'inline-flex',
    alignItems: 'center',
}

const gallery = {
    cursor: 'pointer',
    marginTop: '20px',
    border: 'none',
    background: 'none'
}

const icons = {
    marginLeft: '90px',
}
const btnTweet = {
    marginLeft: '500px',
    cursor: 'pointer',
    color: 'white',
    marginTop: '5px',
    backgroundColor: '#1DA1F2',
    alignItems: "center",
    width: '110px',
    height: '55px',
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
    borderRadius: "120px",
    border: 'none',
}

const modalOkno = {
    textAlign: 'center',
    border: '1px solid #D8D8D8',
    color: 'grey'
}
//style




export default function Tweet() {
    const [open, setOpen] = useState(false)
    const [btnOpen, setButtonOpen] = useState(false)

    function clickHandle() {
        setOpen(!open)
    }
    return (
        <div className="send-tweet" style={TweetStyle}>
            <div style={Send}>
                <img src={Bobur} alt="Bobur" style={profBobur} />
                <input style={input} type="text" placeholder="What's happening..." />
            </div>
            <div style={Btns}>
                <div style={icons}>
                    <button onClick={clickHandle} style={gallery}><img src={Gallery} alt="gallery" /></button>
                    <button onClick={clickHandle} style={gallery}><img src={Gif} alt="gif" /></button>
                    <button onClick={clickHandle} style={gallery}><img src={Stats} alt="stats" /></button>
                    <button onClick={clickHandle} style={gallery}><img src={Smile} alt="smile" /></button>
                    <button onClick={clickHandle} style={gallery}><img src={Frame} alt="frame" /></button>
                    <dialog style={modalOkno} open={open}>Choose  Media, Gif, Emoji, e.t.c</dialog>
                </div>
                <button style={btnTweet} onClick={() => setButtonOpen(!btnOpen)}>{btnOpen ? '✓ Tweeted' : 'Tweet'}</button>
            </div>
        </div>
    )
}