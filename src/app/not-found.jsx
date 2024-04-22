"use client"
import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'
const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className='flex justify-center items-center gap-4 text-color-accent flex-col' >
                <FileSearch size={44} />
                <h3 className=' font-bold text-2xl'>NOT FOUND! </h3>
                <Link href="/" className='text-color-accent hover:font-bold transition-all underline'>kembali</Link>
            </div> 
        </div>
    )
}

export default Page
