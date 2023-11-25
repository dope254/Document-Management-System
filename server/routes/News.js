import express from 'express';
import News from './../app/controllers/News'; // Updated the import statement
import Auth from '../app/middlewares/Auth';

const newsRouter = express.Router(); // Renamed docRouter to newsRouter

/**
 * @swagger
 * definitions:
 *   NewNewsArticle:
 *     type: object
 *     required:
 *       - title
 *       - content
 *       - access
 *     properties:
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       access:
 *         type: string
 *   NewsArticle:
 *     allOf:
 *       - $ref: '#/definitions/NewNewsArticle'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */
newsRouter.route('/news') // Updated the route

/**
 * @swagger
 * /news:
 *   get:
 *     description: Returns news articles
 *     tags:
 *      - Find News Articles // Updated the tags
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
 *         description: news articles
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/NewsArticle'
 */

/**
 * @swagger
 * /news:
 *   post:
 *     description: Creates a new news article
 *     tags:
 *      - Create // Updated the tag
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         description: an authorization header
 *         required: true
 *         type: string
 *       - name: article
 *         description: News article object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewNewsArticle'
 *     responses:
 *       200:
 *         description: news articles
 *         schema:
 *           $ref: '#/definitions/NewsArticle'
 */
  .post(Auth.verifyToken,
    News.create)
  .get(Auth.verifyToken,
    Auth.validateSearch, // You may need to update this validation
    News.getAll);

/**
 * @swagger
 * definitions:
 *   NewNewsArticleUpdate:
 *     type: object
 *     required:
 *       - title
 *       - content
 *       - access
 *     properties:
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       access:
 *         type: string
 *   NewsArticleUpdate:
 *     allOf:
 *       - $ref: '#/definitions/NewNewsArticleUpdate'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */
newsRouter.route('/news/:id') // Updated the route

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     description: Returns a particular news article
 *     tags:
 *      - Find News Articles // Updated the tags
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: id
 *         description: The news article's id
 *         in:  path
 *         required: true
 *         type: string
 *       - name: x-access-token
 *         in: header
 *         description: an authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: news articles
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/NewsArticleUpdate'
 */
/**
 * @swagger
 * /news/{id}:
 *   put:
 *     description: Updates the news article of the user signed in
 *     tags:
 *      - Update // Updated the tag
 *     produces:
 *       - application/json
 *     parameters:
 *        - name: id
 *          description: The news article's id
 *          in:  path
 *          required: true
 *          type: string
 *        - name: x-access-token
 *          in: header
 *          description: an authorization header
 *          required: true
 *          type: string
 *        - name: article
 *          description: News article object
 *          in:  body
 *          required: true
 *          type: string
 *          schema:
 *            $ref: '#/definitions/NewNewsArticleUpdate'
 *     responses:
 *       200:
 *         description: news articles
 *         schema:
 *           $ref: '#/definitions/NewsArticleUpdate'
 */
/**
 * @swagger
 * /news/{id}:
 *    delete:
 *      description: Deletes the news article with the id supplied as a param
 *      tags:
 *        - Delete // Updated the tag
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: The news article's id
 *          in:  path
 *          required: true
 *          type: string
 *        - name: x-access-token
 *          in: header
 *          description: an authorization header
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: news articles
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/NewsArticleUpdate'
 */
  .get(Auth.verifyToken,
    Auth.getSingleNews, // You may need to update this middleware
    News.getArticle)
  .put(Auth.verifyToken,
    News.update)
  .delete(Auth.verifyToken,
    News.delete);

/**
 * @swagger
 * definitions:
 *   NewSearchNewsArticle:
 *     type: object
 *   SearchNewsArticle:
 *     allOf:
 *       - $ref: '#/definitions/NewSearchNewsArticle'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */
newsRouter.route('/search/news') // Updated the route

/**
 * @swagger
 * /search/news/?q={news_title}:
 *   get:
 *     description: Returns the news articles that match the title
 *     tags:
 *      - Find News Articles // Updated the tags
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: news_title
 *         description: The news article's title
 *         in:  path
 *         required: true
 *         type: string
 *       - name: x-access-token
 *         in: header
 *         description: an authorization header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: news articles
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/SearchNewsArticle'
 */
.get(Auth.verifyToken,
  Auth.validateSearch, // You may need to update this validation
  News.search);

export default newsRouter; // Updated the export
