'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ReactNode } from "react"
import styles from './navigation.module.css'

const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
]

type NavAnchorType = {
    path: string
    children: ReactNode
}

const NavAnchor = ({ path, children }: NavAnchorType) => {
    return (
        <Link href={path}>
            <div className={styles.navAnchor}>{children}</div>
        </Link>
    )
}

const Navigation = () => {
    const currentPath = usePathname()
    return (
        <nav>
            <ul className={styles.list}>
                {LINKS.map(({ name, path }) => (
                    <li key={path}>
                        {path === currentPath ?
                            <span>{name}</span> :
                            <NavAnchor path={path}>{name}</NavAnchor>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation