const asynchandler = require('express-async-handler')
const Course = require('../model/coursesmodel')
const payment = require('../model/paymentsModel');
const user = require('../model/usermodel');

const YOUR_DOMAIN = 'http://localhost:4242';

function findMyCurrency(myCountry1){
  
    switch (myCountry1) {
      case "United Kingdom": return'GBP';
        
      case "United States": return'USD';
        
        
    
      case "South Korea": return'KRW';
        
        
    
      case "Spain": return'EUR';
        
        
    
      case "Sweden": return'SEK';
        
        
    
      case "Switzerland": return'CHF';
        
        
    
      case "Thailand": return'THB';
        
        
    
      case "Turkey": return'TRY';
        
        
    
      case "United Arab Emirates": return'AED';
        
        
    
      case "Russia": return'RUB';
        
        
    
      case "Saudi Arabia": return'SAR';
        
        
    
      case "Scotland": return'GBP';
        
        
    
      case "Singapore": return'SGD';
        
        
    
      case "South Africa": return'ZAR';
        
        
    
      case "Netherlands": return'EUR';
        
        
    
      case "New Zealand": return'NZD';
        
        
    
      case "Pakistan": return'PKR';
        
        
    
      case "Philippines": return'PHP';
        
        
    
      case "Qatar": return'QAR';
        
        
    
      case "France": return'EUR';
        
        
    
      case "Germany": return'EUR';
        
        
    
      case "India": return'INR';
        
        
    
      case "Italy": return'EUR';
        
        
    
      case "Japan": return'JPY';
        
        
    
      case "Malaysia": return'MYR';
        
        
    
      case "Mexico": return'MXN';
        
        
    
      case "Australia": return'AUD';
        
        
    
      case "Bangladesh": return'BDT';
        
        
    
      case "Belgium": return'EUR';
        
        
    
      case "Brazil": return'BRL';
        
        
    
      case "Canada": return'CAD';
        
        
    
      case "China": return'CNY';
        
        
    
      case "Denmark": return'DKK';
        
        
    
      case 'Egypt': return'EGP';
        
        
    }
  }
  function CoursePriceConvertor(myCurrency  , CoursePrice){
  
  switch (myCurrency) {
    case 'KRW': return(1,424.07 * CoursePrice) ;
      
      
    case 'THB': return(37.96 * CoursePrice) ;
      
      
    case 'CHF': return CoursePrice ;
      
      
    case 'SEK': return (10.96 * CoursePrice) ;
      
      
    case 'AED':return (3.67 * CoursePrice) 
      
      
    case 'TRY': return  (18.61 * CoursePrice )
      
      
    case 'RUB': return (61.53 * CoursePrice )
      
      
    case 'SAR': return ( 3.76 * CoursePrice )
      
      
    case 'GBP':return  (0.86 * CoursePrice )
      
      
    case 'PKR':return  ( 221.88 * CoursePrice )
      
      
    case 'NZD':return  (1.72 * CoursePrice )
      
      
    case 'ZAR': return  (18.11 * CoursePrice )
      
      
    case 'SGD':return   (1.41 * CoursePrice )
      
      
    case 'INR':return (82.36 * CoursePrice )
      
    case 'QAR':return  (3.64 * CoursePrice )
      
      
    case 'PHP':return  58.02 * CoursePrice 
      
      
    case 'CAD':return  1.36 * CoursePrice 
      
      
    case 'BRL':return  5.34 * CoursePrice 
      
      
    case 'BDT':return  101.38 * CoursePrice 
      
      
    case 'AUD':return  1.56 * CoursePrice 
      
      
    case 'MXN':return  19.83 *  CoursePrice 
      
      
    case 'MYR':return  4.72 * CoursePrice 
      
      
    case 'JPY':return  147.41 * CoursePrice 
      
      
    case 'EGP':return  23.15 * CoursePrice 
      
      
    
    case 'DKK':return  7.47 * CoursePrice 
      
      
    
    case 'CNY':return  7.25 *  CoursePrice 
      
      
    
    case 'EUR':return  CoursePrice 
      
      
    
    case 'USD':return  CoursePrice 
      
      
    
    
  }
  }

