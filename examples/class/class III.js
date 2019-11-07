var password = 'password';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (password && password === 'password') {
                this._name = newName;
            }
            else {
                console.log('Error!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'le';
if (employee.fullName) {
    console.log(employee.fullName);
}
