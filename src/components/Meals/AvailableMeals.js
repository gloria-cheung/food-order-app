import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-http-92413-default-rtdb.firebaseio.com/meals.json")
      .then((responseData) => {
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
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
