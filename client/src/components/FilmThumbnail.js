function FilmThumbnail( { film } ) {

    const {image_url} = film

    return (
      <div>
        <img src={image_url} alt="filmPoster"/>
      </div>
    );
  }
  
export default FilmThumbnail;