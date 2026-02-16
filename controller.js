class ApiController {
  constructor() {
    this.version = '1.0.0';
    this.basePath = '/api';
  }

  async handleRequest(req, res) {
    try {
      const { method, path, body } = req;
      const response = await this.processRequest(method, path, body);
      return res.status(200).json(response);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async processRequest(method, path, body) {
    // Request processing logic
    return { success: true, method, path };
  }

  getVersion() {
    return this.version;
  }
}

module.exports = ApiController;
