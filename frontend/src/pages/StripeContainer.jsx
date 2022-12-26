import React, { useEffect } from "react";
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
import { toast } from "react-toastify";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function StripeContainer() {
	const title = useParams();
	const title2 = title.title
	const navigate = useNavigate()
    const dispatch = useDispatch()
	const {user} = useSelector((state) => state.auth)
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
  }, []);

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

  return (
	
    <Styles>
      
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
                  Submit
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
    </Styles>
  );
}

export default StripeContainer