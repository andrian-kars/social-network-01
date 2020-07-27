import React from 'react'
import s from './News.module.css'

const News = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Copyright 2020</p>
            <a href="#top"><img className={s.logo} src="./logo.png" alt="logo" /></a>
        </footer>
    )
}

export default News