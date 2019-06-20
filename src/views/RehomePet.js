import React,{Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../css/CarouselPet.css";




export default class RehomePet extends React.Component {
  render() {
    return (
            <Fragment>
                <div className='d-form-container'>
                <Form style={{
                            background: "rgb(223, 105, 223)",
                            color: "white",
                            marginTop: "5rem",
                            minHeight: "24rem",
                            border: '1px solid rgb(223, 105, 223)',
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            marginLeft: '10%',
                            marginRight: '10%'
                                                
                            }}>
                    <FormGroup >
                        <Label for="d-PetName" >Name</Label>
                        <Input type="email" name="email" id="d-PetName" placeholder="Pet Name"  />
                    </FormGroup>
                    <FormGroup >
                        <Label for="d-PetAge">Pet Age</Label>
                        <Input type="text" name="text" id="d-PetAge" placeholder="Young/Senior/Adult" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="d-PetCategory">Species</Label>
                        <Input type="select" name="select" id="d-PetCategory">
                            <option>Dog</option>
                            <option>Cat</option>
                            {/* <option>Hamster</option>
                            <option>Bird</option> */}
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label for="d-Description">Description</Label>
                        <Input type="textarea" name="text" id="d-Description" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="d-PetImageFile">File</Label>
                        <Input type="file" name="file" id="d-PetImageFile" />
                    <FormText color="muted">
                        Submit a file of a clear picture of your pet.
                    </FormText>
                    </FormGroup>
                    <Button >Submit</Button>
                </Form>
                </div>
            </Fragment>

        
        
       
    );
  }
}