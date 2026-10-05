import { useState } from 'react'
import { parsePythonLectures } from '../lib/pythonLectures.js'
import './PythonLectures.css'

function HomeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>
}

function LearningSidebar({ activeLessonId, activeSubject, onHome, onOpenLesson, subjects }) {
  const [expandedLectures, setExpandedLectures] = useState({})

  return (
    <aside className="learning-sidebar" aria-label="Lesson navigation">
      <button className="sidebar-home" onClick={onHome}><HomeIcon /> All subjects</button>
      <div className="sidebar-groups">
        {subjects.map((subject) => (
          <div className="sidebar-group" key={subject.name}>
            <h2 className="sidebar-subject">{subject.name}</h2>
            {subject.lessons.map((lesson) => (
              <div key={lesson.id}>
                {subject.name !== 'Python' && (
                  <button
                    aria-current={lesson.id === activeLessonId ? 'page' : undefined}
                    className={`sidebar-lesson${lesson.id === activeLessonId ? ' active' : ''}`}
                    onClick={() => onOpenLesson(lesson)}
                    title={lesson.title}
                  >
                    {lesson.title}
                  </button>
                )}
                {subject.name === 'Python' && activeSubject === 'Python' && (
                  <nav aria-label="Python lectures" className="python-sidebar-lectures">
                    {parsePythonLectures(lesson.content).map((lecture) => {
                      const isExpanded = Boolean(expandedLectures[lecture.number])
                      const panelId = `sidebar-python-lecture-${lecture.number}`

                      return (
                        <section className="python-sidebar-lecture" key={lecture.number}>
                          <button
                            aria-controls={panelId}
                            aria-expanded={isExpanded}
                            className="python-sidebar-lecture-toggle"
                            onClick={() => setExpandedLectures((current) => ({
                              ...current,
                              [lecture.number]: !current[lecture.number],
                            }))}
                            type="button"
                          >
                            <span>Lecture {lecture.number}: {lecture.title}</span>
                            <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                          </button>
                          <div className="python-sidebar-lecture-links" hidden={!isExpanded} id={panelId}>
                            {lecture.topics.map((topic) => (
                              <a
                                href={`#${topic.id}`}
                                key={topic.id}
                                onClick={(event) => {
                                  event.preventDefault()
                                  const target = document.getElementById(topic.id)
                                  if (!target) {
                                    console.error(`Python topic heading not found: ${topic.id}`)
                                    return
                                  }
                                  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${topic.id}`)
                                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }}
                              >
                                {topic.title}
                              </a>
                            ))}
                          </div>
                        </section>
                      )
                    })}
                  </nav>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {activeSubject && <span className="visually-hidden">Current subject: {activeSubject}</span>}
    </aside>
  )
}

export default LearningSidebar