const loadProfilePicture = async (req, res, next) => {
  console.log(req.file);
  const { filename } = req.file;
    try {
      return res.status(201).send(`<h2>Here is the picture:</h2><img src="${filename}" alt="Image"/>`);
      
    } catch (err) {
      console.log(err, "Some error");
      next(err);
    }
  };

  const loadCatPicture = async (req, res, next) => {
    console.log(req.file);
    const { filename } = req.file;
      try {
        return res.status(201).send(`<h2>Here is a picture of a cat:</h2><img src="${filename}" alt="Image"/>`);
        
      } catch (err) {
        console.log(err, "Some error");
        next(err);
      }
    };

  module.exports = {
    loadProfilePicture,
    loadCatPicture
   };