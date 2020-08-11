import express from "express";
const router = new express.Router();

router.get("/users", (req, res) => {
  res.send("Estoy en home babyyy of users ofc");
});

export default router;
