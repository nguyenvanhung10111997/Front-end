app.controller('customerController', function($scope, customerService) {

    var customerModal = angular.element('#myModal');

    customerService.getCustomers().then(response => {
        $scope.customers = response.data;
    })

    $scope.submit = function(customer) {
        if (customer.id !== undefined) {
            customerService.updateCustomer(customer.id, customer);
            customerModal.modal('hide');
        } else {
            customerService.createCustomer(customer);
            customerModal.modal('hide');
        }
    }

    $scope.openCustomerModal = function(id) {
        resetForm();

        if (id !== undefined) {
            customerService.getCustomerById(id).then(response => {
                $scope.customer = response.data;
            }).then(() => {
                customerModal.modal('show');
            })
        } else {
            customerModal.modal('show');
        }
    }

    $scope.deleteCustomer = function(id) {
        customerService.deleteCustomer(id);
    }

    resetForm = function() {
        $scope.customer = {};
    }

    //var table = angular.element('#customerTable');
    //table.DataTable();
});