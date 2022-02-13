import Head from 'next/head'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import { useRouter } from 'next/router';
import { IconButton, Link, Typography } from '@mui/material';
import styles from '../styles/Home.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider } from '@mui/private-theming';
import {theme } from '../theme'
import HomeIcon from '@mui/icons-material/Home';
export function Layout(props) {
  const router = useRouter()
  
  return (
    <ThemeProvider theme={theme}>
    <div className={styles.container}>
      <Head>
        <title>DAアルゴリズムデモ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static" elevation={0} color="primary">
        <Toolbar variant="dense">
          <IconButton onClick={() => router.back()} color="inherit">
            <ArrowBackIosIcon></ArrowBackIosIcon>
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="white">
              { props.title }
            </Typography>
          <IconButton onClick={() => router.push('/')} color="inherit" aria-controls="menu-appbar">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        { props.children }
      </main>
    </div>
  </ThemeProvider>
  )
}

export function HomeLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAアルゴリズムデモ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}