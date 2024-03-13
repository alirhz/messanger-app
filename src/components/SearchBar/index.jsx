import { SearchOutlined } from '@ant-design/icons';


const SearchBar = () => {
  return (
    <div className="flex w-full border border-gray-300 bg-white items-center shadow-sm rounded-md">
      <input
        className="focus:outline-none bg-white w-96 mx-3 my-2"
        type="text"
        placeholder="Search..."
      />
      <button className="flex justify-center items-center w-10 h-10 bg-indigo-500 rounded-r-lg relative left-1">
        <SearchOutlined className="text-lime-50 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
