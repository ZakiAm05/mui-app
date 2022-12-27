import React from 'react'
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material'
import { Avatar,Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import acer from './acer.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = () => {
  return (
    <Card sx={{margin:5}}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            AZ
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="AMOR Zaki"
        subheader="December 21, 2022"
        />
        <CardMedia
        component="img"
        height="5%"
        image={acer}
        alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
            <Share />
        </IconButton>
        </CardActions>
  </Card>
  )
}

export default Post