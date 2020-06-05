import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    const checkout = screen.getByTestId(/checkout/i);


    fireEvent.change(firstName, { target: { value: 'Michael' } });
    fireEvent.change(lastName, { target: { value: 'Sheets' } });
    fireEvent.change(address, { target: { value: '5684 N Ridge' } });
    fireEvent.change(city, { target: { value: 'Chicago' } });
    fireEvent.change(state, { target: { value: 'IL' } });
    fireEvent.change(zip, { target: { value: '60660' } });
    fireEvent.click(checkout);

    expect(firstName.value).toBe('Michael');
    expect(lastName.value).toBe('Sheets');
    expect(address.value).toBe('5684 N Ridge');
    expect(city.value).toBe('Chicago');
    expect(state.value).toBe('IL');
    expect(zip.value).toBe('60660');
    expect(checkout).toBeInTheDocument();
    screen.findByText('You have ordered some plants! Woo-hoo!')

});
    