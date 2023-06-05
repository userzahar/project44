// /api/v1/cars
const carsController = require("../controllers/CarsController");
const carsRouter = require("express").Router();

// додати машину

carsRouter.post(
  "/cars",
  (req, res, next) => {
    console.log("joi");
    next();
  },
  carsController.add
);
// отримати всі

carsRouter.get("/cars", carsController.getAll);
// отримати одну

carsRouter.get("/cars/:id", carsController.getOne);
// обновити

carsRouter.put("/cars/:id", carsController.update);
// видалити

carsRouter.delete("/cars/:id", carsController.remove);

module.exports = carsRouter;
