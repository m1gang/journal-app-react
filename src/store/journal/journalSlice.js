import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving:false,
        messageSaved:'',
        notes:[],
        active: null,
        // active:{
        //     id: 'ABC123',
        //     title: '',
        //     body:'',
        //     date: 132564,
        //     imageUrls:[] //  https:imagen1 https:imagen2 https:imagen3     
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = 'true';
        },
        addNewEmptyNote: (state,action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state,action) => {
            state.active = action.payload
            state.messageSaved = '';
        },
        setNotes:(state,action) => {
            state.notes = action.payload;
            
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
 
        },
        noteUpdated: (state,action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note =>{
                if (note.id === action.payload.id) {
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = 'Nota actualizada correctamente';
        },
        setPhotosToActiveNote: (state, action)=> {
            state.active.imageUrls = [...state.active.imageUrls,...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes= [];
            state.active = null;
        },
        deleteNoteById: (state,action) => {
            state.active=null;
            state.notes = state.notes.filter(note=> note.id !== action.payload);
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote,
    clearNotesLogout,
    setActiveNote,
    setNotes,
    setSaving,
    noteUpdated,
    setPhotosToActiveNote,
    deleteNoteById,
} = journalSlice.actions;