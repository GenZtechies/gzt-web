import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Footer, Breadcrum } from "../components";

function Team() {
  return (
    <>
      <Navbar />

      {/* Change this to the current Active Page */}
      <Breadcrum currentPage="Team" />

      <div class="bg-[#131249]">
        <div class="container mx-auto text-center mb-8 mt-10 max-w-sm px-8 md:max-w-2xl lg:max-w-3xl">
            <h1 class="text-2xl mb-5 bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text md:text-4xl md:font-bold">Meet the team</h1>
            <p class="text-white md:text-2xl">
                We are building a diverse team where every team member feels valued and important to the community&rsquo;s cause, mission and vision.
            </p>
        </div>
        <div class="container px-5 mx-auto py-5 md:grid md:grid-cols-2 lg:max-w-5xl">
            <div class="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div class="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image class="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="assets/people/Eniola.png"/>
                </div>
                <div class="textContainer">
                    <p class="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Eniola Osabiya</p>
                    <p class="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p class="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div class="flex">
                        <Image class="pr-2" src="assets/icons/github.svg"/>
                        <Image class="pr-2" src="assets/icons/twitter.svg"/>
                        <Image class="pr-2" src="assets/icons/linkedin.svg"/>
                        <Image class="pr-2" src="assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
            <div class="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div class="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image class="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="assets/people/Tunji.png"/>
                </div>
                <div class="textContainer">
                    <p class="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Adetunji Adeyinka</p>
                    <p class="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p class="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div class="flex">
                        <Image class="pr-2" src="assets/icons/github.svg"/>
                        <Image class="pr-2" src="assets/icons/twitter.svg"/>
                        <Image class="pr-2" src="assets/icons/linkedin.svg"/>
                        <Image class="pr-2" src="assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
            <div class="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div class="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image class="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="assets/people/Caleb.png"/>
                </div>
                <div class="textContainer">
                    <p class="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Caleb Areeveso</p>
                    <p class="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p class="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div class="flex">
                        <Image class="pr-2" src="assets/icons/github.svg"/>
                        <Image class="pr-2" src="assets/icons/twitter.svg"/>
                        <Image class="pr-2" src="assets/icons/linkedin.svg"/>
                        <Image class="pr-2" src="assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
            <div class="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div class="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                    <Image class="w-[86px] h-[86px] md:w-[117px] md:h-[117px]" src="assets/people/Precious.png"/>
                </div>
                <div class="textContainer">
                    <p class="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">Precious John</p>
                    <p class="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                        Fullstack web developer
                    </p>
                    <p class="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                        Nisi et enim nulla qui est aliquip voluptate pariatur duis.
                    </p>
                    <div class="flex">
                        <Image class="pr-2" src="assets/icons/github.svg"/>
                        <Image class="pr-2" src="assets/icons/twitter.svg"/>
                        <Image class="pr-2" src="assets/icons/linkedin.svg"/>
                        <Image class="pr-2" src="assets/icons/more.svg"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
