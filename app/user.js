System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, name, email, description, imageUrl) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.description = description;
                    this.imageUrl = imageUrl;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map