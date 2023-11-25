import express from 'express';
import Event from './../app/controllers/Events'; // Updated import
import Auth from '../app/middlewares/Auth';

const eventRouter = express.Router(); // Updated router name

/**
 * @swagger
 * definitions:
 *   NewEvent:
 *     type: object
 *     required:
 *       - title
 *       - description
 *       - date
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       date:
 *         type: string
 *   Event:
 *     allOf:
 *       - $ref: '#/definitions/NewEvent'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */
eventRouter.route('/events') // Updated route path

/**
 * @swagger
 * /events:
 *   get:
 *     description: Returns events
 *     tags:
 *      - Find Events // Updated tag
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: x-access-token
 *        in: header
 *        description: an authorization header
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: events // Updated description
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Event'
 */

/**
 * @swagger
 * /events:
 *   post:
 *     description: Creates a new event // Updated description
 *     tags:
 *      - Create
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         description: an authorization header
 *         required: true
 *         type: string
 *       - name: event
 *         description: Event object
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewEvent'
 *     responses:
 *       200:
 *         description: events // Updated description
 *         schema:
 *           $ref: '#/definitions/Event'
 */
  .post(Auth.verifyToken,
    // Auth.validateEventsInput, // Updated middleware
    Event.create) // Updated controller method
  .get(Auth.verifyToken,
    Auth.validateSearch, // Updated middleware
    Event.getAll); // Updated controller method

/**
 * @swagger
 * definitions:
 *   NewEventUpdate:
 *     type: object
 *     required:
 *       - title
 *       - description
 *       - date
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       date:
 *         type: string
 *   EventUpdate:
 *     allOf:
 *       - $ref: '#/definitions/NewEventUpdate'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */
eventRouter.route('/events/:id') // Updated route path

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     description: Returns a particular event // Updated description
 *     tags:
 *      - Find Events // Updated tag
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: id
 *         description: The event's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: x-access-token
 *         in: header
 *         description: an authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: events // Updated description
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/EventUpdate'
 */
  /**
   * @swagger
   * /events/{id}:
   *   put:
   *     description: Updates the event // Updated description
   *     tags:
   *      - Update // Updated tag
   *     produces:
   *       - application/json
   *     parameters:
   *        - name: id
   *          description: The event's id
   *          in: path
   *          required: true
   *          type: string
   *        - name: x-access-token
   *          in: header
   *          description: an authorization header
   *          required: true
   *          type: string
   *        - name: event
   *          description: Event object
   *          in: body
   *          required: true
   *          type: string
   *          schema:
   *            $ref: '#/definitions/NewEventUpdate'
   *     responses:
   *       200:
   *         description: events // Updated description
   *         schema:
   *           $ref: '#/definitions/EventUpdate'
   */
  /**
   * @swagger
   * /events/{id}:
   *    delete:
   *      description: Deletes the event // Updated description
   *      tags:
   *        - Delete // Updated tag
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: id
   *          description: The event's id
   *          in: path
   *          required: true
   *          type: string
   *        - name: x-access-token
   *          in: header
   *          description: an authorization header
   *          required: true
   *          type: string
   *      responses:
   *        200:
   *          description: events // Updated description
   *          schema:
   *            type: array
   *            items:
   *              $ref: '#/definitions/EventUpdate'
   */
  .get(Auth.verifyToken,
    Auth.getSingleEvent, // Updated middleware
    Event.getEvent) // Updated controller method
  .put(Auth.verifyToken,
    // Auth.hasEventPermission, // Updated middleware
    Event.update) // Updated controller method
  .delete(Auth.verifyToken,
    // Auth.hasEventPermission, // Updated middleware
    Event.delete); // Updated controller method

/**
 * @swagger
 * definitions:
 *   NewSearchEvent:
 *     type: object
 *   SearchEvent:
 *     allOf:
 *       - $ref: '#/definitions/NewSearchEvent'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */
eventRouter.route('/search/events') // Updated route path

/**
 * @swagger
 * /search/events/?q={event_title}:
 *   get:
 *     description: Returns the events that match the title // Updated description
 *     tags:
 *      - Find Events // Updated tag
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: event_title
 *         description: The event's title
 *         in: path
 *         required: true
 *         type: string
 *       - name: x-access-token
 *         in: header
 *         description: an authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: events // Updated description
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/SearchEvent'
 */
.get(Auth.verifyToken,
  Auth.validateSearch, // Updated middleware
  Event.search); // Updated controller method

export default eventRouter;
