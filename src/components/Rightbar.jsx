import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem, ListItemText, List, ListItem, ListItemAvatar, Divider } from '@mui/material'
import React from 'react'
import AvatarImg from './im.png'
import AvatarImgTwo from './img.jpg'
const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>
          online Freinds
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={AvatarImg} />
          <Avatar alt="Travis Howard" src={AvatarImgTwo} />
          <Avatar alt="Cindy Baker" src={AvatarImg} />
          <Avatar alt="Agnes Walker" src={AvatarImgTwo} />
          <Avatar alt="Trevor Henderson" src={AvatarImg} />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="Amor zaki"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt="Trevor Hendrson"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
              alt="Jhon snow"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567306301408-9b74779a11af"
              alt="Amor zaki"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
              alt="Amor zaki"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
              alt="Amor zaki"
            />
          </ImageListItem>

        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversaions
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={AvatarImg} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={AvatarImgTwo} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={AvatarImg} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar