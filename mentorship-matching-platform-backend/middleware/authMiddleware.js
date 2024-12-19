const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env."2a84b7cadd4bd9cc79e1f4a950452d6685e4e675f994eb08f01fdc6cc01c6a891936b22f4e15ba0557c3eafd17f86a60c8166dc695f3708a1eabe40627cf1f2904ed0a05a4971743a94864e99e61955b053dcde4392a50b6d2bdba8655a9e11ceb962ce089fbdd5744b21b9fbd6e73d13256c4378ebf51058b1c494b5d9ef4004bc7885de1861c6110bcaa79dac0d9a6506b0f66970ae37ecb749df0d11ea6ca645d2f1ce1af589324c5ac0aea33a30d97d3066ccedab1e821b9e36c04a1226dfb50013dd63b366b2bf356cf6c3a4c9c1dce505d8e58e7e7c56620a40e0427bbe9e2d066071a05637d6e985d85518ff0b82f987e5e596aa9b877c9e1f51d3137");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
