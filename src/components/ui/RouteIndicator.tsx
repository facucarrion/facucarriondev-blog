// eslint-disable-next-line no-unused-vars
import { RightArrow } from './Icons'

const RouteIndicator = () => {
  const pathname = window.location.pathname.split('/')[2]
    ? window.location.pathname.split('/')
    : ['', 'Home']
  pathname.shift()

  return (
    <div class='route'>
      {pathname?.map(path => (
        <>
          <RightArrow color='#ffe134' />
          <span class='route__path'>{path}</span>
        </>
      ))}
    </div>
  )
}

export { RouteIndicator }
