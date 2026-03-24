import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export function CVPage() {
  const [numPages, setNumPages] = useState<number>(0)

  return (
    <div className="min-h-screen bg-bg py-12 px-4">
      <div className="mx-auto" style={{ maxWidth: 850 }}>
        {/* Close tab (or fall back to navigating home) */}
        <button
          onClick={() => window.close()}
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-accent transition-colors duration-300 hover:text-accent-hover"
        >
          &larr; Close
        </button>

        <Document
          file="/cv.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <p className="text-center font-mono text-sm text-text-muted">
              Loading...
            </p>
          }
          error={
            <p className="text-center font-mono text-sm text-text-muted">
              Failed to load CV.
            </p>
          }
        >
          <div className="flex flex-col gap-6">
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                width={850}
                className="!bg-white shadow-lg"
                renderAnnotationLayer={true}
                renderTextLayer={true}
              />
            ))}
          </div>
        </Document>

        {/* Download link */}
        {numPages > 0 && (
          <div className="mt-8 text-center">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded border border-accent/50 px-4 py-2 font-mono text-sm text-accent transition-colors duration-300 hover:border-accent hover:bg-accent-subtle"
            >
              Download CV
              <span className="text-text-muted">.pdf</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
