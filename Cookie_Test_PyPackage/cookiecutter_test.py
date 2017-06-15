import ipywidgets as ipyw
from traitlets import Unicode, Integer, HasTraits, observe

class Counter(ipyw.DOMWidget):
    _view_name = Unicode("CountView").tag(sync=True)
    _view_module = Unicode("count").tag(sync=True)
    value = Integer(0).tag(sync=True)
    count = Integer(0).tag(sync=True)
    @observe("count")
    def inc(self, change):
        self.value += 1
        #if self.value == 1:
            #self.value += 1
