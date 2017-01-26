import React from 'react';
import withProps from './withProps'
import {TextInputComponent} from './TextInputComponent'
import {InputWithMinlength, InputWithMaxlength, ValidatingInputComponent} from './MinLength'

const maxLength9 = InputWithMaxlength(9);
const minLength7 = InputWithMinlength(7);
const TextInputMinLength7 = minLength7(TextInputComponent);
const TextInputWithRange79 = minLength7(maxLength9(TextInputComponent));

const maxLength92 = ValidatingInputComponent(value => value.length <= 9, value => 'max. 9 Zeichen')
const minLength72 = ValidatingInputComponent(value => value.length >= 7, value => 'min. 7 Zeichen')
const TextInputWithRange792 = minLength72(maxLength92(TextInputComponent));


export class MyComponent extends React.Component {
    state = {
        name: 'Max',
        surName: 'Stoiber',
        middleName: 'Wilhelm',
    }

    render() {
        console.log('MyComponent props:', this.props)
        return (
            <div>My Component
                <form>
                    <TextInputMinLength7 placeholder="Please enter your name" value={this.state.name} onChange={(ev) => this.setState({name: ev.target.value})}/>
                    <TextInputWithRange79 placeholder="Please enter your name" value={this.state.surName} onChange={(ev) => this.setState({surName: ev.target.value})}/>
                    <TextInputWithRange792 placeholder="Please enter your middle name" value={this.state.middleName} onChange={(ev) => this.setState({middleName: ev.target.value})}/>
                </form>
            </div>
        )
    }
}

export default withProps(
    {active: true, name: 'Franz'},
    MyComponent
)
