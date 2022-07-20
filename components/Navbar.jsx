import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import Burger from '../assets/burger.svg';
import TextSmall from './TextSmall';

function Navbar(){
    const links = [
        {
            id: 1,
            title: "Why RockTech",
        },
        {
            id: 2,
            title: "Product"
        },
        {
            id: 3,
            title: "Sustainability"
        },
        {
            id: 4,
            title: "Investors"
        },
        {
            id: 5,
            title: "Career"
        },
    ]
    return(
        <Menu className="relative">
        <div className="relative">
          <nav className="w-full bg-transparent">
            <div className="w-full flex items-center justify-between px-[65px] pt-[30px]">
                <div>
                    <Link href="/">
                        <a className="cursor-pointer">
                            <div className="w-[95.4px] h-[17.74px]">
                                <Image src={Logo} alt="logo"/>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='flex gap-[70px] text-[#FFFEFB]'>
                  <div className="flex gap-10">
                    {links?.map((item) => (
                      <div key={item.id}>
                        <Link href="">
                          <a>
                            <TextSmall text={item.title} className="uppercase" />
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className='flex gap-16'>
                    <div>
                        <Link href="" >
                            <a target="_blank">
                                <TextSmall text="DE | EN" />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <a className="cursor-pointer">
                                <div className="w-[31px] h-[17px]">
                                    <Image src={Burger} alt="bars"/>
                                </div>
                            </a>
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
          </nav>
        </div>
      </Menu>
    )
}
export default Navbar;