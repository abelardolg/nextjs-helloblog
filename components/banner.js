import Link from 'next/link'

import {name, siteTitle, path, profilePicture} from '../utils/constants'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Banner() {
    return (
        <>
            <img
                width={250}
                height={250}
                src={`${path}${profilePicture}`}
                alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </>
    )
}
