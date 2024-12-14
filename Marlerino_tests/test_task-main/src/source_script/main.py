import requests
import json


API_KEY = "4b4cf6d72d4c68d39b580c03ee56a60b"
BASE_URL = "https://mytrackertest.com/admin_api/v1"

# Заголовки для аутентификации
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Данные для создания источника трафика
traffic_source_data = {
    "name": "My Traffic Source",
    "postback_url": "https://mytrackertest.com?source=capi&px={sub_id_1}&fbp={sub_id_9}",
    "parameters": [
        {"name": "source", "macro": "{capi}"},
        {"name": "px", "macro": "{sub_id_1}"},
        {"name": "btag", "macro": "test"}
    ]
}

# URL для создания источника трафика
url = f"{BASE_URL}/traffic_sources"

try:
    # Отправка POST-запроса для создания источника трафика
    response = requests.post(url, headers=HEADERS, data=json.dumps(traffic_source_data))

    # Проверка статуса ответа
    if response.status_code == 200:
        print("Источник трафика успешно создан:")
        print(response.json())
    else:
        print(f"Ошибка при создании источника трафика: {response.status_code}")
        print(response.text)
except requests.exceptions.RequestException as e:
    print(f"Ошибка при выполнении запроса: {e}")
