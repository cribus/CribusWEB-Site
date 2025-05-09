import React from 'react'
import Typed from 'typed.js'
import Emoji from '@/components/twemoji'
import Link from 'next/link'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'I was born in 1996.',
        'I was raised In South of Italy , Potenza.',
        'I like 🏊‍♂️ / 🏃 / 🏸.',
        'I like Sports.',
        'I like Cars.',
        'I like LOL 🎮.',
        'I like Music 🎵.',
        '...',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <p>
          Welcome! I’m <b>Christian Celentano</b>. <Emoji kind="partyingFace" />
        </p>

        <p>
           I currently live in Italy and have just graduated from UNISA University with a
          bachelor's degree in Computer Science and Technology. I'm working as a Data Analyst and i love to share with someome my experiences.
        </p>


        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />

          <p>
            This website is used to introduce myself, publish some regular blogs about my experience . Feel free to{' '}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Greetings
