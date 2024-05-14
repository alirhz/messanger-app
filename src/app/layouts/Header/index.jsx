import { MenuOutlined , CloseOutlined} from '@ant-design/icons';
import SearchBar from "../SearchBar";
import { userAppSelector } from "../../../redux/store"
import { useEffect } from 'react';
import { openMenu } from '../../../redux/features/chat-slice.ts';
import { useDispatch } from 'react-redux';

export function checkMediumSizeResolution() {
    let w = window.innerWidth;
    let mdSize = false;
    if(w < 768) return mdSize = true
    return false
}

export default function Header() {
    const dispatch = useDispatch();
    useEffect(() => {
        checkMediumSizeResolution();
        if(!checkMediumSizeResolution()) dispatch(openMenu(true))
    });
    const contact = userAppSelector((state) => state.messageReducer.contact);
    const isMenu = userAppSelector((state) => state.messageReducer.openMenu);


    return (
        <main>
            <header className="md:w-5/6 h-16 float-right right-0">
                <div className="flex justify-between items-center pt-4 px-4 mr-5">
                    <div className='text-xl font-bold flex gap-2'>
                            <div onClick={() => dispatch(openMenu(!isMenu))} className="block lg:hidden z-50 red">
                        { !isMenu ?
                            <MenuOutlined />
                            :
                            <CloseOutlined />
                        }
                        </div>
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
