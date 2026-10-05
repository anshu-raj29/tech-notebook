import { slugify } from './content.js'

export function pythonTopicId(lectureNumber, sectionNumber, title) {
  return `python-lecture-${lectureNumber}-${slugify(`${sectionNumber}. ${title}`)}`
}

export function parsePythonLectures(content) {
  const headings = [...content.matchAll(/^## Lecture (\d+): (.+)$/gm)]

  return headings.map((heading, index) => {
    const start = heading.index + heading[0].length
    const end = headings[index + 1]?.index ?? content.length
    const notes = content.slice(start, end).trim()
    const practiceStart = notes.search(/^## Let's Practice\s*$/m)
    const topicNotes = practiceStart < 0 ? notes : notes.slice(0, practiceStart)
    const topics = [...topicNotes.matchAll(/^## (\d+)\.\s+(.+)$/gm)].map((match) => {
      const title = match[2].replace(/`([^`]+)`/g, '$1').trim()

      return {
        title,
        id: pythonTopicId(heading[1], match[1], title),
      }
    })

    return {
      number: heading[1],
      title: heading[2].trim(),
      topics,
      notes,
    }
  })
}
