Ipywidgets-Cookiecutter-Test
===============================

Test for publishing a custom Jupyter Widget

Installation
------------

To install use pip:

    $ pip install Cookie_Test_PyPackage
    $ jupyter nbextension enable --py --sys-prefix Cookie_Test_PyPackage


For a development installation (requires npm),

    $ git clone https://github.com/ilumsden/Ipywidgets-Cookiecutter-Test.git
    $ cd Ipywidgets-Cookiecutter-Test
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix Cookie_Test_PyPackage
    $ jupyter nbextension enable --py --sys-prefix Cookie_Test_PyPackage
