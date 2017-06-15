require.undef("count");

define("count", ["jupyter-js-widgets"], function(widgets) {
    var CountView = widgets.DOMWidgetView.extend({
        render: function() {
            CountView.__super__.render.apply(this, arguments);
            this.count_changed();
            this.listenTo(this.model, "change:count", this.count_changed, this);
        },
        count_changed: function() {
            var old = this.model.previous("value");
            //var kernel = IPython.notebook.kernel;
            //var callback = {iopub : {"output" : handle_output}};
            //var current = kernel.execute("Counter.inc()", callback, {silent:false});
            var current = this.model.get("value");
            this.el.textContent = String(old) + " -> " + String(current); 
        }
        //function handle_output(out_type, out) {
            //return(out.content.text);
        //}
    });
    return{
        CountView : CountView
    }
});
