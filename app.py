from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='my-app/build', static_url_path='')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and not path.startswith("static/"):
        return send_from_directory(app.static_folder, 'index.html')
    return app.send_static_file(path)


if __name__ == '__main__':
    app.run()
