import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Layout } from '../components/layout';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { apiPath } from '../config';

export default function Import() {
  const router = useRouter();

  const [label, setLabel] = useState("")
  const [candidate_csv, setCandidateCsv] = useState("")
  const [destination_csv, setDestinationCsv] = useState("")

  const [openLoading, setOpenLoading] = useState(false);
  const [openFinish, setOpenFinish] = useState(false);
  const [openError, setOpenError] = useState(false);

  function onChangedLabel(event) {
    setLabel(event.target.value)
  }

  async function onChangeCandidate(event) {
    setCandidateCsv(await event.target.files[0].text())
  }

  async function onChangeDestination(event) {
    setDestinationCsv(await event.target.files[0].text())
  }

  async function nextStep() {
    if (label == "" || candidate_csv == "" || destination_csv == "") {
      setOpenError(true)
      return
    }
    setOpenLoading(true)
    const candidate = candidate_csv.split('\n').map((row) => row.split(',')).map((row) => {
      return {
        label: row[0],
        preference: row.slice(1).map(c => c.trim()).join(',')
      }
    });

    const destination = destination_csv.split('\n').map((row) => row.split(',')).map((row) => {
      return {
        label: row[0],
        capacity: row[1],
        preference: row.slice(2).map(d => d.trim()).join(',')
      }
    });

    await axios.post(`${apiPath}/api/import_project/`, { 
      label: label,
      candidate: candidate,
      destination: destination
    })
    setOpenLoading(false)
    setOpenFinish(true)
  }

  const handleCloseFinish = () => {
    setOpenFinish(false)
  }
  const handleCloseError = () => {
    setOpenError(false)
  }

  return (
    <Layout>
      <h1 className={styles.title}>
        プロジェクトの読み込み
      </h1>
      <div className='mt-8'>
        <TextField label="プロジェクト名" variant="outlined" onChange={onChangedLabel}></TextField>
      </div>
      <div className='mt-8'>
        <label>
          候補者: <input type="file" accept='text/csv'  onChange={onChangeCandidate}/>
        </label>
      </div>
      <div className='mt-8'>
        <label>
          配属先: <input type="file" accept='text/csv' onChange={onChangeDestination}/>
        </label>
      </div>
      <Button variant="outlined" onClick={nextStep} className="mt-10">
        決定
      </Button>

      <Dialog
        open={openLoading}
      >
        <DialogTitle>処理中...</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>

      <Dialog
        open={openFinish}
      >
        <DialogTitle>完了</DialogTitle>
        <DialogContent>読み込みが完了しました。</DialogContent>
        <DialogActions>
          <Button onClick={router.back}>戻る</Button>
          {/* <Button onClick={handleCloseFinish}>もう一件追加する</Button> */}
        </DialogActions>
      </Dialog>

      <Dialog
        open={openError}
      >
        <DialogTitle>エラー</DialogTitle>
        <DialogContent>データを確認してください。</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseError}>OK</Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}