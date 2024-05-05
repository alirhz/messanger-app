
const Message = (props) => {
    const { message_text, username, time, message_id, user_id, profile_pic } = props.message;

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
        message_text ? 
        <div className={"flex gap-4 border-b-2 py-3"}>
            <div className={"w-12 h-12 rounded-md text-white items-center bg-red flex justify-center bold text-xl font-bold"}
                style={{ backgroundColor: profile_pic }}
            >
                {username[0].toUpperCase()}
            </div>
            <div className="flex flex-col justify-between h-12">
                <div className={"flex items-center"}>
                    <h1 className={"font-bold"}>
                        {username}
                    </h1>
                    <p className="text-stone-400 text-xs ml-2">{convertedTime(time)}</p>
                    {
                        localStorage.getItem("user_id") != user_id ? (
                            <div className="w-3 h-3 bg-slate-200 ml-2 rounded-full">
                            </div>
                        ) : null
                    }
                </div>
                <div>
                    {message_text}
                </div>
            </div>
        </div>
        : null
    );
};

export default Message;
