import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Layout } from './components/Layout'
import { AdminPage } from './pages/AdminPage'
import { ClubPage } from './pages/ClubPage'
import { HomePage } from './pages/HomePage'
import { RegistrationPage } from './pages/RegistrationPage'
import { PresentationsPage } from './pages/PresentationsPage'
import { ClubsHomePage } from './pages/ClubsHomePage'
import { GameLabPage } from './pages/GameLabPage'

const ClubBookPage = lazy(async () => ({ default: (await import('./pages/ClubBookPage')).ClubBookPage }))

export default function App() {
  const book = <Suspense fallback={<div className="shell py-16 text-slate-500">Φόρτωση βιβλίου…</div>}><ClubBookPage /></Suspense>
  return <Routes>
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
  </Routes>
}
