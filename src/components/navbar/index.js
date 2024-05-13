import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo/trade.svg'
import Link from 'next/link';
import './navbar.css'

const navbar = () => {
    return (
        <div className='header_container'>
        <div className='header_wrap'>
            <div className='logo'>
                <Image src={Logo} width={130}/>
            </div>
            <div className='nav_item'>
                
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Program</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
                
                <div className='btn'>
                    <button className='apply_btn'>
                        <Link href="apply" target='_blank' rel='noopener'>Apply Now</Link>
                    </button>
                </div>

            </div>
        </div>
        </div>
    );
};

export default navbar;