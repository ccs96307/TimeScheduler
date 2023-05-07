from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder='../my-app/build', template_folder='../my-app/build')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file(path)


if __name__ == '__main__':
    app.run()
