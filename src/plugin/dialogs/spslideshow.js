let i = 0;
CKEDITOR.dialog.add("spSlideshowDialog", function () {
    return {
        title: "Insert Slideshow",
        minWidth: window.innerWidth * .9,
        minHeight: window.innerHeight * .7,
        contents: [
            {
                id: "info",
                elements: [
                    {
                        type: "vbox",
                        padding: 0,
                        className: "sp-slideshow-dialog-wrapper",
                        children: [
                            {
                                id: "images",
                                type: "select",
                                label: "Images",
                                className: "sp-images-list",
                                items: [],
                                multiple: true,
                                size: 8,
                                setup: function () {
                                    this.getInputElement().$.parentNode.style.width = "100%";
                                    this.getInputElement().$.style.height = "auto";
                                },
                                commit: function (widget) {
                                    widget.setData("images", this.items);
                                },
                                change: function (evt) {
                                    console.log(evt)
                                }
                            },
                            {
                                type: "hbox",
                                padding: 0,
                                children: [
                                    {
                                        type: "button",
                                        label: "+",
                                        id: "add-btn",
                                        onClick: function() {
                                            i++;
                                            const images = this.getDialog().getContentElement("info", "images");
                                            const url = "test " + i;
                                            images.add(url, null, i);
                                            images.items.push(url);
                                        }
                                    },
                                    {
                                        type: "button",
                                        label: "↑",
                                        id: "up-btn",
                                        onClick: function() {
                                            console.log(this);
                                        }
                                    },
                                    {
                                        type: "button",
                                        label: "↓",
                                        id: "down-btn",
                                        onClick: function() {
                                            console.log(this);
                                        }
                                    },
                                    {
                                        type: "button",
                                        label: "-",
                                        id: "remove-btn",
                                        onClick: function() {
                                            // this = CKEDITOR.ui.dialog.button
                                            let selected = this.getDialog().getContentElement("info", "images").getInputElement().$.selectedOptions;
                                            for (let j =0; j<selected.length; j++) {
                                                console.log(selected[j]);
                                                //this.getDialog().getContentElement("info", "images").remove(j);
                                            }
                                        }
                                    },
                                ]
                            },
                            {
                                id: "caption",
                                type: "textarea",
                                label: "Caption",
                                setup: function (widget) {
                                    this.setValue(widget.data.caption);
                                },
                                commit: function (widget) {
                                    widget.setData("caption", this.getValue());
                                },
                            },
                        ]
                    },
                ]
            }
        ]
    };
});