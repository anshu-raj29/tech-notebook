import { useEffect, useMemo, useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import LearningSidebar from './components/LearningSidebar.jsx'
import LessonView from './components/LessonView.jsx'
import NotebookHeader from './components/NotebookHeader.jsx'
import { lessons, subjects } from './lib/content.js'

function readTheme() {
  try {
    return localStorage.getItem('tech-notebook-theme') || 'light'
  } catch {
    return 'light'
  }
}

function lessonIdFromLocation() {
  const lessonId = new URLSearchParams(window.location.search).get('lesson')
  return lessons.some((lesson) => lesson.id === lessonId) ? lessonId : null
}

function App() {
  const [theme, setTheme] = useState(readTheme)
  const [activeLessonId, setActiveLessonId] = useState(lessonIdFromLocation)
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('tech-notebook-theme', theme)
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    function syncLessonFromLocation() {
      setActiveLessonId(lessonIdFromLocation())
    }

    window.addEventListener('popstate', syncLessonFromLocation)
    return () => window.removeEventListener('popstate', syncLessonFromLocation)
  }, [])

  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId)
  const activeSubject = activeLesson?.subject

  const searchResults = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return []

    return lessons.filter((lesson) =>
      `${lesson.subject} ${lesson.title} ${lesson.markdownTitle} ${lesson.content}`
        .toLowerCase()
        .includes(term),
    ).slice(0, 7)
  }, [search])

  function openLesson(lesson) {
    if (!lessons.some((entry) => entry.id === lesson.id)) return

    setActiveLessonId(lesson.id)
    setSearch('')
    const url = new URL(window.location.href)
    url.searchParams.set('lesson', lesson.id)
    window.history.pushState({ lessonId: lesson.id }, '', url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goHome() {
    setActiveLessonId(null)
    setSearch('')
    const url = new URL(window.location.href)
    url.searchParams.delete('lesson')
    window.history.pushState({}, '', url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <NotebookHeader
        onHome={goHome}
        onOpenLesson={openLesson}
        onSearchChange={setSearch}
        onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
        results={searchResults}
        search={search}
        theme={theme}
      />

      {activeLesson ? (
        <div className="learning-layout">
          <LearningSidebar
            activeLessonId={activeLesson.id}
            activeSubject={activeSubject}
            onHome={goHome}
            onOpenLesson={openLesson}
            subjects={subjects}
          />
          <LessonView lesson={activeLesson} onHome={goHome} onOpenLesson={openLesson} />
        </div>
      ) : (
        <HomePage
          onOpenLesson={openLesson}
          onSearchChange={setSearch}
          search={search}
          subjects={subjects}
        />
      )}

      <footer className="site-footer">
        <span>Tech Notebook</span>
        <span>Personal Technical Learning &amp; Knowledge Platform</span>
      </footer>
    </div>
  )
}

export default App