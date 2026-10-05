import MarkdownContent from './MarkdownContent.jsx'
import { parsePythonLectures } from '../lib/pythonLectures.js'

function PythonLectures({ content }) {
  const lectures = parsePythonLectures(content)

  return (
    <div className="python-notes">
      {lectures.map((lecture) => (
        <section className="python-notes-lecture" id={`python-lecture-${lecture.number}`} key={lecture.number}>
          <h2>Lecture {lecture.number}: {lecture.title}</h2>
          <MarkdownContent
            content={lecture.notes}
            headingIdPrefix={`python-lecture-${lecture.number}`}
            pythonLectureNumber={lecture.number}
          />
        </section>
      ))}
    </div>
  )
}

export default PythonLectures
