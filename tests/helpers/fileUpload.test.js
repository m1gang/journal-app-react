
import { fileUpload } from "../../src/helpers/fileUpload";

describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://cdna.artstation.com/p/assets/images/images/083/920/488/4k/thomas-roisland-walking-home-v2-9-compr.jpg?1737478009';

        // Obtén la imagen como blob
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        console.log('File to upload:', file);

        // Sube la imagen
        const url = await fileUpload(file);

        console.log('URL devuelta por fileUpload:', url); // Debugging
        expect(typeof url).toBe('string');
    },15000);


});
