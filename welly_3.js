const userIds = ['U01', 'U02', 'U03'];
const orderIds = ['T01', 'T02', 'T03', 'T04'];

const userOrders = [
    {
        userId: 'U01',
        orderIds: ['T01', 'T02']
    },
    {
        userId: 'U02',
        orderIds: []
    },
    {
        userId: 'U03',
        orderIds: ['T03']
    },
]

const userData = {
    'U01': 'Tom',
    'U02': 'Sam',
    'U03': 'John'
}

const orderData = {
    'T01': {
        name: 'A',
        price: 499
    },
    'T02': {
        name: 'B',
        price: 599
    },
    'T03': {
        name: 'C',
        price: 699
    },
    'T04': {
        name: 'D',
        price: 799
    }
}

var result = [];

function handleUserOrders(data) {
    var merge = {};
    var user = {};
    var orders = [];
    if (data.userId != '') {
        user.id = data.userId;
        if (userData[data.userId] != '') {
            user.name = userData[data.userId];
        }
    }
    
    for (var i = 0; i < data.orderIds.length; i ++) {
        var allProductDetails = orderData[data.orderIds[i]];
        var productDetails = {
            id: data.orderIds[i],
            name: allProductDetails.name,
            price: allProductDetails.price
        }
        orders.push(productDetails);
    }
    merge.user = user;
    merge.orders = orders;
    result.push(merge);
}

function mappingWithUserExist(userOrders) {
    for (var i = 0; i < userOrders.length; i++) {
        handleUserOrders(userOrders[i]);
    }
    console.log(JSON.stringify(result, null, 4));
    result = [];
}

function mappingWithOrdersExist(userOrders) {
    console.log('----------------------');
    for (var i = 0; i < userOrders.length; i++) {
        if (userOrders[i].orderIds.length != 0) {
            handleUserOrders(userOrders[i]);
        }
    }
    console.log(JSON.stringify(result, null, 4));
    result = [];
}

// 判斷 User 存在的話即印出來
mappingWithUserExist(userOrders);

// 判斷 Order 存在的話才印出來，故 Sam 不會印
mappingWithOrdersExist(userOrders);