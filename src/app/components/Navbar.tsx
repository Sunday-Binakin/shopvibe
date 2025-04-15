import { Search, Heart, ShoppingCart, UserRound, Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <div className='flex flex-col md:flex-row md:justify-around p-4 gap-4 md:gap-0'>
            <div className='flex justify-between items-center'>
                <p className='p-2 text-2xl'>Exclusive</p>
                <div className='md:hidden flex items-center gap-4'>
                    <ShoppingCart className='w-6 h-6 cursor-pointer hover:text-gray-600' />
                    <Menu className='w-6 h-6' />
                </div>
            </div>

            <div className='hidden md:flex justify-between gap-8 p-2' >
                <p className='hover:text-gray-600 cursor-pointer'>Home</p>
                <p className='hover:text-gray-600 cursor-pointer'>Contact</p>
                <p className='hover:text-gray-600 cursor-pointer'>About</p>
                <p className='hover:text-gray-600 cursor-pointer'>Sign up</p>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
                <div className='hidden md:block relative w-full md:w-auto'>
                    <input
                        type="text"
                        className='w-full md:w-[300px] border rounded-lg px-3 py-2 pr-10'
                        placeholder='What are you looking for?'
                        style={{ backgroundColor: '#F2F2F2' }}
                    />
                    <Search className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500' />
                </div>

                <div className='hidden md:flex justify-center gap-8 p-2' >
                    <Heart className='w-6 h-6 cursor-pointer hover:text-gray-600' />
                    <ShoppingCart className='w-6 h-6 cursor-pointer hover:text-gray-600' />
                    <UserRound className='w-6 h-6 cursor-pointer hover:text-gray-600' />
                </div>
            </div>
        </div>
    );
}