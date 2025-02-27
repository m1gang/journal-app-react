
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { startNewNote } from '../../store/journal'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from "sonner"

export const JournalPage = () => {
  const {isSaving,active} = useSelector(state=>state.journal);
  const dispatch = useDispatch();
  const onclickNewNote = () => {
    dispatch(startNewNote());
  }
  
  return (
    <>
    <JournalLayout>
           
        {
          (!!active) ? <NoteView/> : <NothingSelectedView/>
        }      
    
        <IconButton
        disabled={isSaving}
        onClick={onclickNewNote}
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
        <Toaster position="bottom-center" richColors closeButton/>
    </JournalLayout>
    </>
  )
}
