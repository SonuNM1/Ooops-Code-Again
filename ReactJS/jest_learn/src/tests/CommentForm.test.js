import {fireEvent, render, screen} from '@testing-library/react'
import CommentForm from '../components/CommentForm'
import userEvent from '@testing-library/user-event'

test('Initial Conditions', ()=> {
    render(<CommentForm/>)

    const commentInput = screen.getByRole('textbox')
    expect(commentInput).toBeInTheDocument() ; // assert 

    const checkbox = screen.getByLabelText('I agree to terms and conditions', {exact: false}) ; // exact-false for case insensitivity 
    expect(checkbox).toBeInTheDocument() ; 

    const submitButton = screen.getByRole('button', {name: 'comment', exact: false}) ; 
    expect(checkbox).toBeDisabled() ; 

})

test('Enable submit button on type and checkbox click', () => {
    render(<CommentForm/>)

    const checkbox = screen.getByLabelText('i agree to terms and conditions', {exact: false})

    const submitButton = screen.getByRole('button', {name: 'comment', exact: false})

    const commentInput = screen.getByPlaceholderText('write your comment here', {exact: false})

    fireEvent.change(commentInput, {target:{value: 'something'}})

    fireEvent.click(checkbox)

    expect(submitButton).toBeEnabled() ; 

    fireEvent.click(checkbox) ; 

    expect(submitButton).toBeDisabled() ; 

})