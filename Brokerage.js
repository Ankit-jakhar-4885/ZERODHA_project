import React from 'react';


function Brokerage() {
    return ( 
      <div className='container'>
        <div className='row p-5  mt-5  text-center   border-top '  >
              <div className='col-8 p-4'> 
                         
              <a href='' style={{textDecoration:"none"}}>  <h1 className='fs-5'>Brokerage Calculator</h1></a>

             <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}}  className='text-muted '>

              <li>Call & Trade RMS auto-squareoff: Addition charges of $50 + GST per order.</li>
                     <li>Digital contract notes will be sent via e-mail.</li>

                     <li>Physical copies of contract notes ,if required ,shall charged $ 20 per contract note.courier charges apply.</li>

                     <li>For NRI account(non-PIS),0.5% or $ 100 per excuted order for equity (whichever is lower).</li>
                     <li>For NRI account(PIS),0.5% or $200 per excuted order for equity (whichever is lower).</li>
                     <li>If the account is in debit balance ,any order placed will charged $40 per excuted order instead of $20 per excuted order.</li>
                            
                      </ul>
                     



                       
                          
                     </div>
                        
               <div className='col-4 p-4'> 
                 <a href='' style={{textDecoration:"none"}}>  <h1 className='fs-5'>List of charges</h1></a>
                          
            </div>
            </div>  
          </div> 
       );
}

export default Brokerage;