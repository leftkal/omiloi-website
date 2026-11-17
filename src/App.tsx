import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { Layout } from './components/Layout'
import { AdminPage } from './pages/AdminPage'
import { ClubPage } from './pages/ClubPage'
import { HomePage } from './pages/HomePage'
import { RegistrationPage } from './pages/RegistrationPage'
import { PresentationsPage } from './pages/PresentationsPage'
import { ClubsHomePage } from './pages/ClubsHomePage'
import { GameLabPage } from './pages/GameLabPage'

const ClubBookPage = lazy(async () => ({ default: (await import('./pages/ClubBookPage')).ClubBookPage }))

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': { title: 'Interactive 3D Lab & Game Lab', description: 'Interactive 3D Lab και Game Lab στο Δημόσιο Ωνάσειο Σχολείο Ημερήσιο Γυμνάσιο Αχαρνών.' },
  '/game-lab': { title: 'Game Lab | Από την ιδέα στο 2D παιχνίδι', description: 'Υλικό και παρουσιάσεις του Game Lab.' },
  '/interactive-3d-lab': { title: 'Interactive 3D Lab', description: 'Από τον τρισδιάστατο σχεδιασμό στην πραγματικότητα.' },
  '/interactive-3d-lab/club': { title: 'Ο Όμιλος | Interactive 3D Lab', description: 'Πληροφορίες για τον Όμιλο Interactive 3D Lab.' },
  '/interactive-3d-lab/book': { title: 'Βιβλίο Ομίλου | Interactive 3D Lab', description: 'Εργασίες και τρισδιάστατα μοντέλα του Interactive 3D Lab.' },
  '/interactive-3d-lab/presentations': { title: 'Παρουσιάσεις | Interactive 3D Lab', description: 'Παρουσιάσεις και υλικό συναντήσεων του Interactive 3D Lab.' },
  '/interactive-3d-lab/registration': { title: 'Δήλωση Ομάδας | Interactive 3D Lab', description: 'Δήλωση ομάδας για το Interactive 3D Lab.' },
  '/interactive-3d-lab/admin': { title: 'Διαχείριση | Interactive 3D Lab', description: 'Διαχείριση δηλώσεων ομάδων του Interactive 3D Lab.' },
}

function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata['/']
    document.title = metadata.title
    updateMeta('name', 'description', metadata.description)
    updateMeta('property', 'og:title', metadata.title)
    updateMeta('property', 'og:description', metadata.description)
    updateMeta('property', 'og:url', window.location.href)
  }, [pathname])

  return null
}

function updateMeta(attribute: 'name' | 'property', value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.content = content
}

export default function App() {
  const book = <Suspense fallback={<div className="shell py-16 text-slate-500">Φόρτωση βιβλίου…</div>}><ClubBookPage /></Suspense>
  return <><PageMetadata /><Routes>
    <Route path="/" element={<ClubsHomePage />} />
    <Route path="/game-lab" element={<GameLabPage />} />
    <Route path="/interactive-3d-lab" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="club" element={<ClubPage />} />
      <Route path="presentations" element={<PresentationsPage />} />
      <Route path="book" element={book} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="admin" element={<AdminPage />} />
    </Route>
    <Route path="/club" element={<Navigate to="/interactive-3d-lab/club" replace />} />
    <Route path="/presentations" element={<Navigate to="/interactive-3d-lab/presentations" replace />} />
    <Route path="/book" element={<Navigate to="/interactive-3d-lab/book" replace />} />
    <Route path="/registration" element={<Navigate to="/interactive-3d-lab/registration" replace />} />
    <Route path="/admin" element={<Navigate to="/interactive-3d-lab/admin" replace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></>
}
