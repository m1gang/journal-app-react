import { DeleteOutline, SaveOutlined, UploadFile } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"



export const NoteView = () => {
    const dispatch = useDispatch();

    const { active: note, isSaving } = useSelector(state => state.journal)

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString()
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));

    }, [formState]);

    // useEffect(() => {
    //     if( messageSaved.length > 0){

    //     }
    // }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());

    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>

                <input type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }} />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}>
                    <UploadFile
                    />
                </IconButton>

                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="primary"
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese su titulo"
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio el dia de hoy?"
                    label='Descripción'
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            {/* Image gallery */}
            <ImageGallery images={note.imageUrls} />

        </Grid>
    )
}
