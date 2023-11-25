import db from "../models/index";

const Sector = {
  /**
   * Create a new sector
   * Route: POST: /sectors
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  create(req, res) {
    db.Sectors.create(req.sectorInput)
      .then((sector) =>
        res.status(201).send({
          message: "The sector has been created successfully",
          sector,
        })
      )
      .catch((error) =>
        res.status(400).send({
          errorArray: Helper.errorArray(error),
        })
      );
  },
  /**
   * Get all sectors
   * Route: GET: /sectors
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  getAll(req, res) {
    db.Sectors.findAndCountAll(req.sectorFilter).then((sectors) => {
      if (sectors) {
        const condition = {
          count: sectors.count,
          limit: req.sectorFilter.limit,
          offset: req.sectorFilter.offset,
        };
        delete sectors.count;
        const pagination = Helper.pagination(condition);
        res.status(200).send({
          message: "You have successfully retrieved all sectors",
          sectors,
          pagination,
        });
      }
    });
  },
  /**
   * Get a sector by id
   * Route: GET: /sectors/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  getSector(req, res) {
    return res.status(200).send({
      message: "You have successfully retrieved this sector",
      sector: req.sectorInstance,
    });
  },
  /**
   * Update sector attributes
   * Route: PUT: /sectors/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  update(req, res) {
    const errorArray = [];
    req.sectorInstance
      .update(req.body)
      .then((updatedSector) =>
        res.status(200).send({
          message: "The sector has been updated",
          updatedSector,
        })
      )
      .catch((err) => {
        err.errors.forEach((error) => {
          errorArray.push({ path: error.path, message: error.message });
        });
        return res.status(400).send({
          errorArray,
        });
      });
  },
  /**
   * Delete a sector by id
   * Route: DELETE: /sectors/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  delete(req, res) {
    req.sectorInstance
      .destroy()
      .then(() => {
        res.status(200).send({
          message: "The sector has been successfully deleted",
        });
      })
      .catch((err) => res.status(500).send(err.errors));
  },
};

export default Sector;
