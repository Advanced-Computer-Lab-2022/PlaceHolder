import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Styles from "../components/Styles";
import { Form, Field } from "react-final-form";
import {useNavigate,useParams} from 'react-router-dom'
import Card from "../components/Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../components/cardUtlis";
import { useSelector , useDispatch} from "react-redux";
import { pay, refreshuser, registerCourse } from "../features/auth/authSlice";
import {getCoursePage} from "../features/courses/courseSlice"
import { toast } from "react-toastify";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function StripeContainer() {
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
	const title = useParams();
	const title2 = title.title
	const navigate = useNavigate()
    const dispatch = useDispatch()
	const {user} = useSelector((state) => state.auth)
  const {courses} = useSelector((state)=>state.courses)
  useEffect(() => {

    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(
          "pk_test_51MGkeSHPCfGDEtVEkb8Lt01xWJ2QhmBdFfpHMVofskQzyrDzKaYZVWCDetYaxhwKvE3Rr2UdUY8ZJe2COjcNKI7v00Bo0IaHTs"
        );
      };
      window.document.body.appendChild(s);
    }
    dispatch(getCoursePage(title2))
  }, []);
  const [toggle, setToggle] = useState()
  
  const onSubmit = async (values) => {
    await sleep(300);
    try {
      window.Stripe.card.createToken(
        {
          number: values.number,
          exp_month: values.expiry.split("/")[0],
          exp_year: values.expiry.split("/")[1],
          cvc: values.cvc,
          name: values.name,
        },
        (status, response) => {
          if (status === 200) {
           const data = {
                token: response,
                course: title2,
                country: user.country,
				username:user.username,
				email:user.email

              }
			  console.log(data)
			 const test = dispatch(pay(data))
			 const data2 = {
				username:user.username,
				courseName:title2
			 }
			 const data3 = {
				username:user.username
			 }
			  dispatch(registerCourse(data2))
			  dispatch(refreshuser(data3))
			  toast.success('Course Purchased Succesfully!')
			  navigate('/viewcourse/'+title2)
			  dispatch(refreshuser(data3))
          } else {
            toast.error(response.error.message);
          }
        }
      );
    } catch (error) {}
  };
  function handleCard(){
    setToggle("card")
    
  }
  function handleWallet(){
    setToggle("wallet")
  }
  return (
	<>
  <div className="container-fluid">
    <div className="row">
    <div className="col-8 border">
      <h5 className="text-center">Checkout</h5>
      <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder={user.firstName} value="" required="" disabled/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder={user.lastName} value="" required="" disabled/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder={user.username} required="" disabled/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder={user.email} disabled/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            
            
          </div>
      <div class="my-3">
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" onChange={()=>handleWallet()}/>
              <label class="form-check-label" for="debit">Pay With Wallet</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" onChange={()=>handleCard()}/>
              <label class="form-check-label" for="paypal">Pay With Card</label>
            </div>
          </div>
    {(toggle=="card")?(<Styles>
      
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Card
                number={values.number || ""}
                name={values.name || ""}
                expiry={values.expiry || ""}
                cvc={values.cvc || ""}
                focused={active}
              />
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  format={formatCreditCardNumber}
				  
                />
				{console.log(title.title)}
              </div>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="container">
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  Pay
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              
            </form>
          );
        }}
      />
    </Styles>):(<></>)}
    {(toggle == "wallet")?(
      <>
      Pay With Wallet
      </>
    ):(<></>)}
    
    </div>
    <div className="col-4 border">
    <div class="">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">1</span>
        </h4>
        <ul class="list-group mb-3">
          
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{title2}</h6>
              <small class="text-muted">Course</small>
            </div>
            <span class="text-muted">{findMyCurrency(user.country)}{CoursePriceConvertor(findMyCurrency(user.country),courses.price)}</span>
          </li>
          {console.log(courses.price)}
          <li class="list-group-item d-flex justify-content-between">
            <span>Total ({findMyCurrency(user.country)})</span>
            <strong>{CoursePriceConvertor(findMyCurrency(user.country),courses.price)}</strong>
          </li>
        </ul>

        
      </div>
    </div>
    
  </div>
    </div>
    
   
    </>
  );
}

export default StripeContainer