import { userAppSelector } from "../../redux/store"

const Message = (props) => {
    const { message_text, username, time, id_message, user_id } = props.message;
    const userId = userAppSelector((state) => state?.messageReducer?.user.user_id);

    const color = ['bg-amber-300', 'bg-cyan-500', 'bg-fuchsia-800', 'bg-blue-800']

    function convertedTime(dateString) {
        const date = new Date(dateString);

        // Get hours and minutes
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Determine if it's AM or PM
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        const formattedHours = hours % 12 || 12;

        // Format the time as desired
        const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
        return formattedTime
    }

    return (
        <div className={userId == user_id ? "flex gap-4 border-b-2 py-3" : "flex gap-4 border-b-2 py-3 justify-end"}>
            {
                userId == user_id ? (
                    <div className={"w-12 h-12 rounded-md text-white items-center flex justify-center " + color[Math.floor((Math.random() * color.length))]}>
                        L
                    </div>
                ) : null
            }
            <div className="flex flex-col justify-between h-12">
                <div className={userId == user_id ? "flex items-center" : "flex items-center flex-row-reverse"}>
                    <h1 className={userId == user_id ? "font-bold" : "font-bold px-4"}>
                        {username}
                    </h1>
                    {
                        userId == user_id ? (
                            <div className="w-3 h-3 bg-slate-200 ml-4 rounded-full">
                            </div>
                        ) : null
                    }
                    <p className="text-stone-400 text-xs ml-2">{convertedTime(time)}</p>
                </div>
                <div>
                    {message_text}
                </div>
            </div>
        </div>
    );
};

export default Message;
