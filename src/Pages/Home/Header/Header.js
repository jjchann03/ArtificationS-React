import { useState } from 'react'
import './header.css'

export default function Header(){
    const[isPOpen, setPOpen] = useState(false);

    const paraStyle = {
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
    }

    return(
        <div className='header-container'>
            <h2 className='brand-name'>Artification Studios</h2>
            <p className='brand-desc' style={isPOpen?null:paraStyle}>
                Where imagination hangs on the walls jsdvdjvn
                ddwdjfvvnjvwdvdwfn njwdvndjvwdnvjwdvn njdvnjwvnwvj nwednjwnjv
                dejnvn njdvnjvenjv njdvnjvdwnv ndwjvnwdvkdwvn nvdjevnjvnwv
                wdvjwdvndja nwdjd njvnds ndjwvn njwdvnwd ndjviwf wfiwjf jwjfn
                dwjnn nvidvjdiv jiwdvjdwivdjv
            </p>
            <button className='read-more' onClick={()=>setPOpen(!isPOpen)}>{isPOpen?"Read Less":"Read More"}</button>
        </div>
    )
}