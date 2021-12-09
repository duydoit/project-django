export default function NavItem({ href, isActive, children }) {
    return (
      <li>
        <a
          href={href}
          className={`block text-white px-3 py-2 text-base font-medium rounded-md hover:bg-indigo-500 ${isActive ? 'bg-indigo-700 text-amber-700' : ''}`}
        >
          {children}
        </a>
      </li>
    )
  }