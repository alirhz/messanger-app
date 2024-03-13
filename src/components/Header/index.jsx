import { MenuOutlined } from '@ant-design/icons';
import SearchBar from "@/components/SearchBar";

export default function Header() {

    return (
        <main>
            <header className="text-black bg-white w-full md:w-5/6 h-16 float-right">
                <div className="flex justify-between items-center pt-4 pr-4 pl-4">
                    <div>
                        # App - Project Zero
                    </div>
                    <div>
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
