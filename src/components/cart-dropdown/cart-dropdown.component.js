import React from 'react'
import CustomButton from "../custom-button/custom-button.component"
import "./cart-dropdown.styles.scss"

export default function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
                <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}
