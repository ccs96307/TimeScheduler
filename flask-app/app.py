# coding: utf-8
from typing import Optional, Tuple
from flask import Flask, render_template, send_from_directory


app = Flask(
    __name__, 
    static_folder="../react-app/build", 
    template_folder="../react-app/build",
)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path: Optional[str]) -> Tuple[str, int]:
    if path != "" and path.endswith(tuple([".js", ".css", ".map", ".json", ".ico"])):
        return send_from_directory(app.static_folder, path)

    return render_template("index.html"), 200


if __name__ == "__main__":
    app.run()
