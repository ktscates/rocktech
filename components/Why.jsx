import Image from "next/image";
import Family from '../assets/family.jpg'
import TextSmall from "./TextSmall";
import HeadlineMedium from "./HeadlineMedium";
import Car from '../assets/car1.svg';
import Hands from '../assets/hands.svg';
import Woman from '../assets/woman1.svg';
import Window from '../assets/window.svg';
import TextLarge from "./TextLarge";
import TextMedium from "./TextMedium";
import Seagul from "../assets/seagul.svg"

function Why(){
    return(
        <div>
            <div className="w-full relative">
               <Image src={Family} width={1920} objectFit="cover" alt='img' />
           </div>

           <div>
                <div className="text-[#1E1E1E]">
                    <TextSmall className="pt-[70px] pl-[177px] uppercase" text="Why RockTech" />
                    <HeadlineMedium className="mt-[15px] pl-[65px] pr-[289px]" text="We put green power into your batteries" />
                </div>
                <div className='text-center pb-[150px] mt-[53px]'>
                    <div className="ml-[450px]">
                        <Image src={Car} alt="img" />
                    </div>
                    <div className="-mt-[350px] mr-[404px]">
                        <Image src={Hands} alt="img" />
                    </div>
                </div>
            </div>

            <div className="text-[#1E1E1E]">
                <TextSmall className="pt-[70px] pl-[177px] uppercase" text="Speed & Reliability" />
                <TextLarge className="mt-[15px] pl-[65px] pr-[289px]" text="Our team of seasoned experts are building on tried and tested methods to ensure fast time-to-market. Located right at the heart of the European automotive industry we ensure just-in-time delivery and solutions that are customized to what our partners need." />
                <div className='text-center pt-[150px]'>
                    <div className="ml-[450px] z-[99]">
                        <Image src={Woman} alt="img" />
                    </div>
                    <div className="-mt-[570px]  mr-[404px]">
                        <Image src={Window} alt="img" />
                    </div>
                </div>
                <div className="pb-[193px]">
                    <TextSmall className="pt-[70px] pl-[177px] uppercase" text="Innovation" />
                    <TextLarge className="mt-[15px] pl-[65px] pr-[289px]" text="The reliable causticization process is what we continuously optimize towards a lower carbon footprint. In parallel we’re driving innovation with an entirely new nitrate-gypsum route and a strong recycling approach that will transform us into a zero-waste company." />
                </div>
            </div>

            <div className="bg-[#00B35B] px-[65px] pt-[70px] pb-[220px] text-center text-[#FFFEFB]">
                <div className="mx-[300px]">
                    <HeadlineMedium text="“Whoever secures the technology leadership in the processing of lithium and understands its reuse via recycling will determine the market.”"/>
                    <TextSmall className="pt-[40px] uppercase" text="Dirk Habecke" />
                    <TextMedium className="mt-[5px]" text="Chairman of the Boards" />
                </div>
            </div>
            <div className="text-center -mt-[150px]">
                <Image src={Seagul} alt="img"/>
            </div>

            <div className="pb-[150px] text-[#1E1E1E]">
                <TextSmall className="pt-[70px] pl-[177px] uppercase" text="Sustainability & Transparency" />
                <TextLarge className="mt-[25px] pl-[65px] pr-[289px]" text="We put green power into your batteries: based in Germany, our lithium converter will meet highest EU-standards when it comes to environmental footprint, energy efficiency and supply chain transparency. Our raw material is sourced out of our own mines in Canada where we can guarantee that we meet the same standards right from the beginning. " />
            </div>
        </div>
    )
}
export default Why;