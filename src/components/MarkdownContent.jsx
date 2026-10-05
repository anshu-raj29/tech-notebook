import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { codeToHtml } from 'shiki'
import { slugify } from '../lib/content.js'
import { pythonTopicId } from '../lib/pythonLectures.js'

function CodeBlock({ children, language }) {
  const [copied, setCopied] = useState(false)
  const [highlightedResult, setHighlightedResult] = useState(null)
  const code = String(children).replace(/\n$/, '')
  const highlightedCode = highlightedResult?.code === code && highlightedResult.language === language
    ? highlightedResult
    : null

  useEffect(() => {
    let active = true

    if (language?.toLowerCase() !== 'python') return () => { active = false }

    codeToHtml(code, {
      lang: 'python',
      themes: { light: 'light-plus', dark: 'dark-plus' },
      defaultColor: false,
    }).then((html) => {
      if (active) {
        const match = html.match(/^<pre\b([^>]*)><code>([\s\S]*)<\/code><\/pre>$/)
        const styleAttribute = match?.[1].match(/\bstyle="([^"]*)"/)?.[1] ?? ''
        setHighlightedResult({
          code,
          language,
          className: match?.[1].match(/\bclass="([^"]*)"/)?.[1] ?? 'shiki',
          style: Object.fromEntries(
            styleAttribute.split(';').filter(Boolean).map((declaration) => {
              const separator = declaration.indexOf(':')
              return [declaration.slice(0, separator).trim(), declaration.slice(separator + 1).trim()]
            }),
          ),
          html: match?.[2] ?? code,
        })
      }
    }).catch((error) => {
      console.error('Unable to highlight Python code block with Shiki.', error)
    })

    return () => { active = false }
  }, [code, language])

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
      <pre className={highlightedCode?.className} style={highlightedCode?.style}>
        <code dangerouslySetInnerHTML={highlightedCode ? { __html: highlightedCode.html } : undefined}>
          {highlightedCode ? undefined : code}
        </code>
      </pre>
    </div>
  )
}

function plainText(children) {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(plainText).join('')
  if (children?.props?.children) return plainText(children.props.children)
  return ''
}

function MarkdownContent({ content, headingIdPrefix = '', pythonLectureNumber }) {
  const headingCounts = new Map()
  const headingId = (children) => {
    const slug = slugify(plainText(children))
    const count = headingCounts.get(slug) ?? 0
    headingCounts.set(slug, count + 1)
    return headingIdPrefix
      ? `${headingIdPrefix}-${slug}${count ? `-${count + 1}` : ''}`
      : slug
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        pre: ({ children }) => <>{children}</>,
        h1: ({ children }) => <h1 id={headingId(children)}>{children}</h1>,
        h2: ({ children }) => {
          const text = plainText(children)
          const topicHeading = text.match(/^(\d+)\.\s+(.+)$/)
          const id = pythonLectureNumber && topicHeading
            ? pythonTopicId(pythonLectureNumber, topicHeading[1], topicHeading[2])
            : headingId(children)
          return <h2 id={id}>{children}</h2>
        },
        h3: ({ children }) => <h3 id={headingId(children)}>{children}</h3>,
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
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownContent
