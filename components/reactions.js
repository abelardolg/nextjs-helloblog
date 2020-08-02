import {path} from '../utils/constants'
import styles from './reactions.module.css'

export default function Reactions() {
    const reaction1 = "01.png";
    const reaction2 = "02.png";
    const reaction3 = "03.png";
    const reaction4 = "04.png";
    const reaction5 = "05.png";


    return (
        <div className={styles.reactions}>
            <input type="radio" name="star" id="star1"/>
            <label for="star1">
                <img src={`${path}${reaction1}`}/>
                <h4>La odio</h4>
            </label>
            <input type="radio" name="star" id="star2"/>
            <label for="star2">
                <img src={`${path}${reaction2}`}/>
                <h4>Me disgusta</h4>
            </label>
            <input type="radio" name="star" id="star3"/>
            <label for="star3">
                <img src={`${path}${reaction3}`}/>
                <h4>Está bien</h4>
            </label>
            <input type="radio" name="star" id="star4"/>
            <label for="star4">
                <img src={`${path}${reaction4}`}/>
                <h4>Me gusta</h4>
            </label>
            <input type="radio" name="star" id="star5" checked="checked"/>
            <label for="star5">
                <img src={`${path}${reaction5}`}/>
                <h4>Me encanta</h4>
            </label>
            <h2 className={styles.text}>¿Te gusta esta publicación?</h2>
        </div>  
    )
}
