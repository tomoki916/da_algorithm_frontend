import { Button, TextField, Card, CardContent, IconButton } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Layout } from '../../components/layout';
import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Create() {
  const router = useRouter()
  const [label, setLabel] = useState("")
  const [candidateNum, setCandidateNum] = useState(1)
  const [destinationNum, setDestinationNum] = useState(1)
  function onChangedLabel(event) {
    setLabel(event.target.value)
  }

  function nextStep() {
    router.push({
      pathname: '/create/setting/',
      query: {
        label: label,
        c: candidateNum,
        d: destinationNum
      }
    })
  }
  return (
    <Layout title="新規プロジェクトの作成">
      <div className='mt-2'>
        <TextField label="プロジェクト名" variant="outlined" onChange={onChangedLabel}></TextField>
      </div>
      <div className="mt-8" />
      <div className='flex'>
        <div className='mx-2'>
          <Card variant="outlined">
            <CardContent>
              <div className='font-bold text-center'>候補者の数</div>
              <div className='my-2 text-center text-4xl'>{candidateNum}</div>
              <IconButton aria-label="down" size="large" onClick={()=>setCandidateNum(candidateNum-1)} disabled={candidateNum <= 1}>
                <ArrowCircleDownIcon />
              </IconButton>
              <IconButton aria-label="up" size="large" onClick={()=>setCandidateNum(candidateNum+1)} disabled={candidateNum >= 10}>
                <ArrowCircleUpIcon />
              </IconButton>
            </CardContent>
          </Card>
        </div>

        <div className='mx-2'>
          <Card variant="outlined">
            <CardContent>
              <div className='font-bold text-center'>配属先の数</div>
              <div className='my-2 text-center text-4xl'>{destinationNum}</div>
              <IconButton aria-label="down" size="large" onClick={()=>setDestinationNum(destinationNum-1)} disabled={destinationNum <= 1}>
                <ArrowCircleDownIcon />
              </IconButton>
              <IconButton aria-label="up" size="large" onClick={()=>setDestinationNum(destinationNum+1)} disabled={destinationNum >= 10}>
                <ArrowCircleUpIcon />
              </IconButton>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-16" />
      <Button variant="outlined" onClick={nextStep}>
        次へ
      </Button>
    </Layout>
  )
}
