import Image from 'next/image';
import Wallpaper from '../assets/wallpaper-home.jpg';
import TextMedium from './TextMedium';
import TextSmall from './TextSmall';
import Capacity from '../assets/capacity.svg';
import Tons from '../assets/tons.svg';
import Recycling from '../assets/recycling.svg';
import TextLarge from './TextLarge';
import Woman from '../assets/woman.svg';
import Rocks from '../assets/rocks.svg';
import HeadlineMedium from '../components/HeadlineMedium';
import Car from '../assets/car.svg';
import Stairs from '../assets/stairs.svg';

function Homepage(){
    return(
        <div className="text-[#FFFEFB]">
           <div className="w-full relative">
               <Image src={Wallpaper} width={1920} objectFit="cover" alt='img' />
           </div>

           <div className="absolute top-[257px] pl-[66px]">
               <div className="w-[900px]">
                   <p className="font-light text-[93px] leading-[120px] font-ubuntu">The <span className="bg-[#00B35B]">superfuel</span> for <br/>the <span className="bg-[#00B35B]">battery</span> age.</p>
               </div>
               <div className="w-[554px] mt-[88px]">
                   <TextMedium text="We are the clean tech company powering the electric mobility revolution. Serving the automotive industry with high-quality lithium made in Germany. We work to zero out emissions - one lithium battery at a time." />
               </div>
           </div>

           <div className="flex justify-around px-[88px] pt-[106px] pb-[100px]">
               <div>
                   <div>
                        <h1 className="text-[175px] font-light text-[#1E1E1E] text-center">5</h1>
                   </div>
                   <div className="-mt-44 text-center">
                        <Image className="" src={Capacity} alt="img" />
                   </div>
                   <div className="text-[#1E1E1E] text-center">
                       <TextSmall className="uppercase" text="Times" />
                       <TextMedium text="production capacity until 2030" />
                   </div>   
               </div>
               <div>
                   <div>
                        <h1 className="text-[175px] font-light text-[#1E1E1E] text-center">24000</h1>
                   </div>
                   <div className="-mt-44 text-center">
                        <Image className="" src={Tons} alt="img" />
                   </div>
                   <div className="text-[#1E1E1E] text-center">
                       <TextSmall className="uppercase" text="Tonnes" />
                       <TextMedium text="of lithium per year in 2025" />
                   </div>   
               </div>
               <div>
                   <div>
                        <h1 className="text-[175px] font-light text-[#1E1E1E] text-center">50</h1>
                   </div>
                   <div className="-mt-44 text-center">
                        <Image className="" src={Recycling} alt="img" />
                   </div>
                   <div className="text-[#1E1E1E] text-center">
                       <TextSmall className="uppercase" text="Percent" />
                       <TextMedium text="of raw material will come from recycling by 2030" />
                   </div>   
               </div>
           </div>

            <div>
                <div className="bg-[#00B35B] pb-[458px]">
                    <TextSmall className="pt-[70px] pl-[177px] uppercase" text="Who we are" />
                    <TextLarge className="mt-[25px] px-[66px]" text="We are in it for the long run. We will source our raw material in Canada and convert it into battery-grade lithium hydroxide in Germany. Holding ourselves accountable to the highest standards to preserve the world we live in. Tomorrow, we will be the first closed-loop lithium company: using and re-using our lithium for a cleaner future. " />
                </div>
                <div className='left-0 right-0 text-center -mt-[350px] pb-[150px]'>
                    <div className="ml-[450px]">
                        <Image src={Rocks} alt="img" />
                    </div>
                    <div className="-mt-[570px] mr-[404px]">
                        <Image src={Woman} alt="img" />
                    </div>
                </div>
            </div>

            <div  className="mt-[150px] px-[65px] text-[#1E1E1E] pb-[150px]">
                <div className="border-b-2 border-[#1E1E1E]">
                    <HeadlineMedium className="mb-[25px]" text="News" />
                </div>
                <div className="mt-[40px] flex justify-between gap-[65px] pb-[40px] border-b-2 border-[#1E1E1E]">
                    <div className="w-[622px]">
                        <Image src={Car} alt="img" />
                        <TextSmall className="mt-[15px]" text="Vancouver, BC, Canada – May 25, 2021" />
                        <TextLarge text="Rock Tech Chairman & CEO, Dirk Harbecke, Interviewed by the Investing News Network" />
                    </div>
                    <div className="w-[622px]">
                        <Image src={Stairs} alt="img" />
                        <TextSmall className="mt-[15px]" text="Vancouver, BC, Canada – May 25, 2021" />
                        <TextLarge text="Rock Tech Chairman & CEO, Dirk Harbecke, Interviewed by the Investing News Network" />
                    </div>
                    {/* <div className="w-[622px]">
                        <Image src={Stairs} alt="img" />
                        <TextSmall className="mt-[15px]" text="Vancouver, BC, Canada – May 25, 2021" />
                        <TextLarge text="Rock Tech Chairman & CEO, Dirk Harbecke, Interviewed by the Investing News Network" />
                    </div> */}
                </div>
            </div>   
        </div>
    )
}
export default Homepage;