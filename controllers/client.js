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
    const cats = req.files;
    try {
      res.status(201).send(
       `<h2>This a picture of a cat:</h2>
       ${cats.map(cat => `<img src="${cat.filename}" alt=”something”/><br />`)}`,
     );
   } catch (err) {
     console.log(err);
     next(err);
   }
 };

  module.exports = {
    loadProfilePicture,
    loadCatPicture
   };