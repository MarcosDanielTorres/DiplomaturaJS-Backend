import express from "express";
const router = new express.Router();

router.get("/meme", (req, res) => {
  res.send("Estoy en home babyyy of meme ofc");
});

export default router;
