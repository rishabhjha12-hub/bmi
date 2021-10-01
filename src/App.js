import { useState } from "react";

export default function App() {
  const style={
    color:"blue"
  }
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");
  const[dietChart,setDietChart]=useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);
    let dietttchart=diettChart(bmi);

    setStatus(bmiStatus);
    setDietChart(dietttchart)

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }
  function diettChart(bmi){
    if (bmi < 18.5) {
      return "Heavy food items that are more in calories..Frequent consumption of food items which are rich in nutrients, it could be snacks, shakes or juices, or proper meals.  Adding extra ingredients that are high in calories to regular diet, for example, including eggs and bananas in morning breakfast, etc., can help in increasing the weight.      Consume protein supplements along with adequate amount of vegetables and fruits.      Eating calorie dense food and maintaining a balanced diet will help in gaining the weight.However, the diet shouldn’t be started drastically and instead, should be implemented gradually so that the body is accustomed with it."
      
    
    }
    else if (bmi >= 18.5 && bmi < 24.9){
      return "While maintaining your weight can seem like an impossible task, we assure you that it certainly isn’t! Here are some simple maintenance diet tips for you to follow Eat 6 mini-meals a day Load up on fresh fruits & vegetablesIndulge in 60 minutes of physical activity dail      Drink 8-10 glasses of water everyday      Add detoxifying spices into your daily diet"
      
    }
    else{
      return "Choose minimally processed, whole foods:  Whole grains (whole wheat, steel cut oats, brown rice, quinoa)  Vegetables (a colorful variety-not potatoes)  Whole fruits (not fruit juices)     Nuts, seeds, beans, and other healthful sources of protein (fish and poultry     Plant oils (olive and other vegetable oils) Drink water or other beverages that are naturally calorie-free.  Limit these foods and drinks:Sugar-sweetened beverages (soda, fruit drinks, sports drinks      Fruit juice (no more than a small amount per day)     Refined grains(white bread, white rice, white pasta) and sweet      Potatoes (baked or fried)      Red meat (beef, pork, lamb) and processed meats (salami, ham, bacon, sausage)Other highly processed foods, such as fast food"
    }
  }

  return (
    
    <div className="w-full max-w-xs m-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center mb-4 text-xl">Rishabh's BMI Calculator and diet chart</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Height
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Height "
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Weight
          </label>
          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Weight"
            type="Weight in kg"
            placeholder="Weight in cm"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
            <h3 style={style }> DIET:{dietChart}</h3>
          </div>
          
        ) }
      </form>
    </div>
  );
}
