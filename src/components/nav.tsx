'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="border-b-border dark:border-b-darkBorder grid h-[50px] grid-cols-[1fr_1fr_50px] rounded-tr-base border-b-4 bg-black text-xl w600:text-lg w400:h-10 w400:text-base portrait:rounded-none">
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/"
      >
        XFADER
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/work' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/about"
      >
        About
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/work' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/man"
      >
        Manual Pages
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/download' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/download"
      >
        Download
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/work' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/live"
      >
        Live
      </Link>
      <ThemeSwitcher />
    </nav>
  )
}
