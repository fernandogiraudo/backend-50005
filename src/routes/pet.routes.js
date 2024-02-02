import { Router } from "express";

const petsRoutes = Router();

let pets = [];

petsRoutes.param("name", async (req, res, next, name) => {
  const pet = pets.find((p) => p.name.toLowerCase() === name.toLowerCase());
  if (!pet) {
    return res.status(404).send({ message: "Pet not found" });
  }
  req.pet = pet;
  next();
});

petsRoutes.post("/", (req, res) => {
  const { name, specie } = req.body;
  pets.push({ name, specie });
  res.status(201).send({ message: "Pet created" });
});

petsRoutes.get("/:name([A-Za-z]+)", (req, res) => {
  res.send(req.pet);
});

petsRoutes.put("/:name([A-Za-z]+)", (req, res) => {
  const { name } = req.params;
  pets = pets.map((pet) =>
    pet.name.toLowerCase() === name.toLowerCase()
      ? { ...pet, adopted: true }
      : pet
  );
  res.send({ message: "Pet adopted" });
});

export default petsRoutes;
