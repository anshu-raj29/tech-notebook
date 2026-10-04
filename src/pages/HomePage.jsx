function StackIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>
}

function EmptyIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v18H7.5A2.5 2.5 0 0 0 5 22z" /><path d="M5 4.5v15A2.5 2.5 0 0 1 7.5 17H20" /></svg>
}

function HomePage({ onOpenLesson, onSearchChange, search, subjects }) {
  const term = search.trim().toLowerCase()
  const visibleSubjects = subjects.filter((subject) => {
    if (!term) return true
    return subject.name.toLowerCase().includes(term) || subject.lessons.some((lesson) =>
      `${lesson.title} ${lesson.markdownTitle} ${lesson.content}`.toLowerCase().includes(term),
    )
  })
  const topicCount = subjects.reduce((total, subject) => total + subject.lessons.length, 0)

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">A personal knowledge practice</span>
          <h1>Tech Notebook</h1>
          <p>Personal Technical Learning &amp; Knowledge Platform. A quiet place to collect what you learn, connect ideas, and return to them when it matters.</p>
          <span className="hero-count"><strong>{topicCount}</strong> {topicCount === 1 ? 'lesson' : 'lessons'} across <strong>{subjects.length}</strong> {subjects.length === 1 ? 'subject' : 'subjects'}</span>
        </div>
      </section>

      <section aria-labelledby="subjects-heading">
        <div className="section-head">
          <div><h2 id="subjects-heading">Your subjects</h2><p>Choose a subject to pick up where you left off.</p></div>
          {term && <button className="icon-button" onClick={() => onSearchChange('')} aria-label="Clear search" title="Clear search">×</button>}
        </div>
        {visibleSubjects.length ? (
          <div className="subject-grid">
            {visibleSubjects.map((subject) => (
              <button className="subject-card" key={subject.name} onClick={() => onOpenLesson(subject.lessons[0])}>
                <span className="subject-card-top"><span className="subject-symbol"><StackIcon /></span><span className="subject-arrow" aria-hidden="true">↗</span></span>
                <h3>{subject.name}</h3>
                <span>{subject.lessons.length} {subject.lessons.length === 1 ? 'lesson' : 'lessons'}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-symbol"><EmptyIcon /></span>
            <h3>{subjects.length ? 'No notes match your search' : 'Your notebook is ready'}</h3>
            <p>{subjects.length ? 'Try another subject or lesson title.' : 'Add a Markdown file under src/content/ and it will appear here automatically.'}</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default HomePage