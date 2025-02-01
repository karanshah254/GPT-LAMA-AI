import React, { useContext } from 'react'
import './MainPage.css'
import { Context } from '../../Context/Context'
import { assets } from '../../assets/assets'

const MainPage = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    const clickEnter = (event) => {
        if (event.keyCode === 13) {
            onSent(input)
        }
    }

    return (
        <div className='main'>
            <div className="nav">
                <p>AI-GUIDE</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ?
                    <>
                        <div className="greet">
                            <p>
                                <span>
                                    Hello NOIVICES
                                </span>
                            </p>
                            <p>How can I help you?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>
                                    Suggest place to see for upcomming trip
                                </p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>
                                    Briefly summarize the concept of urban planning
                                </p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>
                                    Improve the readabilty of the code
                                </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>
                                    Brainstroming ideas for a new project
                                </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>
                                {recentPrompt}
                            </p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={
                                    { __html: resultData }
                                }>
                                </p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onKeyDown={(event) => {
                            clickEnter(event)
                        }} onChange={(event) => setInput(event.target.value)} placeholder='Enter your message' value={input} />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ?
                                <img onClick={() => onSent(input)} src={assets.send_icon} alt="" />
                                : null
                            }
                        </div>
                    </div>
                    <p className="bottom-info">
                        THIS AI-GUIDE MIGHT NOT BE CORRECT ALL THE TIME. PLEASE VERIFY THE INFORMATION FROM A RELIABLE SOURCE.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainPage