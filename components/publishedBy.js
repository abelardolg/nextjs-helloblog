import {author} from '../utils/constants'
import Date from './date'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


export default function PublishedBy({date}) {
    return (
        <>
            <div className={utilStyles.lightText}>
              <h3>Publicado por {author} el <Date dateString={date} /></h3>            
          </div>
            
      </>
    )
}