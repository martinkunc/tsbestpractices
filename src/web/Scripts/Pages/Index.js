import './index.css';
import 'jquery';
var IndexRenderer = /** @class */ (function () {
    function IndexRenderer() {
        this.onReady = function () {
            var hello = 'Hello world';
            $("div.text-center").append("<h1 id='msg'>" + hello + "</h1>");
        };
    }
    return IndexRenderer;
}());
export { IndexRenderer };
var index = new IndexRenderer();
$().ready(index.onReady);
//# sourceMappingURL=Index.js.map