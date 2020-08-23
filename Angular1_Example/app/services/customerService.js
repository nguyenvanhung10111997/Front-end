app.service('customerService', function($http) {
    this.getCustomers = function() {
        return $http({
            method: "GET",
            url: apiUrl + "values"
        }).catch(error => {
            console.log('error', error);
        });
    };

    this.createCustomer = function(data) {
        return $http({
            method: "POST",
            url: apiUrl + "values",
            data: JSON.stringify(data)
        }).then(response => {
            console.log("Create customer successfully!");
        }).catch(error => {
            console.log("create customer failed!");
        })
    }

    this.getCustomerById = function(id) {
        return $http({
            method: "GET",
            url: apiUrl + "values/" + id
        }).catch(error => {
            console.log('error', error);
        })
    }

    this.updateCustomer = function(id, data) {
        return $http({
            method: "PUT",
            url: apiUrl + "values/" + id,
            data: data
        }).then(response => {
            console.log('Update customer successfully!');
        }).catch(error => {
            console.log('Update customer failed', error);
        })
    }

    this.deleteCustomer = function(id) {
        return $http({
            method: "DELETE",
            url: apiUrl + "values/" + id,
        }).then(response => {
            console.log('Delete customer successfully!');
        }).catch(error => {
            console.log('Delete customer failed', error);
        })
    }
})