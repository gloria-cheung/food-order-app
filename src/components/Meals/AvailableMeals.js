import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://react-http-92413-default-rtdb.firebaseio.com/meals.json")
      .then((responseData) => {
        if (responseData.request.status !== 200) {
          throw new Error("Something went wrong!");
        }

        const loadedMeals = [];

        for (let key in responseData.data) {
          loadedMeals.push({
            id: key,
            name: responseData.data[key].name,
            description: responseData.data[key].description,
            price: responseData.data[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setHttpError(e.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => <MealItem {...meal} key={meal.id} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
