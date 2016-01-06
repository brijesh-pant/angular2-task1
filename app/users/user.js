System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, name, email, description, imageUrl, salesDone) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.description = description;
                    this.imageUrl = imageUrl;
                    this.salesDone = salesDone;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map