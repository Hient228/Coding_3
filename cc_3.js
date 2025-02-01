//Task 1: Product Price Management
let prices = [17, 22, 6, 101, 8];
prices.push(5);
prices.shift();
console.log("Updated Prices:",prices);

//Task 2: Modifying Customer Orders 
let orders = [10, 16, 25, 60, 35];
orders [2]+=5;
let totalOrders = orders.reduce((sum, order) => sum + order, 0); 
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);

//Task 3: Employee Performance Tracking
let employee = { name: "Helen", role: "Project Manager", performanceScore: 80, isActive: true };
employee.performanceScore = 85; 
employee.promotionEligible = true; 
console.log("Updated Employee:", employee);

//Task 4: Customer Feedback Records 
let feedback = [
    { customerName: "Kelsey Khong", feedbackText:"Good value for the price", rating: 5 }, 
    { customerName: 'Hai Tran', feedbackText:"Amazing product quality", rating: 5 },
    { customerName: 'Rei Nguyen', feedbackText:"Will buy again", rating: 4}];
    feedback.push({ customerName: 'Anna Nguyen', feedbackText:"Good experience", rating: 4 });
    console.log("Customer Feedback:", feedback);