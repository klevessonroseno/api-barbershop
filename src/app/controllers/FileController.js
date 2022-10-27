
class FileController {
  async store(req, res) {
    const { originalname, filename  } = req.file;
    return res.status(200).json({ originalname, filename });
  }
}

export default new FileController();