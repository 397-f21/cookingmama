const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Enter Recipe Preferences</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="ex: lunch, vegan, etc."
            name="s"
            autocomplete="off"
        />
        <button type="submit">search</button>
    </form>
);



export default SearchBar;
