import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { FaGitAlt } from "react-icons/fa6";

export default function MediaCard({pathimg, title, content, pathgit}) {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }} className='card-container' id="card">
      <CardMedia
        sx={{ height:240}}
        image={pathimg}
        title={title}
      />
      <CardContent
      sx={{height:110}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='typography'>
          {content}
        </Typography>
        </CardContent>
        <CardActions>
        <a href={pathgit} rel="noopener noreferrer" className= "p-3 link-socialmedia" target="_blank"><FaGitAlt/></a>
        </CardActions> 
    </Card>
    </div>
  );
};