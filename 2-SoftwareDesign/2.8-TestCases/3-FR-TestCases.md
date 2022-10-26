|FR id|TC id|Опис кроків тестового сценарію|Опис очікуваних результатів|
|:-----:|:-----:|:-----|:-----:|
|FR1.1|TC 1.1|Початкові умови: користувач ще виконав пошуковий запит<br> Кроки сценарію:<br> request_ID = 1<br> request = "Гімн України"|Результат=1|
|FR1.1|TC 1.2|Початкові умови: відсутні<br> ***Кроки сценарію:***<br> request_ID = 3<br> request = "Гімн України"|Результат=-1|
|FR1.1|TC 1.3|Початкові умови: відсутні<br> ***Кроки сценарію:***<br> request_ID = 1<br> request = "Duis aute ... qui blanditiis <br> praesentium voluptatum deleniti atque..." <br> (довжина > 64)|Результат=-2|
|FR1.1|TC 1.4|Початкові умови: відсутні<br> ***Кроки сценарію:***<br> request_ID = 3<br> request = "Duis aute ... qui blanditiis <br> praesentium voluptatum deleniti atque..." <br> (довжина > 64)|Результат=-3|
