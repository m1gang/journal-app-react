import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, noteUpdated, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";
import { toast } from "sonner";


export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;


        // uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))

    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const promise = async () => {
            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
            await setDoc(docRef, noteToFireStore, { merge: true });
            return note;
        }

        // Manejo del toast asincrónico
        toast.promise(promise(), {
            loading: 'Guardando nota...',
            success: (updatedNote) => {
                dispatch(noteUpdated(updatedNote));
                return 'Nota actualizada correctamente.';
            },
            error: 'Error al guardar la nota.',
        });


    }
}


export const startUploadingFiles = (files = [] ) => {
    return async(dispatch) => {
        dispatch(setSaving());
        
        // await fileUpload( files[0] );

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch(setPhotosToActiveNote(photosUrls));
        
    }
}

export const startDeletingNote = () => {
    return async(dispatch,getState)=> {

        const {uid} = getState().auth;
        const {active:note} = getState().journal;
        // const docRef = doc(FirebaseDB,`${uid}/journal/notes/${note.id}`);
        // const resp = await deleteDoc( docRef );

        const promise = async () => {
            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
            await deleteDoc(docRef);
            return note.id; // Este valor se pasará al success handler
        };
        
        toast.promise(promise(), {
            loading: 'Eliminando nota...',
            success: (deletedNoteId) => {
                dispatch(deleteNoteById(deletedNoteId));
                return 'Nota eliminada correctamente.';
            },
            error: 'Error al eliminar la nota.',
        });
        
    }
}