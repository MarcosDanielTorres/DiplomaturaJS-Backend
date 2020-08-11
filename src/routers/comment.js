import express from "express";
const router = new express.Router();

router.get("/comment", (req, res) => {
  res.send("Estoy en home babyyy of comment ofc");
});

export default router;
