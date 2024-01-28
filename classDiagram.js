class Customer {
  account = null;
  constructor(id, address, phone, email) {
    this.id = id;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  addAccount(account) {
    this.account = account;
  }
}

class WebUser {
  customer = null;
  shoppingCart = null;
  constructor(login_id, password, state) {
    this.login_id = login_id;
    this.password = password;
    this.state = state;
  }

  setCustomer(customer) {
    this.customer = customer;
  }

  setShoppingCart(shoppingCart) {
    this.shoppingCart = shoppingCart;
  }
}

class Account {
  shoppingCart = null;
  payments = [];
  orders = [];
  constructor(billing_address, is_closed, open, closed) {
    this.billing_address = billing_address;
    this.is_closed = is_closed;
    this.open = open;
    this.closed = closed;
  }

  setShoppingCart(shoppingCart) {
    this.shoppingCart = shoppingCart;
  }

  addPayment(payment) {
    this.payments.push(payment);
  }

  addOrder(order) {
    this.orders.push(order);
  }
}

class Order {
  payment = null;
  lineItems = [];
  total = 0;
  shipped = "";
  constructor(number, ordered, ship_to, status) {
    this.number = number;
    this.ordered = ordered;
    // this.shipped = shipped;
    this.ship_to = ship_to;
    this.status = status;
    // this.total = total;
  }

  setPayment(payment) {
    this.payment = payment;
  }

  addLineItem(lineItem) {
    this.lineItems.push(lineItem);
  }

  setTotal() {
    let total = 0;
    for (let i = 0; i < this.lineItems.length; i++) {
      total += this.lineItems[i].quantity * this.lineItems[i].price;
    }
    this.total = total;
  }

  setShippedDate(date) {
    this.shipped = date;
  }
}

class Payment {
  constructor(id, paid, total, details) {
    this.id = id;
    this.paid = paid;
    this.total = total;
    this.details = details;
  }
}

class LineItem {
  product = null;
  constructor(quantity, price) {
    this.quantity = quantity;
    this.price = price;
  }

  setProduct(product) {
    this.product = product;
  }
}

class ShoppingCart {
  lineItems = [];
  constructor(created) {
    this.created = created;
  }

  addLineItem(lineItem) {
    this.lineItems.push(lineItem);
  }
}

class Product {
  constructor(id, name, supplier) {
    this.id = id;
    this.name = name;
    this.supplier = supplier;
  }
}

// Enumeration (enum)
class UserState {
  static NEW = new UserState("New");
  static ACTIVE = new UserState("Active");
  static BLOCKED = new UserState("Blocked");
  static BANNED = new UserState("Banned");

  constructor(name) {
    this.name = name;
  }
}

class OrderStatus {
  static NEW = new OrderStatus("New");
  static HOLD = new OrderStatus("Hold");
  static SHIPPED = new OrderStatus("Shipped");
  static DELIVERIED = new OrderStatus("Deliveried");
  static CLOSED = new OrderStatus("Closed");

  constructor(name) {
    this.name = name;
  }
}

const main = () => {
  // Create User
  const user1 = new WebUser("user1", "123456", UserState.NEW);
  const user2 = new WebUser("user2", "999999", UserState.ACTIVE);

  // Create Customer
  const cus1 = new Customer("C01", "London", "0000000000", "example@mail.com");
  const cus2 = new Customer(
    "C02",
    "South Dakota",
    "1212312121",
    "example@mail.com"
  );

  // Create Product
  const product1 = new Product("P01", "Pencil", "SubBro");
  const product2 = new Product("P02", "Pen", "SubBro");
  const product3 = new Product("P03", "Eraser", "SubBro");
  const product4 = new Product("P04", "Ruler", "SubBro");
  const product5 = new Product("P05", "Ink_Pen", "SubBro");

  // Create Order
  const order1 = new Order(
    "O01",
    "2024/01/12",
    "SanSukDorm",
    OrderStatus.DELIVERIED
  );
  const order2 = new Order("O01", "2024/01/22", "SanSukDorm", OrderStatus.HOLD);

  // Create Line Item
  const line1 = new LineItem(10, 15);
  const line2 = new LineItem(20, 20);
  const line3 = new LineItem(30, 25);
  const line4 = new LineItem(40, 30);

  // Create Shopping Cart
  const shoppingCart1 = new ShoppingCart("2024/01/12");
  const shoppingCart2 = new ShoppingCart("2024/01/22");

  // Add Product to Line Item
  line1.setProduct(product1);
  line2.setProduct(product2);
  line3.setProduct(product3);
  line4.setProduct(product4);

  // Add Line Item to Order
  order1.addLineItem(line1);
  order1.addLineItem(line2);
  order2.addLineItem(line3);
  order2.addLineItem(line3);

  // Add Line Item to Shopping Cart
  shoppingCart1.addLineItem(line1);
  shoppingCart1.addLineItem(line2);
  shoppingCart2.addLineItem(line3);
  shoppingCart2.addLineItem(line4);

  // Set Shopping Cart to User
  user1.setShoppingCart(shoppingCart1);
  user2.setShoppingCart(shoppingCart2);

  // Set Customer to User
  user1.setCustomer(cus1);
  user2.setCustomer(cus2);

  // Create Payment and Set to Order
  const payment1 = new Payment("P01", "2024/01/22", order1.total, "Deliveried");
  order1.setPayment(payment1);

  // Use Function in Order Class
  order1.setTotal;

  // Set shipped date in Order Class
  order1.setShippedDate("2024/01/22");

  console.log(user1);
  console.log(user1.customer);
  console.log(user1.shoppingCart);
  console.log(user1.shoppingCart.lineItems);
};
main();
