from ._version import version_info, __version__

from .cookiecutter_test import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'Cookie_Test_NPM',
        'require': 'Cookie_Test_NPM/extension'
    }]
