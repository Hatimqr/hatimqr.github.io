import { TopBar } from '@/components/TopBar'
import { Hook } from '@/components/frames/Hook'
import { Origin } from '@/components/frames/Origin'
import { Pattern } from '@/components/frames/Pattern'
import { Corporate } from '@/components/frames/Corporate'
import { NerdOne } from '@/components/frames/NerdOne'
import { NerdTwo } from '@/components/frames/NerdTwo'
import { Human } from '@/components/frames/Human'
import { PackDB } from '@/components/frames/PackDB'
import { LLM } from '@/components/frames/LLM'
import { Reality } from '@/components/frames/Reality'
import { Closing } from '@/components/frames/Closing'

function App() {
  return (
    <main className="grain">
      <TopBar />
      <Hook />
      <Origin />
      <Pattern />
      <Corporate />
      <NerdOne />
      <NerdTwo />
      <Human />
      <PackDB />
      <LLM />
      <Reality />
      <Closing />
    </main>
  )
}

export default App
