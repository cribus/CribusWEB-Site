'use client'

import React from 'react'
import type Typed from 'typed.js'
import type { TypedOptions } from 'typed.js'
import Emoji from '@/components/twemoji'
import Link from 'next/link'

const Greetings = () => {
  const el = React.useRef<HTMLSpanElement | null>(null)
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options: TypedOptions = {
      strings: [
        'I was born in 1996.',
        'I was raised in Southern Italy.',
        'I like 🏊‍♂️ / 🏃 / 🏸.',
        'I like Sports.',
        'I like Cars.',
        'I like LOL 🎮.',
        'I like Music 🎵.',
        'I build tech solutions 💻.',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    let mounted = true

    import('typed.js')
      .then((mod) => {
        if (!mounted || !el.current) return
        const TypedCtor = ((mod as unknown) as { default?: typeof Typed }).default ?? ((mod as unknown) as typeof Typed)
        typed.current = new TypedCtor(el.current, options)
      })
      .catch(() => {
        /* ignore load error during build */
      })

    return () => {
      mounted = false
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
          I'm an IT Specialist from Italy with a Bachelor's degree in Computer Science and
          Technology (UNISA). I currently work as a Data Analyst and help clients with digital
          solutions — from PC setups to websites.
        </p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
          <p>This website is used to introduce myself and share my work and articles. </p>
        </div>

        <hr />

        <h3>🛠 Services I offer</h3>
        <ul>
          <li>💻 Custom PC builds and upgrades</li>
          <li>🧰 Hardware/Software troubleshooting</li>
          <li>🌐 Website and blog development</li>
          <li>🔐 Security & backup setup</li>
          <li>📦 Tech consultation for small businesses</li>
        </ul>

        <hr />

        <h3>📞 Contact</h3>
        <ul>
          <li>
            Email: <a href="mailto:cribus96@gmail.com">Work Mail</a>
          </li>
          <li>
            Telegram: <a href="https://t.me/cribus">@cribus_tech</a>
          </li>
          <li>
            Telegram Canale Offere : <a href="https://amzn.to/3Vzdkxv">@Offerte_tech</a>
          </li>
          <li>Location: Campania, Italy (remote services available)</li>
        </ul>

        <hr />

        <p>
          🔗 Looking for my recommendations? Check out my <Link href="/blog">blog articles</Link>{' '}
          with tools I use daily.
        </p>
      </div>
    </div>
  )
}

export default Greetings
