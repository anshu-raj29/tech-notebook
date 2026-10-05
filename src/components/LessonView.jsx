import { headingsFromMarkdown, lessons, numberSubsections } from '../lib/content.js'
import MarkdownContent from './MarkdownContent.jsx'
import PythonLectures from './PythonLectures.jsx'

function LessonView({ lesson, onOpenLesson, onHome }) {
  const lessonMarkdown = lesson.content.replace(/^#\s+[^\n]*(?:\n|$)\s*/, '')
  const markdown = numberSubsections(lessonMarkdown)
  const headings = headingsFromMarkdown(markdown)
  const orderedLessons = lessons.filter((entry) => entry.subject === lesson.subject)
  const lessonIndex = orderedLessons.findIndex((entry) => entry.id === lesson.id)
  const previous = orderedLessons[lessonIndex - 1]
  const next = orderedLessons[lessonIndex + 1]

  return (
    <main className="lesson-main">
      <article className="lesson-content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <button onClick={onHome}>{lesson.subject}</button>
          <span aria-hidden="true">/</span>
          <span>{lesson.title}</span>
        </nav>
        <h1 className="lesson-title">{lesson.markdownTitle}</h1>
        <div className="markdown-body">
          {lesson.subject === 'Python' ? (
            <PythonLectures content={lessonMarkdown} />
          ) : (
            <MarkdownContent content={markdown} />
          )}
        </div>
        <nav className="lesson-nav" aria-label="Lesson navigation">
          {previous ? <button className="lesson-nav-button" onClick={() => onOpenLesson(previous)}><span>Previous</span><strong>{previous.title}</strong></button> : <span />}
          {next ? <button className="lesson-nav-button" onClick={() => onOpenLesson(next)}><span>Next</span><strong>{next.title}</strong></button> : <span />}
        </nav>
      </article>
      {lesson.subject !== 'Python' && headings.length > 1 && (
        <aside className="toc" aria-label="On this page">
          <div className="toc-title">On this page</div>
          {headings.map((heading, index) => (
            <a className={`level-${heading.level}`} href={`#${heading.id}`} key={`${heading.id}-${index}`}>{heading.text}</a>
          ))}
        </aside>
      )}
    </main>
  )
}

export default LessonView