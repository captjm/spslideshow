/*
 Copyright (c) 2022, David Makaridze All rights reserved.
*/
const insertSPSlideShowWidget = {
    allowedContent: "div(*);img(*)[src,alt]",
    button: "",
    contentForms: null,
    contentTransformations: null,
    data: function () {
        console.log(this.data.images);
        this.parts.caption.setHtml(this.data.caption);
        this.parts.images.setHtml("");
        CKEDITOR.tools.array.forEach(
            this.data.images,
            function (url) {
                this.parts.images.appendHtml(`<div class="sp-slide"><img src="${url}" alt=""/></div>`);
            },
            this
        );
    },
    defaults: {},
    dialog: "spSlideshowDialog",
    downcast: null,
    downcasts: null,
    draggable: true,
    edit: null,
    editables: {
        caption: {
            selector: ".sp-slideshow-caption",
            allowedContent: "br strong em"
        }
    },
    getLabel: function () {
    },
    init: function () {
        let images = [];
        CKEDITOR.tools.array.forEach(
            this.parts.images.getElementsByTag("img").toArray(),
            function (image) {
                images.push(image.getAttribute("src"));
            }
        );
        this.setData("images", images);
        this.setData("caption", this.parts.caption.getHtml());
    },
    inline: false,
    //insert: function () {},
    mask: true,
    name: "",
    parts: {
        images: ".sp-slideshow",
        caption: ".sp-slideshow-caption"
    },
    pathName: "",
    requiredContent: "div(*);img(*)[src,alt]",
    styleToAllowedContentRules: function () {
    },
    styleableElements: "",
    template: `<div class="sp-slideshow-wrapper">
                    <div class="sp-slideshow"></div>
                    <div class="sp-slideshow-nav">
                        <div class="sp-btn sp-prev"></div>
                        <div class="sp-btn sp-next"></div>
                    </div>
                    <div class="sp-slideshow-caption"></div>
               </div>`,
    upcast: function (element) {
        return element.name === "div" && element.hasClass("sp-slideshow-wrapper");
    },
    upcastPriority: 10,
    upcasts: null,
}

CKEDITOR.plugins.add("spslideshow", {
    icons: "spslideshow",
    lang: "ka",
    requires: "widget,dialog",

    /* A function called on initialization of every editor instance created on the page after the init call task. */
    afterInit: function (editor) {
    },
    /* A function called on initialization of every editor instance created on the page before the init call task. */
    beforeInit: function (editor) {
    },
    /* A function called on initialization of every editor instance created on the page. */
    init: function (editor) {
        editor.ui.addButton("SPSlideShow", {
            label: "Insert Slideshow",
            command: "insertSPSlideShow",
            toolbar: "insert"
        });
        editor.addContentsCss(this.path + "styles/sp-slideshow-dialog.css");
        editor.widgets.add("insertSPSlideShow", insertSPSlideShowWidget);
        CKEDITOR.dialog.add("spSlideshowDialog", this.path + "dialogs/spslideshow.js");
    },
    /* end init */
    /* A function called when the plugin definition is loaded for the first time */
    onLoad: function () {
    },
});