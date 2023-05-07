# coding: utf-8
from flask import Flask, render_template


app = Flask(
    __name__, 
    static_folder="./my-app/build/static", 
    template_folder="./my-app/build",
)


@app.route("/")
def index() -> str:
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
