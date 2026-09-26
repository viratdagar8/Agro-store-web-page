from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

products = [
    {
        "id": 1,
        "name": "Tomato Seeds",
        "price": 149,
        "image": "/tomato.jpg",
        "description": "High-quality tomato seeds"
    },
    {
        "id": 2,
        "name": "Vermicompost",
        "price": 199,
        "image": "/vermicompost.jpg",
        "description": "Organic compost for healthy soil"
    },
    {
        "id": 3,
        "name": "NPK Fertilizer",
        "price": 499,
        "image": "/NPK.jpg",
        "description": "Balanced fertilizer for crops"
    }
]


@app.route("/api/products")
def get_products():

    return jsonify(products)


@app.route("/")
def home():

    return "Agro Store Flask API is running!"


if __name__ == "__main__":
    app.run(debug=True, port=5000)