export const fileUpload = async (file) => {
    // if (!file) throw new Error('No tenemos ningún archivo a subir');
    if (!file) return null;

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dknm29u01/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'ml_default');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });


        if (!resp.ok) {
            const errorResponse = await resp.json();
            console.error('Error response from Cloudinary:', errorResponse);
            throw new Error('No se pudo subir la imagen');
        }

        const cloudResp = await resp.json();
        console.log('Cloudinary response:', cloudResp);
        return cloudResp.secure_url;


    } catch (error) {
        // throw new Error(error.message);
        console.error('Error en fileUpload:', error);
        return null;
    }
}