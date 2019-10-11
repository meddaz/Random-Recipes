
var url = "https://www.themealdb.com/api/json/v1/1/random.php";

$.getJSON(url, function (data) {
    console.log(data);
    var output = data.meals;

    for (var i = 0; i < output.length; i++) {
        display.innerHTML +=

            `<img src="${output[i].strMealThumb}" alt="${output[i].strMeal}"> <br>
        
        
        ${output[i].strMeal} <br>
        Category:  ${output[i].strCategory} <br>
        Source: <a href="${output[i].strSource}">${output[i].strSource}</a>`;
    }

});