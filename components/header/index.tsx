import Image from 'next/image'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    )
}

export default Header