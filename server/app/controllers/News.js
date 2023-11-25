import db from "../models/index";
import Helper from "../Helper/Helper";

const News = {
  /**
   * Create a new news article
   * Route: POST: /news/
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Object} response object or void
   */
  create(req, res) {
    db.NewsArticles.create(req.newsInput)
      .then((article) => {
        article = Helper.getNewsArticle(article);
        res.status(201).send({
          message: "Your news article has been successfully created",
          article,
        });
      })
      .catch((error) => res.status(500).send(error.errors));
  },
  /**
   * Get all news articles
   * Route: GET: /news/
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} response object or void
   */
  getAll(req, res) {
    req.dmsFilter.attributes = Helper.getNewsArticleAttribute();
    db.NewsArticles.findAndCountAll(req.dmsFilter).then((articles) => {
      const condition = {
        count: articles.count,
        limit: req.dmsFilter.limit,
        offset: req.dmsFilter.offset,
      };
      delete articles.count;
      const pagination = Helper.pagination(condition);
      res.status(200).send({
        message: "You have successfully retrieved all news articles",
        articles,
        pagination,
      });
    });
  },
  /**
   * Get news article by ID
   * Route: GET: /news/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  getArticle(req, res) {
    const article = Helper.getNewsArticle(req.singleArticle);
    return res.status(200).send({
      message: "You have successfully retrieved this news article",
      article,
    });
  },
  /**
   * Update news article by ID
   * Route: PUT: /news/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  update(req, res) {
    req.newsInstance
      .update(req.body)
      .then((updatedArticle) =>
        res.status(200).send({
          message: "This news article has been updated successfully",
          updatedArticle,
        }),
      )
      .catch((error) => res.status(500).send(error.errors));
  },
  /**
   * Delete news article by ID
   * Route: DELETE: /news/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  delete(req, res) {
    req.newsInstance.destroy().then(() =>
      res.status(200).send({
        message: "This news article has been deleted successfully",
      }),
    );
  },
  /**
   * Search for news articles
   * Route: GET: /search?query={}
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  search(req, res) {
    req.dmsFilter.attributes = Helper.getNewsArticleAttribute();
    db.NewsArticles.findAndCountAll(req.dmsFilter).then((articles) => {
      const condition = {
        count: articles.count,
        limit: req.dmsFilter.limit,
        offset: req.dmsFilter.offset,
      };
      delete articles.count;
      const pagination = Helper.pagination(condition);
      res.status(200).send({
        message: "This search was successful",
        articles,
        pagination,
      });
    });
  },
};

export default News;
