

from flask import Flask, render_template_string
import json
from profile_data import PORTFOLIO_DATA


app = Flask(__name__)

# Configuration data - easily editable
# Updated portfolio script with user CV info
from flask import Flask, render_template_string, send_from_directory
import json
import os
from profile_data import PORTFOLIO_DATA


app = Flask(__name__)



from flask import url_for, render_template
@app.route('/')
def index():
    return render_template("index.html", data=PORTFOLIO_DATA)

@app.route('/cv_negin_amou')
def download_cv():
    return send_from_directory(directory=os.getcwd(), path="ResumeUpdate.pdf")

@app.route('/edit')
def edit_data():
    return f"<pre>{json.dumps(PORTFOLIO_DATA, indent=2)}</pre>"

# if __name__ == '__main__':
#     app.run(debug=True)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
