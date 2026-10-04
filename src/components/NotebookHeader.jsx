function BookMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v18H7.5A2.5 2.5 0 0 0 5 22z" />
      <path d="M5 4.5v15A2.5 2.5 0 0 1 7.5 17H20" />
      <path d="M9 6h7M9 10h7" />
    </svg>
  )
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
}

function NotebookHeader({ onHome, onOpenLesson, onSearchChange, onToggleTheme, results, search, theme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={onHome} aria-label="Tech Notebook home">
          <span className="brand-mark"><BookMark /></span>
          <span>Tech Notebook</span>
        </button>
        <div className="header-search-wrap">
          <label className="header-search">
            <SearchIcon />
            <input
              aria-label="Search all learning notes"
              onChange={(event) => onSearchChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') onSearchChange('')
                if (event.key === 'Enter' && results[0]) onOpenLesson(results[0])
              }}
              placeholder="Search notes..."
              value={search}
            />
          </label>
          {search.trim() && (
            <div className="search-results" role="listbox" aria-label="Search results">
              {results.length ? results.map((lesson) => (
                <button className="search-result" key={lesson.id} onClick={() => onOpenLesson(lesson)} role="option" aria-selected="false">
                  <SearchIcon />
                  <span className="search-result-copy"><strong>{lesson.title}</strong><span>{lesson.subject}</span></span>
                </button>
              )) : <div className="search-empty">No matching notes found.</div>}
            </div>
          )}
        </div>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M20.2 15.1A8.1 8.1 0 0 1 8.9 3.8 8.4 8.4 0 1 0 20.2 15.1Z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default NotebookHeader