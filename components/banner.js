import {name, siteTitle, path, profilePicture} from '../utils/constants'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Banner() {
    
    return (
        <>
            <img
                width={500}
                height={500}
                src={`${path}${profilePicture}`}
                className={`${utilStyles.borderCircle}`}
                alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </>
    )
}
