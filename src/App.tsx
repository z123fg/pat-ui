import React from "react";
import {Pagination} from "./components/Pagination";
import {PageFunc} from "./utils/hooks/usePagination";

export default function App() {
    const handleOnChange: PageFunc = (currentPage) => {
        console.log(currentPage);
    };
    return (
        <div className="App">
            1
            <Pagination count={20} page={10} siblingCount={1} onChangePage={handleOnChange} />
        </div>
    );
}
