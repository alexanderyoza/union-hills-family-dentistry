import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from "react-router-dom";
import Request from '../Components/Request';

jest.mock('axios');

describe('<Request />', () => {
    test('renders without crashing', () => {
        window.scrollTo = jest.fn();

        render(
            <MemoryRouter>
                <Request />
            </MemoryRouter>
        );
    });

    test('alerts the user if required fields are missing', async () => {
        window.scrollTo = jest.fn();
        window.alert = jest.fn();

        render(
            <MemoryRouter>
                <Request />
            </MemoryRouter>
        );
        
        // Click on the submit button
        fireEvent.click(screen.getByText('Submit'));
        
        // Wait for the alert to appear and check its message
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith('Submit not successful. Please ensure all required boxes are correctly completed.'));
    });

    test('displays a success message after form submission', async () => {
        window.scrollTo = jest.fn();
        
        render(
            <MemoryRouter>
                <Request />
            </MemoryRouter>
        );
        
        // Mock the axios response to simulate successful submission
        axios.post.mockResolvedValueOnce({ data: {} });

        // Assuming you fill in all required fields here...
        fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'Test' } });
        fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Email' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Phone Number'), { target: { value: '1234567890' } });

        // Click on the submit button
        fireEvent.click(screen.getByText('Submit'));

        // Expect success message to be in the document
        await screen.findByText('Your request was succesfully submitted');
    });
});
