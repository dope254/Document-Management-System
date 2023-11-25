const DocumentShares = {
  shareDocument(req, res) {
    const { documentId, userIdToShareWith } = req.body;

    DocumentShares.create({
      documentId,
      userId: userIdToShareWith,
    })
      .then(() => {
        res.status(200).json({ message: "Document shared successfully" });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "Error sharing document", error: error.message });
      });
  },
};

export default DocumentShares;
