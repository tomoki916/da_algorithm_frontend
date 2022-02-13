import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { HomeLayout } from '../components/layout';
import { grey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PublishIcon from '@mui/icons-material/Publish';
import Link from 'next/link';

function HomeIcon(props) {
  return (
    <Link href={props.href} style={{ textDecoration: 'none' }} className="text-center">
      <a>
      <div className='text-center'>
        <div className='w-16 h-16 rounded-full border-2 flex justify-center items-center border-gray-200'>
          { props.children }
        </div>
        <div className='text-gray-600	mt-2'>
          {props.title}
        </div>
      </div>
      </a>
    </Link>
  )
}

function HomeSpacer(props) {
  return (
    <div className='mx-5' />
  )
}

export default function Home() {
  return (
    <HomeLayout>
      <div className="mt-16" />
      <h1 className={styles.title}>
        Differed Acceptance Algorithm Demo
      </h1>

      <div className="mt-16" />

      <div className={styles.grid}>
        <HomeIcon title="はじめる" href="/create/">
          <AddIcon sx={{ color: grey[500] }} />
        </HomeIcon>
        <HomeSpacer />
        <HomeIcon title="例" href="/history/">
          <FormatListBulletedIcon sx={{ color: grey[500] }} />
        </HomeIcon>
        {/* <HomeIcon title="JOIN" href="/join/">
          <GroupAddIcon sx={{ color: grey[500] }} />
        </HomeIcon>
        <HomeSpacer /> */}
        {/* <HomeIcon title="HISTORY" href="/history/">
          <FormatListBulletedIcon sx={{ color: grey[500] }} />
        </HomeIcon>
        <HomeSpacer />
        <HomeIcon title="IMPORT" href="/import/">
          <PublishIcon sx={{ color: grey[500] }} />
        </HomeIcon> */}
      </div>
    </HomeLayout>
  )
}
