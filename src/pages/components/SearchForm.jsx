import { useGlobalContext } from "../../context/context";

export const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="search__form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-form-input"
                name="search"
                placeholder="character"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-form-btn">
                Поиск
            </button>
        </form>
    );
};

