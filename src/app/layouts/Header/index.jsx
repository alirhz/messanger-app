import { MenuOutlined } from '@ant-design/icons';
import SearchBar from "@/app/layouts/SearchBar";

export default function Header() {

    return (
        <main>
            <header className="text-black bg-white w-full md:w-5/6 h-16 float-right">
                <div className="flex justify-between items-center pt-4 px-4 mr-5">
                    <div className='text-xl font-bold	'>
                        # App - Project Zero
                    </div>
                    <div className='mr-10'>
                        <SearchBar />
                    </div>
                    <div>
                        <MenuOutlined />
                    </div>
                </div>
            </header>
        </main>
    );
}
