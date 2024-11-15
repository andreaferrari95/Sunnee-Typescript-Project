# Sunnee Beachwear - A Sustainable Fashion Project

## Notes

- **The company is entirely fictional**, created solely for this test project.
- The **main purpose of this project** is to practice TypeScript by building a real-world system model while showcasing how technology can enhance sustainability in fashion.

---

## Project Overview

**Sunnee** is a fictional brand dedicated to innovating the beachwear industry using exclusively recycled plastic fibers. The brand was founded with the vision of reducing ocean pollution while providing high-quality, eco-friendly swimsuits and accessories. This TypeScript project models the operational structure of **Sunnee**, focusing on interactions between customers, beachwear products, and sustainable production processes.

The project demonstrates how technology can support sustainable innovation in the fashion industry through the development of interfaces and classes representing various components of the system, such as products, customers, and production processes.

---

## Purpose of the Project

This TypeScript project was created as a test for the **StartToImpact University** [Master's course in TypeScript](https://www.start2impact.it/master/). The focus is on learning and applying TypeScript skills to build a working system model, with the goal of demonstrating the power of TypeScript in solving real-world sustainability problems in fashion.

---

## Project Features

- **Products (Beachwear)**: The project defines several beachwear items (swimsuits, pareos, hats) made from recycled plastic.
  
- **Customers**: Customers can order products, and the system checks product availability before confirming the order.
  
- **Production Processes**: The system includes sustainable production processes such as recycling fishing nets and plastic bottles. Products are added to these processes, simulating how the company handles its eco-friendly production.

- **Testing of Product Orders**: The logic for checking if products are available and updating their status after being ordered is thoroughly tested.

---

## Classes and Interfaces

- **IProdotto**: Represents the product details such as type (swimsuit, pareo, hat), size, color, and availability.
  
- **ICliente**: Represents customer details such as name, email, preferred payment method, and the ability to order products.
  
- **IProcessoProduzione**: Defines the production process details including the name, description, and products in production.

- **Prodotto**: Implements the IProdotto interface and manages product details. It includes a method to assign products to customers.
  
- **Cliente**: Implements the ICliente interface and provides functionality for customers to order products.
  
- **ProcessoProduzione**: Implements the IProcessoProduzione interface and handles the addition of products to sustainable production processes.

---

## Demo & Testing

To see the project in action and test its functionality, visit the following [CodePen link](https://codepen.io/andreaferrari95/pen/ExqMJxd?editors=1111). There, you can explore the TypeScript implementation and interact with the simulated system to see how customers place orders, and how products move through production processes.

---

## Example Code Flow

1. **Product Creation**: Products such as swimsuits, pareos, and hats are instantiated with properties like type, size, color, and availability.
  
2. **Customer Interaction**: Customers are created and can place orders for products. The system checks if a product is available before assigning it to a customer.
  
3. **Production Process**: Products are added to specific production processes (e.g., "Riciclo Reti da Pesca"). The processes are simulated to reflect the steps in creating sustainable beachwear.

---

Feel free to explore the project and provide feedback on improvements or additional features you'd like to see!
