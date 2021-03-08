import React from 'react'
import './Footer.css'
import Clock from '../shared/Clock/Clock'
import Link from '../shared/Link/Link'
import ChooseProgramingLanguageSelectList from '../shared/SelectList/ChooseProgramingLanguageSelectList'

function Footer() {
    return <div className='Footer'>
        <ul>
        <p>Author: Bla Bla </p>
        <Link href="https://datingscams.cc/search/blabla@gmail.com">blabla@gmail.com</Link>
        </ul>
        <Clock /> 
        <ChooseProgramingLanguageSelectList/>
    </div>
}

export default Footer;