const checkout = asynchandler(async (req,res) => {

    const responser = req.body.token
    const title = req.body.course
    const country = req.body.country
    const username = req.body.username
    const email = req.body.email
    var nd = new Date()
    var flag = false;
    

    // console.log(responser)
    // console.log(title)
    // console.log(country)
    // console.log(username)
    
    const courses = await Course.findOne({title})
    const myCurrency = findMyCurrency(country)
    var newprice = CoursePriceConvertor(myCurrency,courses.price)
    if(courses.ExpiryDate != null){
      const ed = new Date(courses.ExpiryDate)
        if(ed.valueOf()>nd.valueOf()){
          newprice = newprice - (newprice * (Number(courses.amountOfDiscount)/100))
        flag = true
        }
    }
    
    //console.log(courses.price)

    const stripe = require("stripe")(process.env.STRIPE_SECRET
      );
    
      
    
      stripe.customers
        .create({
          email: email,
          source: responser.id,
          name: responser.card.name,
        })
        .then((customer) => {
          if(flag){
            return stripe.charges.create({
              amount:Math.trunc(parseFloat(newprice))*100 ,
              description: `Payment for ${myCurrency} ${newprice} for Course ${title} at a discount of ${Number(courses.amountOfDiscount)}% .`,
              currency: myCurrency,
              customer: customer.id,
            });
          }else{
            return stripe.charges.create({
              amount:Math.trunc(parseFloat(newprice))*100 ,
              description: `Payment for ${myCurrency} ${newprice} for Course ${title} .`,
              currency: myCurrency,
              customer: customer.id,
            });
          }
          
        })
        .then(createTransaction(username,title,newprice,myCurrency,flag,courses.amountOfDiscount))
        .then(createInstructorTransaction(courses.instructorName,courses.title,courses.price,flag,courses.amountOfDiscount))
        .catch((err) => console.log(err));
        


})

async function createInstructorTransaction(instructorName,courseName,coursePrice,flag,discount){
  const instructor = await user.findOne({username:instructorName})
  const findInstructorPayments = await payment.findOne({username:instructorName})
  const instructorCurrency = findMyCurrency(instructor.country)
  const coursePriceNew = CoursePriceConvertor(instructorCurrency,coursePrice)
  const nd = new Date()
  const discountedPrice = Number(coursePriceNew) - (Number(coursePriceNew) * (Number(discount)/100))
  const discountedPriceTotal = Number(discountedPrice) - (Number(discountedPrice) * 30/100)
  const coursePriceNewTotal = Number(coursePriceNew) - (Number(coursePriceNew)*30/100)
  if(findInstructorPayments != null){
    if(findInstructorPayments.transactions == null){
      if(flag){
        findInstructorPayments.transactions = {
          paymentAmount:Math.trunc(discountedPriceTotal),
          CoursePaidFor:courseName,
          Description:`Someone Bought your course you receive 70% of price and company takes 30% Total Received  With Course Discount of ${discount}% :  ${discountedPriceTotal} ${instructorCurrency}`,
          DateOfPurchase:nd,
          CurrencyOfPurchase:instructorCurrency
        }
        findInstructorPayments.wallet = Number(findInstructorPayments.wallet) + Math.trunc(discountedPriceTotal)
      }else{
        findInstructorPayments.transactions = {
          paymentAmount:Math.trunc(coursePriceNewTotal),
          CoursePaidFor:courseName,
          Description:`Someone Bought your course you receive 70% of price and company takes 30% Total Received  :  ${coursePriceNewTotal} ${instructorCurrency}`,
          DateOfPurchase:nd,
          CurrencyOfPurchase:instructorCurrency
        }
        findInstructorPayments.wallet = Number(findInstructorPayments.wallet) + Math.trunc(coursePriceNewTotal)

      }
    }else{
      if(flag){
          findInstructorPayments.transactions.push({
            paymentAmount:discountedPriceTotal,
          CoursePaidFor:courseName,
          Description:`Someone Bought your course you receive 70% of price and company takes 30% Total Received  With Course Discount of ${discount}% :  ${discountedPriceTotal} ${instructorCurrency}`,
          DateOfPurchase:nd,
          CurrencyOfPurchase:instructorCurrency
          })
          findInstructorPayments.wallet = Number(findInstructorPayments.wallet) + Math.trunc(discountedPriceTotal)

      }else{
        findInstructorPayments.transactions.push({
          paymentAmount:Math.trunc(coursePriceNewTotal),
          CoursePaidFor:courseName,
          Description:`Someone Bought your course you receive 70% of price and company takes 30% Total Received  :  ${coursePriceNewTotal} ${instructorCurrency}`,
          DateOfPurchase:nd,
          CurrencyOfPurchase:instructorCurrency
        })
        findInstructorPayments.wallet = Number(findInstructorPayments.wallet) + Math.trunc(coursePriceNewTotal)

      }
    }
    const confirmTransaction = await payment.findOneAndUpdate({username:instructorName},{$set:findInstructorPayments})

  }else{
    if(flag){
      const confirmTransaction = await payment.create({
        username:instructorName,
        transactions:[{
          paymentAmount:Math.trunc(discountedPriceTotal),
          CoursePaidFor:courseName,
          Description:`Someone Bought your course you receive 70% of price and company takes 30% Total Received  With Course Discount of ${discount}% :  ${discountedPriceTotal} ${instructorCurrency}`,
          DateOfPurchase:nd,
          CurrencyOfPurchase:instructorCurrency
        }],
        wallet:Math.trunc(discountedPriceTotal),
        userCurrency:instructorCurrency
    })

    }else{
      const confirmTransaction = await payment.create({
        username:instructorName,
        transactions:[{
          paymentAmount:Math.trunc(coursePriceNewTotal),
          CoursePaidFor:courseName,
          Description:`Someone Bought your course you receive 70% of price and company takes 30% Total Received  :  ${coursePriceNewTotal} ${instructorCurrency}`,
          DateOfPurchase:nd,
          CurrencyOfPurchase:instructorCurrency
        }],
        wallet:Math.trunc(coursePriceNewTotal),
        userCurrency:instructorCurrency
    })
    }
  }

}

