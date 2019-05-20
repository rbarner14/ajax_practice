"""Demonstration backend for AJAX."""

import random
import time
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

MELONS = ["Cantaloupe", "Honeydew", "Watermelon", "Musk"]
ADJECTIVES = [
        "Juicy",
        "Delicious",
        "Aromatic",
        "Ripe",
        "Flavorful",
        "Reasonably-Priced",
        "Artisanally Hand-Crafted",
]
CITY_DELIVERY_INFO = {
    "SF": {
        "days": 1,
        "cost": 3.00,
    },
    "Oak": {
        "days": 2,
        "cost": 5.00,
    },
    "other": {
        "days": 5,
        "cost": 10.00,
    },
}


@app.route("/")
def index():
    """Homepage."""

    return render_template("index.html", melons=MELONS)


@app.route("/adjective")
def get_random_adjective():
    """Return a simple adjective."""

    # Simulate a slow server
    time.sleep(2)

    return random.choice(ADJECTIVES)


@app.route("/status")
def get_order_status():
    """Get order status."""

    print(f"\n\nRequest: GET {request.url}\n\n")

    order_number = request.args.get("order")

    # Simulate a slow server
    time.sleep(2)

    if order_number == "123":
        return random.choice(["LATE",
                              "SUPER-LATE",
                              "NEVER COMING"])
    else:
        return "ON-TIME"


@app.route("/new-order", methods=["POST"])
def add_order():
    """Add a melon order to our database."""

    print(f"\n\nRequest: POST {request.url}\n\n")

    melon_type = request.form.get("type")
    amount = request.form.get("amount")

    # Simulate wait time for adding an order to the db
    time.sleep(2)

    # Usually, with a post request, we would add a row to a database, but this 
    # demo does not have one.

    print(f"\n\nNEW ORDER: {amount} {melon_type}\n\n")

    return "Your order has been confirmed"


@app.route("/delivery-info.json")
def get_delivery_info():
    """Get delivery info."""

    print(f"\n\nRequest: GET {request.url}\n\n")

    address = request.args.get("address")
    city = request.args.get("city")

    # Simulate wait time for getting data from db
    time.sleep(2)
    delivery_info = CITY_DELIVERY_INFO.get(city)

    if delivery_info:
        return jsonify(delivery_info)
    else:
        return jsonify(CITY_DELIVERY_INFO["other"])


@app.route("/melon-info.py")
def melon_info_py():
    """This route will fail!"""

    melon = {
        "id": "watermelon",
        "name": "Watermelon",
        "price": 5.00,
        "available": True,
        "countries": ["US", "CA", "MX"]
    }

    return melon


@app.route("/melon-info.json")
def melon_info():
    """Return info about a melon as JSON."""

    # In real life, we would probably get this info
    # from our database
    melon = {
        "id": "watermelon",
        "name": "Watermelon",
        "price": 5.00,
        "available": True,
        "countries": ["US", "CA", "MX"]
    }

    return jsonify(melon)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
