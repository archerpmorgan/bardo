// create or update a user profile
const postProfile = async (req, res) => {
  res.status(200).json({ data: "some data" });
};

// GET /data/profile
// get a users profile data for personalization of the experience
const getProfile = async (req, res) => {
  res.status(200).json({ data: "some data" });
};

// POST /data/interaction
// The data corresponding to one use of the app 
const postInteraction = async(req, res) => {
  res.status(200).json({ data: "some data" });
}

// Export the controller functions for use in routes
export default {
  getProfile,
  postProfile,
};