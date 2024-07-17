import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import { useState, useEffect, useRef, forwardRef } from "react";

const DropDown = forwardRef(({ toggle, sortBy, onSortByChange, orderBy, onOrderByChange }, ref) => {
  if (!toggle) {
    return null;
  }
  return (
    <div
      ref={ref}
      className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div onClick={()=> onSortByChange('petName')}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Pet Name {(sortBy === 'petName') && <CheckIcon className="h-5 w-5" />}
        </div>
        <div onClick={()=> onSortByChange('ownerName')}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Owner Name {(sortBy === 'ownerName') && <CheckIcon className="h-5 w-5" />}
        </div>
        <div onClick={()=> onSortByChange('aptDate')}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Date {(sortBy === 'aptDate') && <CheckIcon className="h-5 w-5" />}
        </div>
        <div onClick={()=> onOrderByChange('asc')}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
        >
          Asc {(orderBy === 'asc') && <CheckIcon className="h-5 w-5" />}
        </div>
        <div onClick={()=> onOrderByChange('desc')}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Desc {(orderBy === 'desc') && <CheckIcon className="h-5 w-5" />}
        </div>
      </div>
    </div>
  );
});

const Search = ({query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  const [dropDownVisible, setVisible] = useState(false);

  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && e.target.id !== "options-menu") {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const onClick = (e) => {
    setVisible(!dropDownVisible);
  }

  return (
    <div className="py-5 ">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="inline-block h-5 w-5 align-top " />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(event) => {(onQueryChange(event.target.value))}}
          className="placeholder:text-slate-500 placeholder:font-medium border-gray-700 border-opacity-30 border-2 pl-11 h-9 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm "
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              onClick={onClick}
              type="button"
              className="justify-center px-4 py-2 h-9 w-25 bg-blue-400 border-2 font-normal border-blue-400 text-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort By <ChevronDownIcon className="ml-2 w-6" />
            </button>
            <DropDown toggle={dropDownVisible} 
            ref={menuRef} 
            sortBy={sortBy}
            onSortByChange={mySort => onSortByChange(mySort)}
            orderBy={orderBy}
            onOrderByChange={mySort => onOrderByChange(mySort)}
            />
            {/* {dropDownVisible && <DropDown />} */}
            {/* {dropDownVisible ? <DropDown /> : undefined} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
