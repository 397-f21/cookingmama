const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Enter Recipe Preferences</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="search"
            name="s"
        />
        <button type="submit">update preferences</button>
    </form>
);



export default SearchBar;
