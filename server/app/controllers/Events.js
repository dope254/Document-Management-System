import db from "../models/index";
import Helper from "../Helper/Helper";

const Event = {
  /**
   * Create a new event
   * Route: POST: /events/
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Object} response object or void
   */
  create(req, res) {
    db.Events.create(req.eventInput)
      .then((event) => {
        event = Helper.getEvent(event);
        res.status(201).send({
          message: "Your event has been successfully created",
          event,
        });
      })
      .catch((error) => res.status(500).send(error.errors));
  },
  /**
   * Get all events
   * Route: GET: /events/
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} response object or void
   */
  getAll(req, res) {
    req.dmsFilter.attributes = Helper.getEventAttribute();
    db.Events.findAndCountAll(req.dmsFilter).then((events) => {
      const condition = {
        count: events.count,
        limit: req.dmsFilter.limit,
        offset: req.dmsFilter.offset,
      };
      delete events.count;
      const pagination = Helper.pagination(condition);
      res.status(200).send({
        message: "You have successfully retrieved all events",
        events,
        pagination,
      });
    });
  },
  /**
   * Get event by ID
   * Route: GET: /events/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  getEvent(req, res) {
    const event = Helper.getEvent(req.singleEvent);
    return res.status(200).send({
      message: "You have successfully retrieved this event",
      event,
    });
  },
  /**
   * Update event by ID
   * Route: PUT: /events/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  update(req, res) {
    req.eventInstance
      .update(req.body)
      .then((updatedEvent) =>
        res.status(200).send({
          message: "This event has been updated successfully",
          updatedEvent,
        }),
      )
      .catch((error) => res.status(500).send(error.errors));
  },
  /**
   * Delete event by ID
   * Route: DELETE: /events/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  delete(req, res) {
    req.eventInstance.destroy().then(() =>
      res.status(200).send({
        message: "This event has been deleted successfully",
      }),
    );
  },
  /**
   * Search events
   * Route: GET: /searchs?query={}
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  search(req, res) {
    req.dmsFilter.attributes = Helper.getEventAttribute();
    db.Events.findAndCountAll(req.dmsFilter).then((events) => {
      const condition = {
        count: events.count,
        limit: req.dmsFilter.limit,
        offset: req.dmsFilter.offset,
      };
      delete events.count;
      const pagination = Helper.pagination(condition);
      res.status(200).send({
        message: "This search was successful",
        events,
        pagination,
      });
    });
  },
};

export default Event;
