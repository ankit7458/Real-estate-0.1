import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header className='bg-slate-200 shadow-md '>
                <div className='flex justify-between items-center mx-4'>
                    <Link to='/'>
                        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                            <span className='text-slate-500'>reale</span>
                            <span className='text-slate-700'>State</span>
                        </h1>
                    </Link>
                    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                        <input type='text' placeholder='search..' className='bg-transparent focus:outline-none' />
                        <FaSearch className='text-slate-600' />
                    </form>
                    <ul className='flex gap-4'>
                        <Link to='/'>
                            <li className='hidden sm:inline text-slate-700'>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='hidden sm:inline text-slate-700' >About</li>
                        </Link>
                        <Link to='/sign-in'>
                            <li className='text-slate-700' >Sign in</li>
                        </Link>
                    </ul>
                </div>
            </header>
        </div>
    )
}
