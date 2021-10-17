import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography sx={{marginTop:"5vh"}} variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://jabarcodingcamp.id/">
        JCC Harry Herdiana
      </MuiLink>
      {new Date().getFullYear()}.
    </Typography>
  );
}
