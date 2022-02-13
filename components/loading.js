import CircularProgress from '@mui/material/CircularProgress';
export function Loading({ children }) {
  return (
    <div className='text-center'>
      <CircularProgress />
    </div>
  )
}
