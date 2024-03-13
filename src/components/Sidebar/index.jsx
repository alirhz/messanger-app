import Image from "next/image";

export default function Sidebar() {

  return (
    <main>
      <div className="fixed bg-gray-800 text-white h-screen w-1/6">
        <div className="flex flex-col items-center py-4 space-y-4">
          <div className="flex justify-center">
            <Image
              src="/icons8-bebo-144.svg"
              alt="Vercel Logo"
              width={100}
              height={80}
              priority
            />
          </div>
          <div className="text-xl font-bold">Issue Chat</div>
          <a className="text-gray-300 hover:text-white underline">Edit Settings</a>
        </div>
        <hr className="border-gray-700" />
        <div className="mt-4 pl-4">
          <h3 className="text-lg font-bold mb-2">+ People</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <Image
                className="rounded-full border border-white w-8 h-8"
                src="/people/pexels-andrea-piacquadio-733872.jpg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <span>Christian</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                className="rounded-full border border-white w-8 h-8"
                src="/people/pexels-justin-shaifer-1222271.jpg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <span>Mark</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                className="rounded-full border border-white w-8 h-8"
                src="/people/pexels-tomaz-barcellos-1987301.jpg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <span>Sarah</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
