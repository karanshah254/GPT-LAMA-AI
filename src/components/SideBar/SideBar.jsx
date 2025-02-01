import React, { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets.js'
import { Context } from '../../Context/Context.jsx'

const SideBar = () => {
    const [extend, setExtend] = useState(true)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtend(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={() => newChat} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extend ? <p>New Chat</p> : null}
                </div>
                {extend ?
                    <div className="recent">
                        <p className="recent-title">
                            Recent
                        </p>
                        {
                            prevPrompts.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} key={index} className="recent-entry">
                                        <img src={assets.message_icon} alt="" />
                                        <p>
                                            {item.slice(0, 18)} ...
                                        </p>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react</p>
                        </div> */}
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottomm-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extend ? <p>Help</p> : null}
                </div>
                <div className="bottomm-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extend ? <p>Activity</p> : null}
                </div>
                <div className="bottomm-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extend ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default SideBar