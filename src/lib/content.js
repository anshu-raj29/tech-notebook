const markdownFiles = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function toTitle(value) {
  return value
    .replace(/\.md$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase())
}

function markdownTitle(content, fallback) {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : fallback
}

function makeLesson(path, content) {
  const relativePath = path.replace('../content/', '')
  const segments = relativePath.split('/')
  const subject = toTitle(segments[0])
  const titleParts = segments.slice(1).map(toTitle)
  const sameName = (value) => value.toLocaleLowerCase() === titleParts.at(-1)?.toLocaleLowerCase()
  if (titleParts.length > 1 && sameName(titleParts.at(-2))) titleParts.pop()
  const title = titleParts.join(' / ')

  return {
    id: relativePath,
    subject,
    title,
    markdownTitle: markdownTitle(content, titleParts.at(-1) ?? subject),
    content,
  }
}

export const lessons = Object.entries(markdownFiles)
  .map(([path, content]) => makeLesson(path, content))
  .sort((left, right) => left.subject.localeCompare(right.subject) || left.title.localeCompare(right.title))

export const subjects = Array.from(
  lessons.reduce((groups, lesson) => {
    const group = groups.get(lesson.subject) ?? []
    group.push(lesson)
    groups.set(lesson.subject, group)
    return groups
  }, new Map()),
  ([name, entries]) => ({ name, lessons: entries }),
)

export function numberSubsections(content) {
  const lines = content.split('\n')
  const hasLevelOneSections = lines.some((line) => /^#\s/.test(line))
  const sectionLevel = hasLevelOneSections ? 1 : 2
  let sectionNumber = 0
  let codeFence = null

  return lines.map((line) => {
    const fence = line.match(/^\s*(`{3,}|~{3,})/)
    if (fence) {
      if (!codeFence) codeFence = fence[1]
      else if (fence[1][0] === codeFence[0] && fence[1].length >= codeFence.length) codeFence = null
      return line
    }
    if (codeFence) return line

    const heading = line.match(/^(#{1,6})\s+(.+?)\s*$/)
    if (!heading) return line

    const level = heading[1].length
    const title = heading[2]

    if (level === sectionLevel) {
      const explicitNumber = title.match(/^(\d+)(?:\.\d+)*[.)]?\s+/)
      sectionNumber = explicitNumber ? Number(explicitNumber[1]) : sectionNumber + 1
      const plainTitle = title
        .replace(/^(\d+)(?:\.\d+)*[.)]?\s+/, '')
        .replace(/^[a-z]+[.)]?\s+/, '')
      return `${heading[1]} ${sectionNumber} - ${plainTitle}`
    }

    return line
  }).join('\n')
}

export function headingsFromMarkdown(content) {
  let codeFence = null

  return content.split('\n').flatMap((line) => {
    const fence = line.match(/^\s*(`{3,}|~{3,})/)
    if (fence) {
      if (!codeFence) codeFence = fence[1]
      else if (fence[1][0] === codeFence[0] && fence[1].length >= codeFence.length) codeFence = null
      return []
    }
    if (codeFence) return []

    const match = line.match(/^(#{1,3})\s+(.+?)\s*#*\s*$/)
    if (!match) return []

    const text = match[2].replace(/[`*_~]/g, '').trim()
    return [{ level: match[1].length, text, id: slugify(text) }]
  })
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}