from flask import Flask, render_template, jsonify
import csv

app = Flask(__name__)


# Function to read CSV data
def read_csv():
    data = []
    with open("data.csv", newline="", encoding="utf-8") as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            data.append(row)
    return data


@app.route("/")
def index():
    return render_template("checkvar.html")


@app.route("/get-data", methods=["GET"])
def get_data():
    csv_data = read_csv()
    return jsonify(csv_data)


if __name__ == "__main__":
    app.run(debug=True)
