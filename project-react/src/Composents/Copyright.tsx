import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <><Typography variant="body2" textAlign={'center'} marginTop={90}>
      {`Copyright © ISITECH ${new Date().getFullYear()}`};
    </Typography>
    </>
  );
}
