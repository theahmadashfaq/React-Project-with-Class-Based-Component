import React, { Component } from 'react'

export class cal extends Component {
    constructor() {
        super();
        this.state = {
          mortgageAmount: '',
          mortgageTerm: '',
          interestRate: '',
    
          sum: 0,
          multiply: 0
        };
      }
    
      Input = (element) => {
        const { id, value } = element.target;
        this.setState({ [id]: value });
      }
    
      calculate = () => {
        const { mortgageAmount, mortgageTerm, interestRate } = this.state;
        const amount = Number(mortgageAmount);
        const term = Number(mortgageTerm);
        const rate = Number(interestRate);
    
        const sum = amount + term + rate;
        const multiply = amount * term * rate;
    
        this.setState({
          showResult: true,
          sum,
          multiply
        });
      }
    
      render() {
        const { mortgageAmount, mortgageTerm, interestRate, showResult, sum, multiply } = this.state;
    
        return (
          <div className="body-container">
            <div className="cal">
              <div className="f">
                <div className="header">
                  <h1>Mortgage Calculator</h1>
                  <p className="clear-btn">Clear All</p>
                </div>
                
                <div className="input">
                <label htmlFor="mortgageAmount">Mortgage Amount</label>
                  <div className="input1">
                <span>£</span>
                    <input type="text" id="mortgageAmount" className="input11" placeholder="" value={mortgageAmount} onChange={this.Input}/>
                  </div>
                </div>
                
                <div className="t">
                  <div>
                    <label htmlFor="mortgageTerm">Mortgage Term</label>
                    <div className="input1">
                    <input type="text" id="mortgageTerm" className="input11" placeholder="" value={mortgageTerm} onChange={this.Input}/>
                      <div className="in">years</div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interestRate">Interest Rate</label>
                    <div className="input1">
                    <input type="text" id="interestRate" className="input11" placeholder="" value={interestRate} onChange={this.Input}/>
                      <div className="in">%</div>
                    </div>
                  </div>
                </div>
                
                <div className="third">
                  <label>Mortgage Type</label>
                  <div className="radio">
                    <input type="radio" id="repayment" name="mortgage-type"/>
                    <label htmlFor="repayment">Repayment</label>
                  </div>
                  <div className="radio">
                    <input type="radio" id="interest-only" name="mortgage-type"/>
                    <label htmlFor="interest-only">Interest Only</label>
                  </div>
                </div>
                
                <button className="button" onClick={this.calculate}>
                  <i className="fa-solid fa-calculator"></i>
                  Calculate Repayments
                </button>
              </div>
              
              <div className="image">
                {!showResult ? (
                  <>
                    <img src="cal.png" alt="" />
                    <h3>Result Shown Here</h3>
                    <p>Complete the form and click "calculate repayment" to see what your monthly repayments would be</p>
                  </>) :(
                  <div style={{backgroundColor: "#0a1e2b", borderRadius: "12px", color: "white"}}>
                    <div style={{padding: "24px 24px 24px 24px", backgroundColor: "#1a3142", textAlign: "left"}}>
                      <h2 style={{fontSize: "24px", fontWeight: "bold", color: "white", marginTop: 0, marginBottom: "12px", textAlign: "left"}}>Your results</h2>
                      
                      <p style={{color: "#a9b6c0", fontSize: "15px", lineHeight: 1.5, marginBottom: "24px", textAlign: "left"}}>
                        Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
                      </p>
    
                      <div style={{width: "100%", height: "3px", backgroundColor: "#e2df36", margin: "24px 0"}}></div>
                    </div>
    
                    <div style={{padding: "0 24px 24px 24px", textAlign: "left"}}>
                      <div style={{paddingTop: "8px", textAlign: "left"}}>
                        <p style={{color: "#a9b6c0", fontSize: "15px", marginBottom: "8px", textAlign: "left"}}>Your monthly repayments</p>
                        <p style={{fontSize: "56px", color: "#e2df36", fontWeight: 700, margin: 0, textAlign: "left"}}> ${sum}</p>
                      </div>
                      
                      <div style={{marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(169, 182, 192, 0.1)", textAlign: "left"}}>
                        <p style={{color: "#a9b6c0", fontSize: "15px", marginBottom: "8px", textAlign: "left"}}>Total you'll repay over the term</p>
                        <p style={{color: "white", fontSize: "32px", fontWeight: 600, margin: 0, textAlign: "left"}}>${multiply}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
    
  }

export default cal
