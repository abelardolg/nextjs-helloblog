import {name, siteTitle, path, profilePicture} from '../utils/constants'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Banner() {
    
    return (
        <>
            <img
                src={`${path}${profilePicture}`}
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </>
    )
}
