import Image from "next/image";
import genztechiesMembers from "../members/index";
import { Navbar, Footer, Breadcrum } from "../components";

function Members() {
  const filteredMembers = genztechiesMembers.filter(
    (member) => member.isActive
  );

  return (
    <>
      <Navbar />

      <main className="bg-[#3331C4] pb-12">
        <Breadcrum currentPage="Members" />

        <div className="container mx-auto text-center mb-8 mt-10 max-w-sm px-8 md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-2xl mb-5 bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text md:text-4xl md:font-bold">
            Meet the Members
          </h1>
          <p className="text-white md:text-2xl">
            We are building a diverse community where every member feels valued
            and important to the community&rsquo;s cause, mission and vision.
          </p>
        </div>
        <div className="container px-5 mx-auto py-5 md:grid md:grid-cols-2 lg:max-w-5xl">
          {filteredMembers.map((member) => {
            return (
              <div className="w-full flex mx-auto max-w-sm justify-center mb-8">
                <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 mr-2">
                  <img
                    width={252}
                    height={255}
                    src={member.image_url}
                    className="w-[86px] h-[86px] md:w-[117px] md:h-[117px] rounded-full"
                    onError={(e) => {
                      e.target.src = "/assets/avatar.svg";
                    }}
                  />
                </div>
                <div className="textContainer">
                  <p className="mt-2 font-normal text-yellow-400 text-xl lg:text-2xl">
                    {member.full_name}
                  </p>
                  <p className="mb-2 font-normal bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text text-base lg:text-xl">
                    {member.role}
                  </p>
                  <p className="text-white text-xs mb-2 lg:text-sm max-w-[180px] md:max-w-[250px]">
                    {member.short_description}
                  </p>
                  <div className="flex">
                    {member.links?.github && (
                      <a href={member.links.github} className="pr-2">
                        <Image
                          width={20}
                          height={20}
                          src="/assets/icons/github.svg"
                        />
                      </a>
                    )}
                    {member.links?.twitter && (
                      <a href={member.links.twitter} className="pr-2">
                        <Image
                          width={20}
                          height={20}
                          src="/assets/icons/twitter.svg"
                        />
                      </a>
                    )}
                    {member.links?.linkedin && (
                      <a href={member.links.linkedin} className="pr-2">
                        <Image
                          width={20}
                          height={20}
                          src="/assets/icons/linkedin.svg"
                        />
                      </a>
                    )}
                    {member.links?.website_or_extra && (
                      <a href={member.links.website_or_extra} className="pr-2">
                        <Image
                          width={20}
                          height={20}
                          src="/assets/icons/more.svg"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Members;
