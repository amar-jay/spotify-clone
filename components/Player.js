import Image from 'next/image'
import styles from '../styles/Player.module.css'


function Player() {
    return (
        <div className={styles.player}>
           <Image objectFit='center' src="/favicon.ico" alt="Player Image" width={20} height={20} />
           Currently Playing...{' '}
        </div>
    )
}

export default Player
