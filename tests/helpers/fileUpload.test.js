
import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dknm29u01',
    api_key: '917676779285618',
    api_secret: 'jiW30431Q33mt7tvp6UKMMV6hJE',
    secure: true,
});

describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://cdna.artstation.com/p/assets/images/images/083/920/488/4k/thomas-roisland-walking-home-v2-9-compr.jpg?1737478009';

        
        // Obtén la imagen como blob
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        // console.log('File to upload:', file);

        // Sube la imagen
        const url = await fileUpload(file);

        
        expect(typeof url).toBe('string');

        // console.log(url);
        
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources([imageId],{
            resource_type: 'image'
        });
        
        
        

    },10000);


    test('debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);
        expect(url).toBe( null );
    })
    


});
