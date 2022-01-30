import { Component, OnInit } from '@angular/core';
import JsonProducts from '../../assets/products.json';
import JsonUsers from '../../assets/users.json';
import JsonOrders from '../../assets/orders.json';

interface User {
  id: number
  username: string
  name: string
  location: string
  img: string
}
interface Product {
  id: number
  name: string
  description: string
  range: string
  price: number
  img: string
}
interface Order {
  id: number
  user: User,
  products: Product[]
  date: Date
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  products: Product[] = []
  users: User[] = []
  orders: Order[] = []
  selection: Order | undefined = undefined
  dialog: boolean = false

  constructor() {
    this.users = JsonUsers
    this.products = JsonProducts

    for(const order of JsonOrders) {
      this.orders.push({
        id: order.id,
        user: this.users.find((u) => u.id === order.user_id)!,
        products: this.products.filter((p) => order.products_id.includes(p.id)),
        date: new Date(order.date),
      })
    }
  }

  ngOnInit(): void {
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

  getTotalOrder(order: Order) {
    return this.formatPrice(order.products.map((p) => p.price).reduce((a, c) => a+c, 0))
  }
  openDialog(order: Order) {
    this.selection = order
    this.dialog = true
  }
}
