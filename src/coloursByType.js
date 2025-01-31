var _hshClr = (fill, stroke) => {
    return {
        fill: fill || "#ffffff",
        stroke: stroke || "rgb(153, 153, 153)"
    }
};

var clrByType = {
    "base64":        _hshClr("#DEBD5C"),
    "batch":         _hshClr("#E2D96E"),
    "catch":         _hshClr("#e49191"),
    "change":        _hshClr("#E2D96E"),
    "rbe":           _hshClr("#E2D96E"), 
    "comment":       _hshClr(),
    "csv":           _hshClr("#DEBD5C"),
    "debug":         _hshClr("#87a980"),
    "delay":         _hshClr("#E6E0F8"),
    "exec":          _hshClr("darksalmon"),
    "feedparse":     _hshClr("#C0DEED"),
    "file":          _hshClr("BurlyWood"),
    "file in":       _hshClr("BurlyWood"),
    "function":      _hshClr("#fdd0a2"),
    "html":          _hshClr("#DEBD5C"),
    "http response": _hshClr("rgb(231, 231, 174)"),
    "http in":       _hshClr("rgb(231, 231, 174)"),
    "http request":  _hshClr("rgb(231, 231, 174)"),
    "inject":        _hshClr("#a6bbcf"),
    "join":          _hshClr("#E2D96E"),
    "json":          _hshClr("#DEBD5C"),
    "junction":      _hshClr('rgb(217, 217, 217)'),
    "link in":       _hshClr("#ddd"),
    "link out":      _hshClr("#ddd"),
    "link call":     _hshClr("#ddd"),
    "markdown":      _hshClr("#DEBD5C"),
    "postgresql":    _hshClr("#5b85a7"),
    "range":         _hshClr("#E2D96E"),
    "sort":          _hshClr("#E2D96E"),
    "split":         _hshClr("#E2D96E"),
    "subflow":       _hshClr("#ddd"),
    "switch":        _hshClr("#E2D96E"),
    "trigger":       _hshClr("#E6E0F8"),
    ui_button:       _hshClr("rgb(176, 223, 227)"),
    ui_list:         _hshClr("rgb( 63, 173, 181)"),
    ui_svg_graphics: _hshClr("rgb( 63, 173, 181)"),
    ui_template:     _hshClr("rgb( 63, 173, 181)"),
    ui_toast:        _hshClr("rgb(119, 198, 204)"),
    ui_upload:       _hshClr("rgb( 63, 173, 181)"),
    ui_audio:        _hshClr("rgb(119, 198, 204)"),
    ui_chart:        _hshClr("rgb(119, 198, 204)"),
    ui_gauge:        _hshClr("rgb(119, 198, 204)"),
    ui_text:         _hshClr("rgb(119, 198, 204)"),
    ui_date_picker:  _hshClr("rgb(176, 223, 227)"),
    ui_dropdown:     _hshClr("rgb(176, 223, 227)"),
    ui_form:         _hshClr("rgb(176, 223, 227)"),
    ui_numeric:      _hshClr("rgb(176, 223, 227)"),
    ui_slider:       _hshClr("rgb(176, 223, 227)"),
    ui_switch:       _hshClr("rgb(176, 223, 227)"),
    ui_text_input:   _hshClr("rgb(176, 223, 227)"),
    ui_colour_picker: _hshClr("rgb(176, 223, 227)"),

    "websocket in":  _hshClr("rgb(215, 215, 160)"),
    "websocket out": _hshClr("rgb(215, 215, 160)"),
    "yaml":          _hshClr("#DEBD5C"),
    "xml":           _hshClr("#DEBD5C"),

    /* private nodes for this instane */
    'BlogPages':    _hshClr("#ddeeff"),
    'BlogDetails':  _hshClr("#ddeeff"),
    'BlogPageInfo': _hshClr("#ddeeff"),
    'BlogChanges':  _hshClr("#ddeeff"),
    'PubMedium':    _hshClr("#ddee44"),

    "Topic": _hshClr('#d0c9f6'),
    "Observation": _hshClr('#f4adf3'),
    "Question": _hshClr('#e0a4f3'),
    "Thought": _hshClr('#cb9cf3'),
    "Idea": _hshClr('#88baff'),
    "Analogy": _hshClr('#86bfff'),
    "Aphorism": _hshClr('#84c3ff'),
    "Poesie": _hshClr('#83c7ff'),
    "Humour": _hshClr('#81ccff'),
    "Treasure": _hshClr('#7fd0ff'),
    "Consequence": _hshClr('#f6c1cc'),
    "Advantage": _hshClr('#efacbf'),
    "Disadvantage": _hshClr('#e796b1'),
    "Text": _hshClr('#c8ffb5'),
    "Blog-Post": _hshClr('#d0fdc2'),
    "Comment": _hshClr('#d9fcce'),
    "Code-Base": _hshClr('#e1fbda'),
    "Sketch": _hshClr('#e1fbda'),
    "Inspiration": _hshClr('#dfdfb6'),
    "Quote": _hshClr('#e5e5c0'),
    "Definition": _hshClr('#eaebca'),
    "Book": _hshClr('#f0f0d4'),
    "Author": _hshClr('#f5f6de'),
    
    'nnb-input-node': _hshClr('#ffefef'),
    'nnb-layer-node': _hshClr('#ffffef'),
    'nnb-output-node': _hshClr('#efefef'),
    'nnb-backprop': _hshClr('#e3edef'),
    'nnb-trainer': _hshClr('#e5e4ef'),

    'Seeker': _hshClr('#e5e4ef'),
    'Sink': _hshClr('#e5e4ef'),
    'Screenshot': _hshClr('#e5e4ef'),
    'Orphans': _hshClr('#e5e4ef'),
    'IsMobile': _hshClr('#e5e4ef'),
    'Navigator': _hshClr('#e5e4ef'),
    'DrawSVG': _hshClr('#e5e4ef'),
    'GetFlows': _hshClr('#e5e4ef'),
    'SendFlow': _hshClr('#e5e4ef'),
    'TriggerImport': _hshClr('#e5e4ef'),
    'ClientCode': _hshClr('#e5e4ef'),

    "i2c scan": _hshClr('rgb(227, 82, 83)'),
    "i2c in": _hshClr('rgb(227, 82, 83)'),
    "i2c out": _hshClr('rgb(227, 82, 83)'),

    'cronplus': _hshClr('#a6bbcf'),
    
    "_default":      _hshClr("rgb(243, 181, 103)"),
};