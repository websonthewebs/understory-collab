import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { quizQuestions, getCrisisType } from '../data/quizData'
import './Quiz.css'

const HUBSPOT_PORTAL_ID = '21315907'

function trackEvent(eventName, properties = {}) {
  if (window._hsq) {
    window._hsq.push(['trackCustomBehavioralEvent', {
      name: eventName,
      properties,
    }])
  }
}

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [quizComplete, setQuizComplete] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const questionRef = useRef(null)
  const resultRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (quizStarted && questionRef.current) {
      questionRef.current.focus()
    }
  }, [currentQuestion, quizStarted])

  useEffect(() => {
    if (quizComplete && resultRef.current) {
      resultRef.current.focus()
    }
  }, [quizComplete])

  const totalQuestions = quizQuestions.length
  const totalScore = answers.reduce((sum, a) => sum + a.points, 0)
  const crisisType = quizComplete ? getCrisisType(totalScore) : null

  function handleStart() {
    setQuizStarted(true)
    trackEvent('quiz_started')
  }

  function handleSelectAnswer(answer) {
    setSelectedAnswer(answer)
  }

  function handleNext() {
    if (!selectedAnswer) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    trackEvent('quiz_question_answered', {
      question_number: String(currentQuestion + 1),
      answer_label: selectedAnswer.label,
      answer_points: String(selectedAnswer.points),
    })

    setSelectedAnswer(null)

    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const finalScore = newAnswers.reduce((sum, a) => sum + a.points, 0)
      const result = getCrisisType(finalScore)
      setQuizComplete(true)

      trackEvent('quiz_completed', {
        crisis_type: result.name,
        total_score: String(finalScore),
      })
    }
  }

  function handleRestart() {
    setCurrentQuestion(0)
    setAnswers([])
    setSelectedAnswer(null)
    setQuizComplete(false)
    setQuizStarted(false)
  }

  if (!quizStarted) {
    return (
      <div className="quiz-page">
        <section className="quiz-intro" aria-labelledby="quiz-heading">
          <div className="quiz-intro-content">
            <h1 id="quiz-heading">What's On Fire?</h1>
            <p className="quiz-subtitle">A technical health self-assessment</p>
            <p className="quiz-description">
              Six honest questions about the state of your engineering organization.
              No vendor pitch. No lead form. Just a clear-eyed look at where you stand —
              and what it means.
            </p>
            <p className="quiz-meta">
              Takes about 2 minutes. Your answers are anonymous.
            </p>
            <button
              className="btn btn-primary btn-large quiz-start-btn"
              onClick={handleStart}
            >
              Start the Assessment
            </button>
          </div>
        </section>
      </div>
    )
  }

  if (quizComplete && crisisType) {
    return (
      <div className="quiz-page">
        <section className="quiz-result" aria-labelledby="result-heading">
          <div className="quiz-result-content">
            <p className="result-label">Your result</p>
            <h1
              id="result-heading"
              className={`result-type result-type--${crisisType.id}`}
              ref={resultRef}
              tabIndex={-1}
            >
              {crisisType.name}
            </h1>
            <p className="result-description">{crisisType.description}</p>
            <p className="result-details">{crisisType.details}</p>

            <div className="result-cta" aria-labelledby="whitepaper-heading">
              <h2 id="whitepaper-heading">We wrote a field guide for this.</h2>
              <p className="whitepaper-title">{crisisType.whitePaper}</p>
              <p className="whitepaper-description">
                Enter your email to get the guide. We'll send it straight to your
                inbox — no spam, no sequences, just the paper.
              </p>
              <div
                className="hubspot-form-container"
                id="hubspot-quiz-form"
              >
                <HubSpotForm
                  portalId={HUBSPOT_PORTAL_ID}
                  crisisType={crisisType.name}
                />
              </div>
            </div>

            <div className="result-actions">
              <button
                className="btn btn-secondary"
                onClick={handleRestart}
              >
                Retake the Quiz
              </button>
              <Link to="/contact" className="btn btn-primary">
                Let's Talk
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion) / totalQuestions) * 100

  return (
    <div className="quiz-page">
      <section className="quiz-active" aria-labelledby="question-heading">
        <div className="quiz-active-content">
          <div
            className="quiz-progress"
            role="progressbar"
            aria-valuenow={currentQuestion + 1}
            aria-valuemin={1}
            aria-valuemax={totalQuestions}
            aria-label={`Question ${currentQuestion + 1} of ${totalQuestions}`}
          >
            <div
              className="quiz-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="quiz-progress-text">
            {currentQuestion + 1} of {totalQuestions}
          </p>

          <h2
            id="question-heading"
            className="quiz-question"
            ref={questionRef}
            tabIndex={-1}
          >
            {question.question}
          </h2>

          <fieldset className="quiz-answers">
            <legend className="sr-only">Select your answer</legend>
            {question.answers.map((answer) => {
              const isSelected = selectedAnswer?.label === answer.label
              return (
                <label
                  key={answer.label}
                  className={`quiz-answer ${isSelected ? 'quiz-answer--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={answer.label}
                    checked={isSelected}
                    onChange={() => handleSelectAnswer(answer)}
                    className="sr-only"
                  />
                  <span className="answer-label" aria-hidden="true">{answer.label}</span>
                  <span className="answer-text">{answer.text}</span>
                </label>
              )
            })}
          </fieldset>

          <button
            className="btn btn-primary btn-large quiz-next-btn"
            onClick={handleNext}
            disabled={!selectedAnswer}
            aria-label={
              currentQuestion + 1 === totalQuestions
                ? 'See your results'
                : 'Next question'
            }
          >
            {currentQuestion + 1 === totalQuestions ? 'See Results' : 'Next'}
          </button>
        </div>
      </section>
    </div>
  )
}

function HubSpotForm({ portalId, crisisType }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    trackEvent('quiz_whitepaper_requested', {
      crisis_type: crisisType,
    })

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${window.__HUBSPOT_QUIZ_FORM_ID || 'FORM_ID_PLACEHOLDER'}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { objectTypeId: '0-1', name: 'email', value: email },
              { objectTypeId: '0-1', name: 'fire_type', value: crisisType },
            ],
            context: {
              hutk: document.cookie.match(/hubspotutk=([^;]*)/)?.[1] || '',
              pageUri: window.location.href,
              pageName: 'What\'s On Fire? Quiz Results',
            },
          }),
        }
      );

      if (response.ok) {
        setStatus('success')

        if (window._hsq) {
          window._hsq.push(['identify', { email }])
          window._hsq.push(['trackPageView'])
        }
      } else {
        const data = await response.json().catch(() => ({}))
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <p className="form-success-message">
          Check your inbox. The field guide is on its way.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="whitepaper-form" noValidate>
      <div className="form-row">
        <label htmlFor="quiz-email" className="sr-only">
          Email address
        </label>
        <input
          id="quiz-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-describedby={errorMessage ? 'quiz-form-error' : undefined}
          disabled={status === 'submitting'}
          className="form-input"
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Send Me the Guide'}
        </button>
      </div>
      {errorMessage && (
        <p id="quiz-form-error" className="form-error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  )
}

export default Quiz
