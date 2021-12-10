import Image from 'next/image'
import styles from '../styles/Player.module.css'


function Player() {
    return (
        <div className={styles.player}>
           <p>PLAYING... ♫ <span>Break the Bones</span></p>
           <Image objectFit='center' src="/favicon.ico" alt="Player Image" width={20} height={20} />
        </div>
    )
}

export default Player
