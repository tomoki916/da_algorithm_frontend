import { Layout } from "../../components/layout";
import { useRouter } from 'next/router';
import { Panel, SmallPanel } from "../../components/panel";
import { useState, useEffect } from "react";
import { Button, TextField, IconButton, Checkbox, Typography, Divider, Paper } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import styles from '../../styles/Home.module.css'
import axios from 'axios';
import { apiPath } from '../../config';

export default function Setting() {
  const router = useRouter()
  const project = {
    label: '',
  }
  const { label, c, d } = router.query
  const [candidate_set, setCandidateSet] = useState([])
  const [destination_set, setDestinationSet] = useState([])
  project.label = label === '' ? '新しいプロジェクト' : label

  let _candidate_set = []
  let _destination_set = []
  if (c && d) {
    const _candidate_preferenece = 
    _candidate_set = [...Array(Number(c))].map((_, i) => {
      return {
        id: i,
        label: `新入社員${i+1}`,
        tmpPreference: [...Array(Number(d))].map((_i, j) => {
          return {
            id: j,
            active: true
          }
        })
      }
    })
    _destination_set = [...Array(Number(d))].map((_, i) => {
      return {
        id: i,
        label: `配属先${i+1}`,
        capacity: c,
        tmpPreference: [...Array(Number(c))].map((_i, j) => {
          return {
            id: j,
            active: true
          }
        })
      }
    })
  }

  useEffect(() => {
    setCandidateSet(_candidate_set)
    setDestinationSet(_destination_set)
  }, [])

  async function nextStep() {
    project.candidate_set = candidate_set.map((candidate, index) => {
      return {
        label: candidate.label,
        preference: [
          ...candidate.tmpPreference.filter((destination) => (destination.active)).map((destination) => {
            return destination_set.find((d) => (d.id === destination.id)).label
          })
        ]
      }
    })
    project.destination_set = destination_set.map((destination, index) => {
      return {
        label: destination.label,
        capacity: destination.capacity,
        preference: [
          ...destination.tmpPreference.filter((candidate) => (candidate.active)).map((candidate) => {
            return candidate_set.find((c) => (c.id === candidate.id)).label
          })
        ]
      }
    })
    const response = await axios.post(`${apiPath}/api/project/`, { 
      ...project
    })
    router.push(
      {
        pathname: '/history/detail/',
        query: {
          id: response.data.id
        }
      }
    )
  }

  function onChangeCandidateName(value, index) { 
    setCandidateSet(
      candidate_set.map((candidate, _index) => {
        if (_index === index) {
          candidate.label = value
        } 
        return candidate
      }
    ))
  }

  function onChangeDestinationName(value, index) { 
    setDestinationSet(
      destination_set.map((destination, _index) => {
        if (_index === index) {
          destination.label = value
        } 
        return destination
      }
    ))
  }

  function setCapacity(value, index) {
    setDestinationSet(
      destination_set.map((destination, _index) => {
        if (_index === index) {
          destination.capacity = value
        } 
        return destination
      }
    ))
  }

  function onChangedCandidateCheck(value, cIndex, dIndex) {
    setCandidateSet(
      candidate_set.map((candidate, _index) => {
        if (_index === cIndex) {
          candidate.tmpPreference[dIndex].active = value
        }
        return candidate
      })
    )
  }

  function onClickCandidateDown(cIndex, dIndex) {
    setCandidateSet(
      candidate_set.map((candidate, _index) => {
        if (_index === cIndex) {
          const _remove = candidate.tmpPreference.splice(dIndex, 1)
          candidate.tmpPreference.splice(dIndex+1, 0, ..._remove)
        }
        return candidate
      })
    )
  }

  function onClickCandidateUp(cIndex, dIndex) {
    setCandidateSet(
      candidate_set.map((candidate, _index) => {
        if (_index === cIndex) {
          const _remove = candidate.tmpPreference.splice(dIndex, 1)
          candidate.tmpPreference.splice(dIndex-1, 0, ..._remove)
        }
        return candidate
      })
    )
  }

  function onChangedDestinationCheck(value, dIndex, cIndex) {
    setDestinationSet(
      destination_set.map((destination, _index) => {
        if (_index === dIndex) {
          destination.tmpPreference[cIndex].active = value
        }
        return destination
      })
    )
  }

  function onClickDestinationDown(dIndex, cIndex) {
    setDestinationSet(
      destination_set.map((destination, _index) => {
        if (_index === dIndex) {
          const _remove = destination.tmpPreference.splice(cIndex, 1)
          destination.tmpPreference.splice(cIndex+1, 0, ..._remove)
        }
        return destination
      })
    )
  }

  function onClickDestinationUp(dIndex, cIndex) {
    setDestinationSet(
      destination_set.map((destination, _index) => {
        if (_index === dIndex) {
          const _remove = destination.tmpPreference.splice(cIndex, 1)
          destination.tmpPreference.splice(cIndex-1, 0, ..._remove)
        }
        return destination
      })
    )
  }

  return (
    <Layout title={project.label}>
      <div className='text-center'>
        <Typography color="red" variant="h5">
          個人情報は入力しないでください
        </Typography>
      </div>
      <Typography variant="h6">
          候補者: 
      </Typography>
      <div className="flex mt-2">
        {candidate_set.map((candidate, index) => {
          return <Panel key={`cand-${index}`}>
            <TextField
              variant="outlined" 
              defaultValue={candidate.label} 
              onChange={(event) => {onChangeCandidateName(event.target.value, index)}} />
            <Divider className="mt-2 mb-1"/>
            希望順
            <div className="mt-2">
              {candidate.tmpPreference.map((destination, _index) => {
                const destinationLabel = destination_set.find((d) => (d.id === destination.id)).label
                return <Paper key={`innerC-${_index}`} variant="outlined" className="mt-1">
                  <Checkbox checked={destination.active} onChange={(event) => onChangedCandidateCheck(event.target.checked, index, _index)}></Checkbox>
                  {destinationLabel}
                  <div>
                  <IconButton aria-label="down" size="large" onClick={()=>onClickCandidateDown(index, _index)} disabled={_index === candidate.tmpPreference.length-1}>
                    <ArrowCircleDownIcon />
                  </IconButton>
                  <IconButton aria-label="up" size="large" onClick={()=>onClickCandidateUp(index, _index)} disabled={_index === 0}>
                    <ArrowCircleUpIcon />
                  </IconButton>
                  </div>
                </Paper>
              })}
            </div>
          </Panel>
        })}
      </div>
      <Divider className="my-4"/>

      <Typography variant="h6">
        配属先: 
      </Typography>
      <div className="flex mt-2">
        {destination_set.map((destination, index) => {
          return <Panel key={`dest-${index}`}>
             <TextField
              variant="outlined" 
              defaultValue={destination.label} 
              onChange={(event) => {onChangeDestinationName(event.target.value, index)}} />
            <div className="text-center my-2">
              <div>
              最大数: {destination.capacity}
              </div>
              <IconButton aria-label="down" size="large" onClick={()=>setCapacity(destination.capacity-1, index)} disabled={destination.capacity <= 1}>
                <ArrowCircleDownIcon />
              </IconButton>
              <IconButton aria-label="up" size="large" onClick={()=>setCapacity(destination.capacity+1, index)} disabled={destination.capacity >= c}>
                <ArrowCircleUpIcon />
              </IconButton>
            </div>
            <Divider className="mt-2 mb-1"/>
            希望順
            <div>
              {destination.tmpPreference.map((candidate, _index) => {
                  const candidateLabel = candidate_set.find((c) => (c.id === candidate.id)).label
                  return <Paper key={`innerD-${_index}`} className="mt-1" variant="outlined">
                    <Checkbox checked={candidate.active} onChange={(event) => onChangedDestinationCheck(event.target.checked, index, _index)}></Checkbox>
                    {candidateLabel}
                    <div>
                    <IconButton aria-label="down" size="large" onClick={()=>onClickDestinationDown(index, _index)} disabled={_index === destination.tmpPreference.length-1}>
                      <ArrowCircleDownIcon />
                    </IconButton>
                    <IconButton aria-label="up" size="large" onClick={()=>onClickDestinationUp(index, _index)} disabled={_index === 0}>
                      <ArrowCircleUpIcon />
                    </IconButton>
                    </div>
                  </Paper>
                })}
            </div>
          </Panel>
        })}
      </div>

      <div className="mt-8" />
      <Button variant="outlined" onClick={nextStep} size="large">
        登録
      </Button>
    </Layout> 
  )
}