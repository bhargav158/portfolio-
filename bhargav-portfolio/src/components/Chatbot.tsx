import { useState, useRef, useEffect } from 'react'
import { chatResponses } from '../data'
import styles from './Chatbot.module.css'

interface Message { role: 'bot' | 'user'; text: string; time: string }

const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

const getResponse = (input: string): string => {
  const q = input.toLowerCase()
  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) return chatResponses.hi
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) return chatResponses.skills
  if (q.includes('project') || q.includes('built') || q.includes('work')) return chatResponses.projects
  if (q.includes('experience') || q.includes('job') || q.includes('intern') || q.includes('company')) return chatResponses.experience
  if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('phone')) return chatResponses.contact
  if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('amc')) return chatResponses.education
  if (q.includes('publish') || q.includes('paper') || q.includes('research') || q.includes('journal')) return chatResponses.publications
  if (q.includes('gpa') || q.includes('grade') || q.includes('score') || q.includes('marks')) return chatResponses.gpa
  if (q.includes('award') || q.includes('prize') || q.includes('win') || q.includes('achiev')) return chatResponses.award
  if (q.includes('hire') || q.includes('available') || q.includes('open') || q.includes('looking') || q.includes('job')) return chatResponses.hire
  return "I'm not sure about that — try asking about Bhargav's **skills**, **projects**, **experience**, **publications**, or how to **contact** him! 😊"
}

const QUICK = ['Skills', 'Projects', 'Contact', 'Publications', 'Hire him?']

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Message[]>([
    { role: 'bot', text: chatResponses.default, time: getTime() }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { role: 'user', text, time: getTime() }
    setMsgs(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(prev => [...prev, { role: 'bot', text: getResponse(text), time: getTime() }])
    }, 900)
  }

  const renderText = (t: string) =>
    t.split('\n').map((line, i) => (
      <span key={i}>
        {line.split(/\*\*(.+?)\*\*/g).map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
        )}
        {i < t.split('\n').length - 1 && <br />}
      </span>
    ))

  return (
    <>
      {/* FAB */}
      <button className={`${styles.fab} ${open ? styles.fabOpen : ''}`} onClick={() => setOpen(o => !o)}>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
        )}
        {!open && <span className={styles.fabPing} />}
      </button>

      {/* Window */}
      {open && (
        <div className={styles.window}>
          {/* header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.avatarBot}>🤖</div>
              <div>
                <div className={styles.botName}>Bhargav's AI Assistant</div>
                <div className={styles.botStatus}><span className={styles.statusDot}/>Online</div>
              </div>
            </div>
            <button className={styles.close} onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* messages */}
          <div className={styles.messages}>
            {msgs.map((m, i) => (
              <div key={i} className={`${styles.msgRow} ${m.role === 'user' ? styles.userRow : ''}`}>
                {m.role === 'bot' && <div className={styles.botAvatar}>🤖</div>}
                <div className={`${styles.bubble} ${m.role === 'user' ? styles.userBubble : styles.botBubble}`}>
                  {renderText(m.text)}
                  <div className={styles.msgTime}>{m.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className={styles.msgRow}>
                <div className={styles.botAvatar}>🤖</div>
                <div className={styles.botBubble}>
                  <div className={styles.typing}>
                    <span/><span/><span/>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* quick replies */}
          <div className={styles.quickReplies}>
            {QUICK.map(q => (
              <button key={q} className={styles.quickBtn} onClick={() => send(q)}>{q}</button>
            ))}
          </div>

          {/* input */}
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="Ask me anything..."
            />
            <button className={styles.sendBtn} onClick={() => send(input)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