async function createTransaction(username,title,price,currency,flag,discount){

    const findPayer = await payment.findOne({username})
    const date = new Date()

    if(findPayer != null){
        if(findPayer.transactions ==null){
            if(flag){
              findPayer.transactions = {
                paymentAmount:price,
                CoursePaidFor:title,
                Description:  `Payment for ${currency} ${price} for Course ${title} with a discount of ${discount}%`,
                DateOfPurchase: date,
                CurrencyOfPurchase:currency
            }
            }else{
              findPayer.transactions = {
                paymentAmount:price,
                CoursePaidFor:title,
                Description:  `Payment for ${currency} ${price} for Course ${title}`,
                DateOfPurchase: date,
                CurrencyOfPurchase:currency
            }
            }
           
        }else{
          if(flag){
            findPayer.transactions.push({
              paymentAmount:price,
              CoursePaidFor:title,
              Description:  `Payment for ${currency} ${price} for Course ${title} with a discount of ${discount}%`,
              DateOfPurchase: date,
              CurrencyOfPurchase:currency
          })
          }else{
            findPayer.transactions.push({
                paymentAmount:price,
                CoursePaidFor:title,
                Description:  `Payment for ${currency} ${price} for Course ${title}`,
                DateOfPurchase: date,
                CurrencyOfPurchase:currency
            })
          }
        }
        const confirmTransaction = await payment.findOneAndUpdate({username},{$set:findPayer})
    }else{
        if(flag){
          const confirmTransaction = await payment.create({
            username:username,
            transactions:[{
                paymentAmount:price,
                CoursePaidFor:title,
                Description:  `Payment for ${currency} ${price} for Course ${title} with a discount of ${discount}%`,
                DateOfPurchase: date,
                CurrencyOfPurchase:currency
            }],
            wallet:0,
            userCurrency:currency
        })
        }else{
        const confirmTransaction = await payment.create({
            username:username,
            transactions:[{
                paymentAmount:price,
                CoursePaidFor:title,
                Description:  `Payment for ${currency} ${price} for Course ${title}`,
                DateOfPurchase: date,
                CurrencyOfPurchase:currency
            }],
            wallet:0,
            userCurrency:currency
        })
      }
    }
    
}

const getMyTransactions = asynchandler(async (req,res) => {
  const username = req.body.username
  //console.log(username)
  const refunds = await payment.findOne({username})
  //console.log(refunds)
  res.status(200).json(refunds)
})

const payByWallet = asynchandler(async (req,res) => {
  const username = req.body.username
  const price = req.body.price
  const discount = req.body.discount
  const title = req.body.title
  const instructorName = req.body.ins
  const org = req.body.org
  const amount = req.body.amount

  const nd = new Date()
  
  const payer = await payment.findOne({username})
  
  payer.wallet = Number(payer.wallet) - Number(price)
  if(payer.transactions == null){
    payer.transactions = {
                paymentAmount:price,
                CoursePaidFor:title,
                Description:  `Payment for ${payer.userCurrency} ${price} for Course ${title}`,
                DateOfPurchase: nd,
                CurrencyOfPurchase:payer.userCurrency
    }
  }else{
    payer.transactions.push({
                paymentAmount:price,
                CoursePaidFor:title,
                Description:  `Payment for ${payer.userCurrency} ${price} for Course ${title}`,
                DateOfPurchase: nd,
                CurrencyOfPurchase:payer.userCurrency
    })
  }
  console.log("Payer : "+payer)
  const payer1 = await payment.findOneAndUpdate({username},payer)
  createInstructorTransaction(instructorName,title,org,discount,amount)
  
  res.status(200).json(payer1)
})




module.exports = {
    
    checkout,
    createTransaction,
    getMyTransactions,
    payByWallet
    
    
    
}