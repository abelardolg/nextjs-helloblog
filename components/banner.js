import {name, siteTitle, path, profilePicture} from '../utils/constants'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Banner() {
    
    return (
        <>
            <img
                width={2000}
                height={1000}
                src={`${path}${profilePicture}`}
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </>
    )
}