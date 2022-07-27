import './ThemeSwitch.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import DetectTheme from './DetectTheme'

function ThemeSwitch() {

  const applyTheme = ():string => {
    if (localStorage.hasOwnProperty('theme')) {
      return localStorage.theme === 'dark' ? 'dark' : 'light'
    } else {
      localStorage.setItem('theme', DetectTheme())
      return localStorage.theme
    }
  }

  const [theme, setTheme] = useState(applyTheme)

  const [isHovered, setIsHovered] = useState(false)

  const switchTheme = () => {
    const switchThemeAction = (themeType: string) => {
      setTheme(themeType)
      localStorage.setItem('theme', themeType)
    }
    theme === 'dark' ? switchThemeAction('light') : switchThemeAction('dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => switchTheme()}
      className="theme-switch-wrapper"
    >
      <div className="theme-switch">
        <FontAwesomeIcon
          icon={theme === 'dark' ? faMoon : faSun}
          className={isHovered ? 'fa-beat fa-beat-scale' : ''}
        />
      </div>
    </button>
  )
}

export default ThemeSwitch
