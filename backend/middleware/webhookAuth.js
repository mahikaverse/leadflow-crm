function verifyWebhook(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({
      message: "API key missing",
    });
  }

  if (apiKey !== process.env.WEBHOOK_API_KEY) {
    return res.status(401).json({
      message: "Invalid API key",
    });
  }

  next();
}

module.exports = { verifyWebhook };