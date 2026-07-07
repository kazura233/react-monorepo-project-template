import './v5-patch-for-react-19.mjs'
import '~/$bootstrap'
import { Root } from '~/components/root'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<Root />)
