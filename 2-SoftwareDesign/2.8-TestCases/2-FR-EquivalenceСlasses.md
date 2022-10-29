|Опис вхідних умов|Правильний/неправильний <br> клас еквівалентності|Опис значень вхідних даних|
|:-|:-:|:-|
|1) request_ID приймає значення з множини [0, 1]; <br> 2) Довжина рядка request в межах від 1 до 64|Правильний|request_ID = 1 <br> request = "Гімн України"|
|1) request_ID не приймає значення з множини [0, 1]; <br> 2) Довжина рядка request в межах від 1 до 64|Неправильний|request_ID = 3 <br> request = "Гімн України"|
|1) request_ID приймає значення з множини [0, 1]; <br> 2) Довжина рядка request - не в межах від 1 до 64|Неправильний|request_ID = 1 <br> request = "Duis aute ... qui blanditiis <br> praesentium voluptatum deleniti atque..." <br> (довжина > 64)|
|1) request_ID не приймає значення з множини [0, 1]; <br> 2) Довжина рядка request - не в межах від 1 до 64|Неправильний|request_ID = 3 <br> request = "Duis aute ... qui blanditiis <br> praesentium voluptatum deleniti atque..." <br> (довжина > 64)|
