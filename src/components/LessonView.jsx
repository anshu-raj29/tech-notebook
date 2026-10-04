import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { headingsFromMarkdown, lessons, numberSubsections, slugify } from '../lib/content.js'

function CodeBlock({ children, language }) {
  const [copied, setCopied] = useState(false)
  const code = String(children).replace(/\n$/, '')

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-frame">
      <div className="code-toolbar">
        <span className="code-language">{language || 'Code'}</span>
        <button className="copy-button" onClick={copyCode} aria-label="Copy code">
          {copied ? 'Copied' : 'Copy'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  )
}

function plainText(children) {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(plainText).join('')
  if (children?.props?.children) return plainText(children.props.children)
  return ''
}

function LessonView({ lesson, onOpenLesson, onHome }) {
  const markdown = numberSubsections(lesson.content.replace(/^#\s+[^\n]*(?:\n|$)\s*/, ''))
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
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              pre: ({ children }) => <>{children}</>,
              h1: ({ children }) => <h1 id={slugify(plainText(children))}>{children}</h1>,
              h2: ({ children }) => <h2 id={slugify(plainText(children))}>{children}</h2>,
              h3: ({ children }) => <h3 id={slugify(plainText(children))}>{children}</h3>,
              code: ({ children, className }) => {
                const language = className?.match(/language-(\w+)/)?.[1]
                const value = String(children)
                if (!language && !value.includes('\n')) return <code>{children}</code>
                return <CodeBlock language={language}>{children}</CodeBlock>
              },
              table: ({ children }) => <div className="markdown-table-wrap"><table>{children}</table></div>,
              a: ({ children, href }) => <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noreferrer' : undefined}>{children}</a>,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
        <nav className="lesson-nav" aria-label="Lesson navigation">
          {previous ? <button className="lesson-nav-button" onClick={() => onOpenLesson(previous)}><span>Previous</span><strong>{previous.title}</strong></button> : <span />}
          {next ? <button className="lesson-nav-button" onClick={() => onOpenLesson(next)}><span>Next</span><strong>{next.title}</strong></button> : <span />}
        </nav>
      </article>
      {headings.length > 1 && (
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