import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { name, email, mobileNumber, education, skills } = req.body;

    const user = new User({ name, email, mobileNumber, education, skills });
    user.save();
    res.json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  const user = await User.find({});
  res.json(user);
});

router.get("/:id", async (req, res) => { 
  try {
    const user = await User.findById(req.params.id); 
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    res.status(500).json({ error: "Server error" });
  }
});
export default router;
