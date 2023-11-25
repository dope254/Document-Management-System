import db from '../models/index';
import Helper from '../Helper/Helper';

const Document = {
  /**
    * Create a new document
    * Route: POST: /documents/
    * @param {Object} req request object
    * @param {Object} res response object
    * @returns {void|Object} response object or void
    */
  create(req, res) {
    db.Documents
      .create(req.docInput)
       .then((document) => {
         document = Helper.getDocument(document);
         res.status(201)
          .send({
            message: 'Your document has been successfully created',
            document
          });
       })
       .catch(error => res.status(500).send(error.errors));
  },
  /**
    * Get all document
    * Route: GET: /documents/
    * @param {Object} req request object
    * @param {Object} res response object
    * @returns {void} response object or void
    */
  getAll(req, res) {
    req.dmsFilter.attributes = Helper.getDocAttribute();
    db.Documents
      .findAndCountAll(req.dmsFilter)
      .then((documents) => {
        const condition = {
          count: documents.count,
          limit: req.dmsFilter.limit,
          offset: req.dmsFilter.offset
        };
        delete documents.count;
        const pagination = Helper.pagination(condition);
        res.status(200)
          .send({
            message: 'You have successfully retrieved all documents',
            documents,
            pagination
          });
      });
  },
  /**
    * Get document by ID
    * Route: GET: /documents/:id
    * @param {Object} req request object
    * @param {Object} res response object
    * @returns {void|Response} response object or void
    */
  getDocument(req, res) {
    const document = Helper.getDocument(req.singleDocument);
    return res.status(200)
      .send({
        message: 'You have successfully retrived this document',
        document
      });
  },
  /**
    * Update document by id
    * Route: PUT: /documents/:id
    * @param {Object} req request object
    * @param {Object} res response object
    * @returns {void} no returns
    */
  update(req, res) {
    req.docInstance.update(req.body)
      .then(updatedDocument => res.status(200)
        .send({
          message: 'This document has been updated successfully',
          updatedDocument
        }))
      .catch(error => res.status(500).send(error.errors));
  },
  /**
    * Delete document by id
    * Route: DELETE: /documents/:id
    * @param {Object} req request object
    * @param {Object} res response object
    * @returns {void} no returns
    */
  delete(req, res) {
    req.docInstance.destroy()
      .then(() => res.status(200)
         .send({
           message: 'This document has been deleted successfully'
         })
      );
  },
  /**
    * Search document
    * Route: GET: /searchs?query={}
    * @param {Object} req request object
    * @param {Object} res response object
    * @returns {void|Response} response object or void
    */
  search(req, res) {
    req.dmsFilter.attributes = Helper.getDocAttribute();
    db.Documents
      .findAndCountAll(req.dmsFilter)
      .then((documents) => {
        const condition = {
          count: documents.count,
          limit: req.dmsFilter.limit,
          offset: req.dmsFilter.offset
        };
        delete documents.count;
        const pagination = Helper.pagination(condition);
        res.status(200)
          .send({
            message: 'This search was successfull',
            documents,
            pagination
          });
      });
  },
/**
   * Share a document with another user
   * Route: POST: /documents/share
   * @param {Object} req request object containing documentId and userIdToShareWith
   * @param {Object} res response object
   * @returns {void} response with success or error message
   */
shareDocument(req, res) {
  const { documentId, userIdToShareWith } = req.body;

  db.DocumentShares.create({
    documentId,
    userId: userIdToShareWith,
  })
    .then(() => {
      res.status(200).json({ message: "Document shared successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error sharing document", error: error.message });
    });
},

};

export default Document;