import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Chip, Link, Paper, Typography } from '@mui/material';

export function Panel(props) {
  return (
    <div className="mr-2 mb-2">
      <Link href={props.href} style={{ textDecoration: 'none' }}>
        <Card variant="outlined" className="w-48">
          <CardContent>
            { props.children }
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export function SmallPanel(props) {
  return (
    <div className="mr-2 mb-2">
      <div className='inline-block rounded-full border-2 border-gray-200 px-2'>
        {props.children}
      </div>
    </div>
  );
}