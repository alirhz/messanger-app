import { SendOutlined } from '@ant-design/icons';

export default function SendMessage() {

  return (
    <footer>
      <div className="text-black bg-white w-full md:w-5/6 float-right px-8">
        <div className="flex justify-between space-between bg-white border border-gray-400 items-center shadow-sm rounded-md px-2 py-2 mb-2 mx-6">
          <input
            className="focus:outline-none bg-white w-11/12"
            type="text"
            placeholder="Enter to Send.Shift L to Add new line"
          />
          <button className="flex justify-between gap-3 items-center p-5 h-10 bg-indigo-500 rounded">
          <p className="text-lime-50">
            Send
          </p>
             <SendOutlined className="text-lime-50" />
          </button>
        </div>
      </div>
    </footer>
  );
}