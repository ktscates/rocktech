import Logo from '../assets/logo-large.svg';
import Image from 'next/image';
import TextMedium from './TextMedium';
import TextSmall from './TextSmall';
import Linkedin from '../assets/linkedin.svg'

function Footer(){
    const data = [
        {
            id: 1,
            title: "Why RockTech?",
        },
        {
            id: 2,
            title: "Product",
        },
        {
            id: 3,
            title: "Sustainability",
        },
        {
            id: 4,
            title: "Investors",
        },
        {
            id: 5,
            title: "Career",
        },
        {
            id: 6,
            title: "About us",
        },
        {
            id: 7,
            title: "Press",
        },
        {
            id: 8,
            title: "News",
        }
    ]
    return(
        <div className="w-full bg-[#1E1E1E] absolute bottom-0 px-[70px] pt-[69px] pb-[84px] text-[#FFFEFB] flex justify-between">
            <div>
                <div>
                    <Image src={Logo} alt="logo" />
                </div>
                <div className="font-semibold text-base leading-[22px] font-ubuntu uppercase mt-[61.9px]">
                    RockTech Lithium Inc. <br/>600 – 777 Hornby Street <br/>Vancouver, <br/>British Columbia V6Z 1S4
                </div>
                <div className="font-normal text-2xl leading-[34px] font-ubuntu mt-[84px]">
                    (778) 358-5200 <br/>info@rocktechlithium.com
                </div>
                <div className="mt-[10px]">
                    <Image src={Linkedin} alt="logo" />
                </div>
                
            </div>
            <div>
                <div>
                    {data.map((item) => (
                        <TextMedium key={item.id} text={item.title} />
                    ))}
                </div>
                <div className="uppercase mt-[44px]">
                    <TextSmall text="Privacy Policy" />
                    <TextSmall text="Imprint" />
                </div>
            </div>
            <div>
                <TextSmall className="uppercase" text="Newsletter" />

                <div className="font-semibold text-base leading-[22px] font-ubuntu uppercase mt-[46px]">
                    Get the latest Rock Tech <br/>updates, industry developments <br/>& commentaries directly into <br/>your mailbox
                </div>
                <div className="mt-[73px] flex flex-col gap-[25px]">
                    <input className="w-[302px] h-[55px] font-normal text-2xl leading-[34px] font-ubuntu rounded-full border py-4 px-4 text-center bg-transparent placeholder-[#FFFEFB] placeholder-opacity-60" type="text" placeholder="Enter your mail address"/>
                    <button className="w-[302px] h-[55px] font-semibold text-base leading-[22px] font-ubuntu uppercase rounded-full border py-4 px-6">Sign me up</button>
                </div>
                
            </div>
        </div>
    )
}
export default Footer;