import React, { useState } from 'react'


const Fome2 = () => {
    const [Fullname, setFullname] = useState({
        couponName: "",
        couponCode: "",
        DiscountType: "",
        Discountvalue: "",
        Minvalue: "",
        MaxValue: "",
        ExpiryDate: "",
        Selectvalue: ""
    })


    const Copen = (e) => {
        console.log(typeof e.target.value)
        // const { name, value} = e.target;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

        setFullname({
            ...Fullname,
            [e.target.name]: (isNaN(e.target.value)) ? e.target.value : Number(e.target.value)
        })


        //   if(e.target.type=="number"){
        //     setFullname({ ...Fullname, [name]: Number(value) })

        //   }
        //   else{
        //     setFullname({ ...Fullname, [name]: (value) })

        //   }

    }


    const resFunc = (...num) => {
        console.log(num)
        const findValue = num. 
        console.log(findValue)
    }

    resFunc(1, 2, 3, 5, 3, 5, 4, 3, 3)



    const sumbit = (e) => {
        e.preventDefault()
        console.log(Fullname)


    }
    return (
        <>
            {/* <pre>{JSON.stringify(Fullname)}</pre>  */}
            <form action="" onSubmit={sumbit}>

                <input type="text" placeholder='couponName' value={Fullname.couponName} onChange={Copen} name='couponName' required minLength={3} maxLength={16} /><br />
                <input type="text" placeholder='copeCode' value={Fullname.couponCode} onChange={Copen} name='couponCode' required minLength={4} maxLength={10} /><br />
                <input type="number" placeholder='DiscountType' value={Fullname.DiscountType} onChange={Copen} name='DiscountType' /><br />
                <input type="number" placeholder='DiscountValue' value={Fullname.Discountvalue} onChange={Copen} name='Discountvalue' /><br />
                <input type="number" placeholder='MinValue' value={Fullname.Minvalue} onChange={Copen} required minLength={2} maxLength={10} name='Minvalue' /><br />
                <input type="number" placeholder='MaxValue' value={Fullname.MaxValue} onChange={Copen} required maxLength={10} minLength={5} name='MaxValue' /><br />
                <input type="date" placeholder='ExpiryDate' value={Fullname.ExpiryDate} onChange={Copen} name='ExpiryDate' /><br />
                <select class="form-select" aria-label="Default select example" value={Fullname.Selectvalue} onChange={Copen} name='Selectvalue'><br />
                    <option selected>SelectType</option>
                    <option >Hair</option>
                    <option >Biutu</option>
                    <option >Three</option>
                </select>
                <button >Sumbit</button><br />

            </form>


        </>

    )

}
export default Fome2;