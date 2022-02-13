import useSWR from 'swr';
import axios from 'axios';
import { Layout } from "../../components/layout";
import { Loading } from "../../components/loading";
import { Panel, SmallPanel } from "../../components/panel";
import { useRouter } from 'next/router';
import { apiPath } from '../../config';
import { Button, Divider, Typography } from '@mui/material';
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import { getColor } from '../../utils';

export default function HistoryDetail() {

  const router = useRouter()
  const { id } = router.query
  let daResult = []
  let bostonResult = []

  async function getProjects(id) {
    if (!id) {
      return null
    }
    const response = await axios.get(`${apiPath}/api/project/${id}/`)
    return response.data
  }
  const { data } = useSWR(id, getProjects);
  if (!data) {
    return (
      <Layout>
        <Loading />
      </Layout>
    )
  } else {
    data.candidate_set.map((candidate, index) => {
      candidate.color = getColor(index, 200)
      return candidate
    })
    data.destination_set.map((destination, index) => {
      destination.color = getColor(index, 400, 2)
      return destination
    })
    daResult = data.result_set.filter((r) => r.type==='da')
    bostonResult = data.result_set.filter((r) => r.type==='boston')
  }
  
  async function assign(assignType) {
    await axios.post(`${apiPath}/api/project/${id}/assign/`, { 
      assign_type: assignType,
    })
    location.reload()
  }

  return (
    <Layout title={data.label}>
      
      {/* 候補者の表示 */}
      <div>
        <Typography variant="h6">
          候補者: 
        </Typography>
        <div className="flex flex-wrap mt-4">
          {data.candidate_set.map((candidate, index) => {
            return (
              <Panel key={`cand-${index}`}>
                <div className='font-bold a'>
                  <CircleIcon
                    className='mr-2'
                    fontSize='small'
                    sx={{ color: candidate.color }}
                  />
                  {candidate.label}
                </div>
                <Divider />
                希望順
                <div className='mt-2'>
                  {candidate.preference.split(',').map((destination, index) => {
                    const destinationColor = data.destination_set.find((d) => (d.label === destination)).color
                    return (
                      <div className='flex align-center' key={`${candidate.label}-${index}`}>
                        <div className='mr-2'>
                        { index + 1} 
                        </div>
                        <SmallPanel>
                          <SquareIcon
                            fontSize='small'
                            className='mr-1'
                            sx={{ color: destinationColor }}
                          />
                          {destination}
                        </SmallPanel>
                      </div>
                    )
                  })}
                </div>
              </Panel>
            )
          })}
        </div>
      </div>

      <Divider className='my-6'/>

      {/* 配属先の表示 */}
      <div>
        <Typography variant="h6">
          配属先: 
        </Typography>
        <div className="flex flex-wrap mt-4">
          {data.destination_set.map((destination, index) => {
            return (
              <Panel key={`dest-${index}`}>
                <div className='font-bold'>
                  <SquareIcon
                    className='mr-2'
                    fontSize='small'
                    sx={{ color: destination.color }} />
                  {destination.label}
                </div>
                <div className='mt-2'>
                  <span>最大数: </span>{destination.capacity}
                </div>
                <Divider />
                希望順
                <div className='mt-2'>
                  {destination.preference.split(',').map((candidate, index) => {
                      const candidateColor = data.candidate_set.find((c) => (c.label === candidate)).color
                      return (
                        <div className='flex align-center' key={`${destination.label}-${index}`}>
                          <div className='mr-2'>
                          { index + 1} 
                          </div>
                          <SmallPanel>
                            <CircleIcon
                              fontSize='small'
                              className='mr-1'
                              sx={{ color: candidateColor }}
                            />
                            {candidate}
                          </SmallPanel>
                        </div>
                      )
                    })}
                </div>
              </Panel>
            )
          })}
        </div>
      </div>
      <Divider className='my-6'/>

      {/* daアルゴリズムによる割り当て */}
      <div>
        <Typography variant="h6">
          DAアルゴリズムによる割り当て
        </Typography>
        <div className='mt-2'>
          <ResultDisplay result={daResult} candidate_set={data.candidate_set} destination_set={data.destination_set}></ResultDisplay>
          { daResult.length === 0 &&
          <div className='mt-2'>
            <Button onClick={() => assign('da')} variant="outlined">
              割り当て
            </Button>
          </div>
          }
        </div>
      </div>
      <Divider className='my-6'/>

      {/* daアルゴリズムによる割り当て */}
      <div>
        <Typography variant="h6">
          ボストン方式による割り当て
        </Typography>
        <div className='mt-2'>
          <ResultDisplay result={bostonResult} candidate_set={data.candidate_set} destination_set={data.destination_set}></ResultDisplay>
          { bostonResult.length === 0 &&
          <div className='mt-2'>
            <Button onClick={() => {assign('boston')}} variant="outlined">
              割り当て
            </Button>
          </div>
          }
        </div>
      </div>
    </Layout>
  )
}

function ResultDisplay(props) {
  if (props.result.length > 0) {
    const result = props.result[0].data
    return (
      <div>
        <div className='flex'>
        {
          result.destinations.map((destination, index) => {
            const destinationColor = props.destination_set.find((d)=>(d.label === destination.label))
            return (
            <Panel key={`result-${index}`}>
              <div className='font-bold'>
                <SquareIcon
                    className='mr-2'
                    fontSize='small'
                    sx={{ color: destinationColor }} />
                {destination.label}
              </div>
              <Divider className='my-2'/>
              <div>
                {destination.accept.map((candidate, index) => {
                  const candidateColor = props.candidate_set.find((c)=>(c.label === candidate.label))
                  return (
                    <SmallPanel key={`rc-${index}`}>
                      <CircleIcon
                        fontSize='small'
                        className='mr-1'
                        sx={{ color: candidateColor }}
                      />
                      {candidate.label}
                    </SmallPanel>
                  )
                })}
              </div>
            </Panel>
            )
          })
        }
        </div>
        <div className='mt-2'>
          未配属:
          <div  className='flex mt-2'>
          {
            result.remains.map((candidate, index) => {
              const candidateColor = props.candidate_set.find((c)=>(c.label === candidate.label))
              return (
              <SmallPanel key={`remain-${index}`}>
                <CircleIcon
                  fontSize='small'
                  className='mr-1'
                  sx={{ color: candidateColor }}
                />
                {candidate.label}
              </SmallPanel>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        まだ結果がありません。
      </div>
    )
  }
}