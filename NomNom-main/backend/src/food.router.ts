import {Router} from 'express';
import { Foods, Category } from './data';

const router = Router();

router.get("/", (req, res) => {
  res.send(Foods);
})

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm  = req.params.searchTerm;
  const foods = Foods
  .filter(food => food.name.toLowerCase()
  .includes(searchTerm.toLowerCase()));
  res.send(foods);
})

router.get("/tags", (req, res) => {
  res.send(Category);
})

router.get("/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foods = Foods
  .filter(food => food.tags?.includes(tagName));
  res.send(foods);
})

router.get("/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = Foods.find(food => food.id == foodId);
  res.send(food);
})

export default router;