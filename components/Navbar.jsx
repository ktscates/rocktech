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
            url: "/why-rocktech",
        },
        {
            id: 2,
            title: "Product",
            url: "/why-rocktech",
        },
        {
            id: 3,
            title: "Sustainability",
            url: "/why-rocktech",
        },
        {
            id: 4,
            title: "Investors",
            url: "/why-rocktech",
        },
        {
            id: 5,
            title: "Career",
            url: "/why-rocktech",
        },
    ]
    return(
        <Menu className="relative">
        <div className="relative">
          <nav className="w-full bg-transparent">
            <div className="fixed top-0 z-[99] w-full flex items-center justify-between px-[65px] pt-[30px]">
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
                        <Link href={item.url}>
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