import UNISA from '@/components/icons/UNISA.svg'
import NUS from '@/components/icons/NUS.svg'
import TailWindCSS from '@/components/icons/tailwindcss.svg'
import ReactIcon from '@/components/icons/react.svg'
import MySQL from '@/components/icons/mysql.svg'
import Django from '@/components/icons/django.svg'
import Nginx from '@/components/icons/nginx.svg'
import TypeScript from '@/components/icons/typescript.svg'
import TensorFlow from '@/components/icons/tensorflow.svg'
import Projects from '@/components/Projects'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Resume' })
export default function Page() {
  return (
    <>
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <h2 className="text-center font-extrabold">Christian Celentano</h2>
        <hr />

        <h2>Education</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-5">
            <div>
              <UNISA className="h-20 w-28" />
            </div>
            <div>
              <div className="text-2xl font-extrabold">UNISA</div>
              <div className="text-lg">Bachelor | Computer Science & Technology</div>
              <div className="text-lg text-gray-500">2017 - 2025</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>Skills</h2>
        <div>
          <p>
            <b>Programming Languages:</b> C, Java, Python, JavaScript, HTML, SQL.
          </p>
          <p>
            <b>Frameworks & Tools:</b>
            <span className="ml-2 space-x-2">
              <i className="inline-block">
                <ReactIcon className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <Django className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <MySQL className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <Nginx className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <TypeScript className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <TailWindCSS className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <TensorFlow className="h-6 w-6" />
              </i>
            </span>
          </p>
          <p>
            <b>Languages:</b> Italian (Native), English (B1)
          </p>
        </div>

        <hr />

        <h2>Projects</h2>
        <Projects />
      </div>
    </>
  )
}
