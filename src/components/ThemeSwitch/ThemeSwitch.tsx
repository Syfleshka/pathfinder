import './ThemeSwitch.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setTheme } from '../../redux/actions/theme'

function ThemeSwitch() {
  const theme = useTypedSelector((store) => store?.theme || '')
  const dispatch = useDispatch()

  const [isHovered, setIsHovered] = useState(false)

  const switchTheme = () => {
    theme === 'dark' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'))
  }

  useEffect(() => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
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
