import React from 'react'
import Style from "../../../../app.module.css";
import FilesBox from './Files Box/FilesBox'
import LinksBox from './Links Box/LinksBox'
import MediaBox from './Media Box/MediaBox'

const RightPanel = () => {
    return (
        <div className={Style.RightPanel__main} >
            <MediaBox/>
            <FilesBox/>
            <LinksBox/>
        </div>
    )
}

export default RightPanel
