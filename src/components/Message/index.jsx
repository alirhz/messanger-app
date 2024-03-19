const Message = (props) => {
    const { message_text, username, time, id_message } = props.message;

    function convertedTime(dateString){
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
        <div className="flex gap-4 border-b-2 py-3">
            <img
                className="w-12 h-12 rounded-md"
                src="/people/pexels-justin-shaifer-1222271.jpg"
                alt="Picture of the author"
            />
            <div className="flex flex-col justify-between h-12">
                <div className="flex items-center">
                    <h1 className="font-bold">
                        {username}
                    </h1>
                    <div className="w-3 h-3 bg-slate-200 ml-4 rounded-full">
                    </div>
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
