import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState('');



    const keyword = (e) => {
        setSearch(e.target.value.toLowerCase());
        if (e.target.value.length === 0) {
            onSearch(null);
            console.log(search);
        }
    };


    const searching = async (e) => {
        e.preventDefault();
        onSearch(search);
    };

    
    return (
    <div className="search-position">
        <div className="search-bar">
        <div className="container-fluid">
            <form className="d-flex" role="search">
            <input
                onChange={keyword}
                className="form-control me-2"
                type="search"
                placeholder="Search Pokemon"
                aria-label="Search"
            />
            <button
                className="btn btn-outline-success"
                type="submit"
                onClick={searching}
            ><FontAwesomeIcon icon={faSearch} />
            </button>
            </form>
        </div>
        </div>
    </div>
    );
};

