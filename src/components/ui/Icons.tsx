const SearchIcon = ({ color = 'black' }) => (
  <svg
    style='color: white'
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    className='search__icon'
    viewBox='0 0 16 16'
  >
    {' '}
    <path
      d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'
      fill={color}
    ></path>{' '}
  </svg>
)

const RightArrow = ({ color = 'black' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 14 20'
  >
    <path
      fill={color}
      fill-rule='evenodd'
      d='M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413'
    />
  </svg>
)

export { SearchIcon, RightArrow }
