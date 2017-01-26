(function () {
    'use strict';

    var categoryId = "";
    var code = "";
    var id = "";
    var imageURL = "";
    var subName = "";

    return {
        getCategoryId: function () {
            return this.categoryId;
        },
        setCategoryId: function (id) {
            this.categoryId = id;
        },
        getCode() {
            return this.code;
        },
        setCode(code) {
            this.code = code;
        },
        getId() {
            return this.id;
        },
        setId(id) {
            this.id = id;
        },
        getImageURL: function () {
            return this.imageURL;
        },
        setImageURL: function (url) {
            this.imageURL = url;
        },
        getSubName: function () {
            return this.subName;
        },
        setSubName(name) {
            this.subName = name;
        },
    }
});



type
