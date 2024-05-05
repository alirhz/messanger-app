import { MenuOutlined } from '@ant-design/icons';
import SearchBar from "../SearchBar";
import { userAppSelector } from "../../../redux/store"

export default function Header() {

    const contact = userAppSelector((state) => state.messageReducer.contact);

    console.log(900,contact);

    return (
        <main>
            <header className="md:w-5/6 h-16 float-right right-0">
                <div className="flex justify-between items-center pt-4 px-4 mr-5">
                    <div className='text-xl font-bold'>
                        # {contact.contact_name}
                    </div>
                    {/* <div className='mr-10'>
                        <SearchBar />
                    </div> */}
                    {/* <div>
                        <MenuOutlined />
                    </div> */}
                </div>
            </header>
        </main>
    );
}
