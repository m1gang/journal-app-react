import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving:true,
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
        addNewEmptyNote: (state,action) => {

        },
        setActiveNote: (state,action) => {

        },
        setNotes:(state,action) => {
            
        },
        setSaving: (state) => {

        },
        updateNote: (state) => {

        },
        deleteNoteById: (state,action) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById } = journalSlice.actions;