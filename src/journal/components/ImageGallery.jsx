/* eslint-disable react/prop-types */
import { ImageList, ImageListItem } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const ImageGallery = ({images}) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {images.map( image => (
        <ImageListItem key={image}>
          <img
            srcSet={`${image}?w=150&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt='Imagen de la Nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

