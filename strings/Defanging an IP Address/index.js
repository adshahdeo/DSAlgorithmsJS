var defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]')
};

// https://leetcode.com/problems/defanging-an-ip-address/