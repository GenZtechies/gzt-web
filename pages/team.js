import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Footer, Breadcrum } from "../components";

function Team() {
  return (
    <>
      <Navbar />

      {/* Change this to the current Active Page */}
      <Breadcrum currentPage="Team" />

      <main className="bg-[#131249]">
        <div className="container mx-auto text-center mb-8 mt-10 max-w-sm px-8 md:max-w-2xl lg:max-w-3xl">
            <h1 className="text-2xl mb-5 bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text md:text-4xl md:font-bold">Meet the team</h1>
            <p className="text-white md:text-2xl">
                We are building a diverse team where every team member feels valued and important to the community&rsquo;s cause, mission and vision.
            </p>
        </div>
        <div className="container px-5 mx-auto py-5 md:grid md:grid-cols-2 lg:max-w-5xl">
            <div className="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image width={106} height={109} className="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="/assets/people/Eniola.png"/>
                </div>
                <div className="textContainer">
                    <p className="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Eniola Osabiya</p>
                    <p className="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p className="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div className="flex">
                        <Image width={16} height={16} className="px-2" src="/assets/icons/github.svg"/>
                        <Image width={16} height={16} className="px-2" src="/assets/icons/twitter.svg"/>
                        <Image width={16} height={16} className="px-2" src="/assets/icons/linkedin.svg"/>
                        <Image width={16} height={16} className="px-2" src="/assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
            <div className="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image width={106} height={109} className="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="/assets/people/Tunji.png"/>
                </div>
                <div className="textContainer">
                    <p className="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Adetunji Adeyinka</p>
                    <p className="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p className="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div className="flex">
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/github.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/twitter.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/linkedin.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
            <div className="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image width={106} height={109} className="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="/assets/people/Caleb.png"/>
                </div>
                <div className="textContainer">
                    <p className="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Caleb Areeveso</p>
                    <p className="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p className="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div className="flex">
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/github.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/twitter.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/linkedin.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
            <div className="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image width={106} height={109} className="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="/assets/people/Precious.png"/>
                </div>
                <div className="textContainer">
                    <p className="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Precious John</p>
                    <p className="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p className="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div className="flex">
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/github.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/twitter.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/linkedin.svg"/>
                        <Image width={16} height={16} className="pr-2" src="/assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Team;
