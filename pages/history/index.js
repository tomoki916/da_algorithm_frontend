import { Button } from '@mui/material';
import { Layout } from '../../components/layout';
import useSWR from 'swr';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import { apiPath } from '../../config';
import Link from 'next/link';

export default function History() {

  async function getProjects(endpoint) {
    const response = await axios.get(`${apiPath}${endpoint}`)
    return response.data
  }
  const { data } = useSWR('/api/project/', getProjects);

  if (!data) {
    return (
      <Layout>
        <div className='text-center'>
          <CircularProgress />
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="例">
      <div>
        <List>
          {data.map((project, index) => {
            return (
              <Link href={`/history/detail?id=${project.id}`} style={{ textDecoration: 'none', color: 'black' }}  key={`list-${index}`}>
                <a>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={project.label}
                    />
                </ListItem>
                </a>
              </Link>
            )})}
        </List>
      </div>
    </Layout>
  )
}