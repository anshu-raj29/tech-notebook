function HomeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>
}

function LearningSidebar({ activeLessonId, activeSubject, onHome, onOpenLesson, subjects }) {
  return (
    <aside className="learning-sidebar" aria-label="Lesson navigation">
      <button className="sidebar-home" onClick={onHome}><HomeIcon /> All subjects</button>
      <div className="sidebar-groups">
        {subjects.map((subject) => (
          <div className="sidebar-group" key={subject.name}>
            <h2 className="sidebar-subject">{subject.name}</h2>
            {subject.lessons.map((lesson) => (
              <button
                aria-current={lesson.id === activeLessonId ? 'page' : undefined}
                className={`sidebar-lesson${lesson.id === activeLessonId ? ' active' : ''}`}
                key={lesson.id}
                onClick={() => onOpenLesson(lesson)}
                title={lesson.title}
              >
                {lesson.title}
              </button>
            ))}
          </div>
        ))}
      </div>
      {activeSubject && <span className="visually-hidden">Current subject: {activeSubject}</span>}
    </aside>
  )
}

export default LearningSidebar