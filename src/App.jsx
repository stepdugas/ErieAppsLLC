import { Routes, Route, Navigate } from 'react-router-dom'
import FloatingOrbs from './components/FloatingOrbs'
import NoiseOverlay from './components/NoiseOverlay'
import ScanlineEffect from './components/ScanlineEffect'
import CustomCursor from './components/CustomCursor'

import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <FloatingOrbs />
      <NoiseOverlay />
      <ScanlineEffect />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
