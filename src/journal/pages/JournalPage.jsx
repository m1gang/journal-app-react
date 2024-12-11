
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'


export const JournalPage = () => {
  return (
    <>
    <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloribus explicabo iusto omnis saepe dolorum ex aliquam? Ipsa earum deleniti quaerat esse nesciunt error vel deserunt quos quasi, ratione maiores?</Typography> */}
        <NothingSelectedView/>
        {/* <NoteView/> */}

        <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor:'error.main',
          ':hover':{ backgroundColor:'error.main', opacity:0.8},
          position:'fixed',
          right:50,
          bottom:50
        }}
        >
          <AddOutlined sx={{fonsize:20}}/>
        </IconButton>
    </JournalLayout>
    </>
  )
}
