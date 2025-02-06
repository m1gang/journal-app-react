export const fileUpload = async( file) => {
    if( !file ) throw new Error('No tenemos ningún archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dknm29u01/upload';

    const formData = new FormData();

    formData.append('upload_preset','journal-react');
    formData.append('file', file);
    
    try {

        const resp = await fetch( cloudUrl,{
            method:'POST',
            body: formData
        } );

        console.log(resp);
        if (!resp.ok) throw new Error('No se pudo subir la imagen');

        const cloudResp = resp.json();
        console.log({cloudResp});
        
        return cloudResp.secure_url;
        
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
        
        
    }
}